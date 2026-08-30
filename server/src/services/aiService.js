const node = (id, type, label, x, y, config = {}) => ({ id, type, position: { x, y }, data: { label, config } });
function build(prompt) {
  const text = prompt.toLowerCase();
  let action = { type: 'email', label: 'Send email', config: { to: 'lead@example.com', subject: 'New lead' } };
  if (text.includes('slack')) action = { type: 'slack', label: 'Post Slack notification', config: { channel: '#orders', message: 'Order completed' } };
  if (text.includes('discord')) action = { type: 'discord', label: 'Post Discord notification', config: { channel: 'invoices', message: 'New invoice received' } };
  if (text.includes('sheet') || text.includes('google sheets')) action = { type: 'sheets', label: 'Append customer row', config: { sheet: 'Customers', values: 'name,email' } };
  const triggerLabel = text.includes('order') ? 'Order completed' : text.includes('invoice') ? 'New invoice' : text.includes('customer') ? 'New customer' : 'New lead created';
  const nodes = [node('trigger-1', 'trigger', triggerLabel, 50, 160, { event: triggerLabel }), node('action-1', action.type, action.label, 320, 160, action.config), node('monitor-1', 'monitor', 'Record execution', 610, 160, {})];
  const edges = [{ id: 'e-trigger-action', source: 'trigger-1', target: 'action-1', animated: true }, { id: 'e-action-monitor', source: 'action-1', target: 'monitor-1', animated: true }];
  return { name: `${action.label} automation`, description: prompt, nodes, edges, triggerConfig: { type: 'manual', event: triggerLabel }, tags: ['generated', action.type], generator: 'deterministic' };
}
async function generate(prompt) {
  // The deterministic builder is deliberately reliable for the no-key MVP path.
  return build(prompt);
}
module.exports = { generate };
