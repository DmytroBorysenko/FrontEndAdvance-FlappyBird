const StateMachine = require("javascript-state-machine");

export const stateMachine = new StateMachine({
  init: "begin",
  transitions: [
    { name: "start", from: "begin", to: "progress" },
    { name: "stop", from: "progress", to: "finish" },
    { name: "reset", from: "finish", to: "start" }
  ],
  methods: {
    onStart: () => {
      console.log("I begin");
    },
    onStop: () => {
      console.log("I progress");
    },
    onReset: () => {
      console.log("I end");
    }
  }
});
