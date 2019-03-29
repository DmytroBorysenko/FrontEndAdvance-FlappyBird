import { View } from "../mvc/view.jsx";


export class BgView extends View {
  
  animate(ctx){
    ctx.drawImage(this.model.bg,0,0);
    ctx.font = "20px 'Press Start 2P'";
    ctx.fillStyle = "#605f57"
    ctx.fillText(this.model.gameOver, 150,200)


    
    ctx.fillStyle = "#605f57"
    ctx.textAlign = "center"
    ctx.fillText(this.model.play, 150,175)
    
  

  }
}