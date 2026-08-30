const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');
module.exports = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Authentication required.' });
  try { req.user = jwt.verify(token, jwtSecret); next(); } catch { res.status(401).json({ message: 'Invalid or expired session.' }); }
};
