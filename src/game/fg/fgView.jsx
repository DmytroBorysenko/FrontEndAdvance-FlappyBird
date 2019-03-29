import { View } from "../mvc/view.jsx";


export class FgView extends View {
  animate(ctx){
    ctx.drawImage(this.model.fg,0, 512-this.model.fg.height);
    
  }
}