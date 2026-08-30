const router = require('express').Router();
const { body } = require('express-validator');
const controller = require('../controllers/authController');
const auth = require('../middleware/auth');
router.post('/register', [body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters.'), body('email').isEmail().withMessage('Enter a valid email.'), body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.')], controller.register);
router.post('/login', [body('email').isEmail().withMessage('Enter a valid email.'), body('password').notEmpty().withMessage('Password is required.')], controller.login);
router.get('/me', auth, controller.me);
module.exports = router;
