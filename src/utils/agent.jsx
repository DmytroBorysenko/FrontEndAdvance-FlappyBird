import * as superagent from "superagent";

const ROOT_API = "https://aaaa-2265d.firebaseio.com";

const Player = {
  getAll: () =>
    superagent.get(`${ROOT_API}/players.json`).then(res => res.body),
  add: (players, index, cb) => {
    superagent
      .put(`${ROOT_API}/players/${index}.json`)
      .send(players)
      .end(cb);
  },
  del: (players, cb = ()=>{}) => {
    superagent
      .put(`${ROOT_API}/players.json`)
      .send(players)
      .end(cb);
  }
};

Player.getAll().then(players => {
  console.log(players);
});
export const agent = {
  Player
};
