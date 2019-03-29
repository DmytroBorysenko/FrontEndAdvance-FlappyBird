import { View } from "../mvc/view.jsx";




export class PipeView extends View {
    animate(ctx) {
        for (var i = 0; i < this.model.pipe.length; i++) {
            ctx.drawImage(this.model.pipeUp, this.model.pipe[i].x, this.model.pipe[i].y);
            ctx.drawImage(this.model.pipeBottom, this.model.pipe[i].x, this.model.pipe[i].y + this.model.pipeUp.height + this.model.gap);

            ctx.font = "17px 'Press Start 2P'";
            ctx.fillStyle = "#605f57"
            ctx.fillText(this.model.scorre, 150, 130)

            this.model.pipe[i].x--;

            if (this.model.pipe[i].x == 100) {
                this.model.pipe.push({
                    x: 288,
                    y: Math.floor(Math.random() * this.model.pipeUp.height) - this.model.pipeUp.height

                });

            }
            if (this.model.pipe[i].x == 0 - this.model.pipeBottom.widht) {
                this.model.pipe.shift()
            }
            if (this.model.pipe[i].x == 15) {
                this.model.scorre++
            }

        };

        ctx.font = "17px 'Press Start 2P'";
        ctx.fillStyle = "#605f57"
        ctx.fillText(this.model.textScorre + this.model.youScoree, 150, 250)



    }

}