import { View } from "../mvc/view.jsx";


export class BirdView extends View {
  animate(ctx){
    ctx.drawImage(this.model.bird, this.model.position.x, this.model.position.y);
  }
}