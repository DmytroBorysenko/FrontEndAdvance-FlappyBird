import { GameItemCtrl } from "./gameItem/gameItemCtrl.jsx";
import { BgCtrl } from "./bg/bgCtrl.jsx";
import { CircleCtrl } from "./Circle/circleCtrl.jsx";

var keys = {
  W: false,
  S: false,
  A: false,
  D: false,
  UP: false,
  DOWN: false,
  Right: false,
  Left: false
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
    this.circle = new CircleCtrl();
    this.items.push(...[this.mainCharacter, this.bg, this.circle]);

    var W = 87;
    var S = 83;
    var A = 65;
    var D = 68;

    var UP = 38;
    var DOWN = 40;
    var Right = 39;
    var Left = 37;
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
      if (e.keyCode === UP) {
        keys.UP = true;
      }
      if (e.keyCode === DOWN) {
        keys.DOWN = true;
      }
      if (e.keyCode === Right) {
        keys.Right = true;
      }
      if (e.keyCode === Left) {
        keys.Left = true;
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
      if (e.keyCode === UP) {
        keys.UP = false;
      }
      if (e.keyCode === DOWN) {
        keys.DOWN = false;
      }
      if (e.keyCode === Right) {
        keys.Right = false;
      }
      if (e.keyCode === Left) {
        keys.Left = false;
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
 if(keys.UP){
   this.circle.moveUp();
 }
 if(keys.DOWN){
   this.circle.moveDown();
 }
 if(keys.Right){
   this.circle.moveRight();
 }
 if(keys.Left){
   this.circle.moveLeft();
 }
    this.ctx.clearRect(0, 0, 300, 300);
    this.items.forEach(item => item.animate(this.ctx));
    requestAnimationFrame(() => this.draw());
  }
}
