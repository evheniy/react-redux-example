import RL from 'redux-lazy';

const rl = new RL('form');
rl.addAction('text', { text: '' });
rl.addAction('submit', {});

const result = rl.flush();

export default result;