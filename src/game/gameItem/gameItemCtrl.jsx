import {GameItemModel} from "./GameItemModel.jsx";
import {GameItemView} from "./GameItemView.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";
import {stateMachine} from "../stateMachine.jsx";

export class GameItemCtrl extends Ctrl {
    constructor(type) {
        super(new GameItemModel(), new GameItemView());

        this.model.setType(type);

        document.addEventListener('keydown', (e) => {
          if (e.keyCode === 87) {
              this.moveUp();
          }
          if (e.keyCode === 83) {
              this.moveDown();
          }
          if (e.keyCode === 65) {
            this.moveLeft();
        }
           if (e.keyCode === 68) {
          this.moveRight();
      }
      if(stateMachine.can('start')){
        stateMachine.start()
      }

    });
        stateMachine.observe('onProgress', () => {
          console.log('Progreess in geme item!');
      });
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
    this.model.setRandomColor();
  }

  animate(ctx) {
    super.animate(ctx);

    if (this.model.isWin()) {
        this.model.setDefaultValues();
        if(stateMachine.can('stop')){
          stateMachine.stop()
        }
        
    }
 }
}
