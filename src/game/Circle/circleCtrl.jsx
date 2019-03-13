import { Ctrl } from "../mvc/Ctrl.jsx";
import { CircleModel } from "./circleModel.jsx";
import { CircleView } from "./circleView.jsx";

export class CircleCtrl extends Ctrl {
  constructor() {
    super(new CircleModel(), new CircleView());
  }
  moveUp() {
    this.model.moveUp();
  }

  moveDown() {
    this.model.moveDown();
  }
  moveLeft() {
    this.model.moveLeft();
  }
  moveUp() {
    this.model.moveUp();
  }

  moveRight() {
    this.model.moveRight();
  }

  setNewColor() {
    this.modal.setRandomColor();
  }

  animate(ctx) {
    super.animate(ctx);

    if (this.model.isWin()) {
      ctx.font = "40px Courier";
      ctx.fillStyle = "red";
      ctx.textAlign = "center"
      ctx.fillText(this.model.text, 150, 150);
      setTimeout(()=>{
        this.model.setDefaultValues();
      },1000)
      
    }
  }
}
