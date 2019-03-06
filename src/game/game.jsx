import { GameItemCtrl } from "./gameItem/gameItemControler.jsx";

export class Game {
  constructor() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 300;
    this.canvas.height = 300;
    this.items=[];
    this.items.push(new GameItemCtrl('red', [150,150,50,50]))

    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(150, 150, 70, 70);

    this.draw();
  }

  changeColor(){
      this.items.forEach((item)=> item.setNewColor())
  }
  draw() {
    this.ctx.clearRect(0, 0, 300, 300);
    this.items.forEach((item)=>item.animate(this.ctx))
    requestAnimationFrame(() => this.draw());
  }
}
