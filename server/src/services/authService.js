const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { collection } = require('../config/store');
const { jwtSecret } = require('../config/env');
const users = collection('users');
const safeUser = ({ password, ...user }) => user;
function tokenFor(user) { return jwt.sign({ id: user._id, role: user.role }, jwtSecret, { expiresIn: '7d' }); }
async function register({ name, email, password }) {
  const normalEmail = email.toLowerCase();
  if (users.find((u) => u.email === normalEmail)) throw Object.assign(new Error('An account with that email already exists.'), { status: 409 });
  const user = users.create({ name, email: normalEmail, password: await bcrypt.hash(password, 12), role: 'operator', lastLogin: new Date().toISOString() });
  return { user: safeUser(user), token: tokenFor(user) };
}
async function login({ email, password }) {
  const user = users.find((u) => u.email === email.toLowerCase());
  if (!user || !(await bcrypt.compare(password, user.password))) throw Object.assign(new Error('Invalid email or password.'), { status: 401 });
  users.update(user, { lastLogin: new Date().toISOString() });
  return { user: safeUser(user), token: tokenFor(user) };
}
function me(id) { const user = users.find((u) => u._id === id); return user && safeUser(user); }
module.exports = { register, login, me };
