import { Model } from "../mvc/model.jsx";


export class BgModel extends Model {
    setDefaultValues() {
        this.bg = new Image();
        this.bg.src = '../../../static/bg.png'
        this.gameOver = " ";
        this.play = " ";
    }
    lose() {
        this.gameOver = "Game Over"
    }
}

