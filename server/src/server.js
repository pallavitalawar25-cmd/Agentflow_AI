const express = require('express'); const helmet = require('helmet'); const cors = require('cors'); const morgan = require('morgan'); const { port, clientUrl } = require('./config/env');
const app = express(); app.use(helmet()); app.use(cors({ origin: clientUrl })); app.use(express.json()); app.use(morgan('dev'));
app.get('/api/health', (req, res) => res.json({ status: 'ok', storage: 'memory', timestamp: new Date().toISOString() }));
app.use('/api/auth', require('./routes/authRoutes')); app.use('/api/workflows', require('./routes/workflowRoutes')); app.use('/api/executions', require('./routes/executionRoutes')); app.use('/api/integrations', require('./routes/integrationRoutes'));
app.use((req, res) => res.status(404).json({ message: 'Route not found.' })); app.use((err, req, res, next) => { console.error(err.message); res.status(err.status || 500).json({ message: err.message || 'Unexpected server error.' }); });
app.listen(port, () => console.log(`Agentflow API listening on ${port}`));
