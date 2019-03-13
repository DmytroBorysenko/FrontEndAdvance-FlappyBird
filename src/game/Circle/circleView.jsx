import { View } from "../mvc/View.jsx";


export class CircleView extends View{
    animate(ctx){
            ctx.beginPath();
            ctx.strokeStyle = this.model.type
            ctx.arc(this.model.position.x, this.model.position.y, 10, 0, Math.PI * 2,false);
            ctx.stroke();
            
    }
}