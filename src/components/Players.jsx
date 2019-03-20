import * as React from "react";
import { agent } from "../utils/agent";
import "./Players.scss";
export class Players extends React.Component {
  constructor(p, s) {
    super(p, s);
    this.state = {
      newPlayer: { name: "", age: "75" },
      players: []
    };

    this.loadAll();
  }

  render() {
    return (
      <div class="alert alert-primary" id="players">
        {JSON.stringify(this.state.newPlayer)}
        <div>
          <h1>Hello Players</h1>
          <div className="row">
          <div className="col-sm-5 col-lg-12 col-md-7 ">
          <div className="card">
            <div className="card-body">
              <form  class="alert alert-info" onSubmit={() => this.addNewPlayer()} action="#">
                <div class="form-group">
                  <label for="Name">Name:</label>
                  <input
                    class="form-control"
                    id="name"
                    placeholder="Players Name"
                    onChange={e => this.changeNewPlayerName(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="Age">Age:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="age"
                    placeholder="Players Age"
                    onChange={e => this.changeNewPlayerAge(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  ADD
                </button>
              </form>
              </div>
            </div>
          </div>
          </div>

        


          <ul class="list-group mt-2">
            {this.state.players.map((player, i) => {
              return (
                <li class="list-group-item list-group-item-danger" key={i}>
                  name: {player.name}, age: {player.age}
                  <button class="btn btn-none btn-sm disabled p-0 ml-2" onClick={() => this.delPlayer(i)}>&#9785;</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  changeNewPlayerName(name) {
    this.setState({
      newPlayer: Object.assign(this.state.newPlayer, { name })
    });
  }

  changeNewPlayerAge(age) {
    this.setState({
      newPlayer: Object.assign(this.state.newPlayer, { age })
    });
  }

  addNewPlayer() {
    agent.Player.add(this.state.newPlayer, this.state.players.length, () => {
      this.loadAll();
    });
  }
  delPlayer(index) {
    this.state.players.splice(index, 1);
    agent.Player.del(this.state.players, () => {
      this.loadAll();
    });
  }

  async loadAll() {
    const players = await agent.Player.getAll();
    this.setState({ players });
  }
}
