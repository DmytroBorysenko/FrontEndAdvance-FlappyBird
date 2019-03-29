import * as React from "react";
import * as ReactDOM from "react-dom";
import { Game } from "./game/game.jsx";



class App extends React.Component {
  constructor(props,state) {
    super(props,state);
    this.game = new Game()
  }

render(){
  return (
  <div>Flappy Bird</div>
  );
};
}

ReactDOM.render(<App/>, document.getElementById("index"));
