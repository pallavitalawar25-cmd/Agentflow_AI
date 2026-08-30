const data = { users: [], workflows: [], executions: [], logs: [], notifications: [] };
let sequence = 1;
const id = () => `${Date.now().toString(36)}${(sequence++).toString(36)}`;
const collection = (name) => ({
  all: () => data[name],
  find: (predicate) => data[name].find(predicate),
  filter: (predicate) => data[name].filter(predicate),
  create: (document) => { const item = { _id: id(), ...document, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; data[name].push(item); return item; },
  update: (item, fields) => Object.assign(item, fields, { updatedAt: new Date().toISOString() }),
  remove: (predicate) => { const index = data[name].findIndex(predicate); return index >= 0 ? data[name].splice(index, 1)[0] : null; }
});
module.exports = { collection, data, mode: 'memory' };
