import { Model } from "../mvc/model.jsx";



export class PipeModel extends Model {
    setDefaultValues() {
        this.pipeUp = new Image();
        this.pipeUp.src = '../../../static/pipeUp.png'

        this.pipeBottom = new Image();
        this.pipeBottom.src = '../../../static/pipeBottom.png'
        this.pipe = [];
        this.pipe[0] = {
            x: 288,
            y: 0
        }
        this.scorre = 0
        this.youScoree = ''
        this.textScorre = ''

        this.gap = 100

    }
    remove() {
        this.pipe.length = 0
        this.youScoree = this.scorre
        this.textScorre = "You scorre:"
    }



}