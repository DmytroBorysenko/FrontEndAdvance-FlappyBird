import { GameItemCtrl } from "./gameItem/gameItemCtrl.jsx";
import { BgCtrl } from "./bg/bgCtrl.jsx";

var keys = {
  W: false,
  S: false,
  A: false,
  D: false
};

export class Game {
  constructor() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 300;
    this.canvas.height = 300;
    this.items = [];
    this.mainCharacter = new GameItemCtrl("red", [0, 0, 10, 10]);
    this.bg = new BgCtrl();
    this.items.push(...[this.mainCharacter, this.bg]);

    var W = 87;
    var S = 83;
    var A = 65;
    var D = 68;
    document.addEventListener("keydown", function(e) {
      if (e.keyCode === W) {
        keys.W = true;
      }
      if (e.keyCode === S) {
        keys.S = true;
      }
      if (e.keyCode === A) {
        keys.A = true;
      }
      if (e.keyCode === D) {
        keys.D = true;
      }
    });

    document.addEventListener("keyup", function(e) {
      if (e.keyCode === W) {
        keys.W = false;
      }
      if (e.keyCode === S) {
        keys.S = false;
      }
      if (e.keyCode === A) {
        keys.A = false;
      }
      if (e.keyCode === D) {
        keys.D = false;
      }
    });

    this.draw();
  }

  changeColor() {
    this.items.forEach(item => item.setNewColor());
  }
  draw() {

  this.ctx.fillStyle
    if (keys.W) {
      this.mainCharacter.moveUp();
  }
    if (keys.S) {
      this.mainCharacter.moveDown();
  }
  if (keys.A) {
    this.mainCharacter.moveLeft();
}
if (keys.D) {
  this.mainCharacter.moveRight();
}
    this.ctx.clearRect(0, 0, 300, 300);
    this.items.forEach(item => item.animate(this.ctx));
    requestAnimationFrame(() => this.draw());
  }
}
