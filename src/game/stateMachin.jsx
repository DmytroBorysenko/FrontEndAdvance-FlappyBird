var StateMachine = require('javascript-state-machine');

export const stateMachine = new StateMachine({
    init: 'start',
    transitions: [
      { name: 'begin',     from: 'start',  to: 'play' },
      { name: 'progres',   from: 'play', to: 'over'  },
      { name: 'end',       from: 'over', to: 'play'    }
    ],
})