import * as superagent from "superagent";

const ROOT_API = "https://aaaa-2265d.firebaseio.com";

const Player = {
  getALL: () => superagent.get(`${ROOT_API}/players.json`).then((res) => res.body), 

  add: (players, index, cb) => {
  superagent.put(`${ROOT_API}/players/${index}.json`)
      .send(players)
      .end(cb)
  }
}
Player.getALL().then((players)=>{
console.log(players)
})
export const agent = {
  Player
};
