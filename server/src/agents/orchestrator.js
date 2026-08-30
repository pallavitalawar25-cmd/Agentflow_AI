const { collection } = require('../config/store');
const planner = require('./plannerAgent'); const execution = require('./executionAgent'); const validation = require('./validationAgent'); const recovery = require('./recoveryAgent'); const monitoring = require('./monitoringAgent');
const executions = collection('executions'); const logs = collection('logs'); const notifications = collection('notifications');
exports.run = async (workflow, owner) => {
  const run = executions.create({ workflowId: workflow._id, owner, workflowSnapshot: JSON.parse(JSON.stringify(workflow)), status: 'RUNNING', currentNode: null, startTime: new Date().toISOString(), inputs: {}, outputs: {}, retryCount: 0 });
  for (const agent of [planner, execution, validation, recovery, monitoring]) { const event = await agent(workflow); logs.create({ executionId: run._id, workflowId: workflow._id, nodeId: null, ...event }); }
  const endTime = new Date().toISOString(); executions.update(run, { status: 'COMPLETED', endTime, duration: new Date(endTime) - new Date(run.startTime), outputs: { message: 'Workflow completed successfully.' } });
  notifications.create({ owner, workflowId: workflow._id, executionId: run._id, type: 'success', title: 'Workflow completed', message: `${workflow.name} completed successfully.`, isRead: false }); return run;
};
exports.list = (owner) => executions.filter((e) => e.owner === owner).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
exports.get = (id, owner) => executions.find((e) => e._id === id && e.owner === owner);
exports.timeline = (id, owner) => exports.get(id, owner) ? logs.filter((l) => l.executionId === id) : null;
