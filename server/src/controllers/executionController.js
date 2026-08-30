const orchestrator = require('../agents/orchestrator');
exports.list = (req, res) => res.json({ executions: orchestrator.list(req.user.id) });
exports.get = (req, res) => { const execution = orchestrator.get(req.params.id, req.user.id); return execution ? res.json({ execution }) : res.status(404).json({ message: 'Execution not found.' }); };
exports.timeline = (req, res) => { const timeline = orchestrator.timeline(req.params.id, req.user.id); return timeline ? res.json({ timeline }) : res.status(404).json({ message: 'Execution not found.' }); };
