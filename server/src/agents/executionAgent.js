module.exports = async (workflow) => ({ agent: 'execution', level: 'success', message: `Executed ${workflow.nodes.length} nodes in sequence.`, metadata: { simulated: true } });
