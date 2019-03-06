import { GameItemModal } from "./gameItemModal.jsx";
import { GameItemView } from "./gameView.jsx";

export class GameItemCtrl {
  constructor(type) {
    this.modal = new GameItemModal();
    this.view = new GameItemView(this.modal);

    this.modal.setType(type)

  }
  setNewColor(){
    this.modal.setRandomColor();
  }
  
  animate(ctx) {
    this.view.animate(ctx)
   
  }
}
