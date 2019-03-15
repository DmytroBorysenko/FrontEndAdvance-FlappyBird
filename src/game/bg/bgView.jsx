import {View} from "../mvc/View.jsx";

export class BgView extends View {
    animate(ctx) {
        ctx.font = "15px Courier";
        ctx.fillText(this.model.text, this.model.WIDTH / 4, this.model.HEIGH/2);
    }
}