const { validationResult } = require('express-validator');
const auth = require('../services/authService');
const failValidation = (req, res) => { const errors = validationResult(req); return errors.isEmpty() ? null : res.status(422).json({ message: errors.array()[0].msg, errors: errors.array() }); };
exports.register = async (req, res, next) => { try { if (failValidation(req, res)) return; res.status(201).json(await auth.register(req.body)); } catch (e) { next(e); } };
exports.login = async (req, res, next) => { try { if (failValidation(req, res)) return; res.json(await auth.login(req.body)); } catch (e) { next(e); } };
exports.me = (req, res) => { const user = auth.me(req.user.id); if (!user) return res.status(404).json({ message: 'User not found.' }); res.json({ user }); };
