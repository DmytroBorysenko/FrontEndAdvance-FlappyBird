import {GameItemModel} from "./GameItemModel.jsx";
import {GameItemView} from "./GameItemView.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";

export class GameItemCtrl extends Ctrl {
    constructor(type) {
        super(new GameItemModel(), new GameItemView());

        this.model.setType(type);
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
        this.model.setDefaultValues();
    }
 }
}
