import { BgCtrl } from "./bg/bgCtrl.jsx";
import { FgCtrl } from "./fg/fgCtrl.jsx";
import { BirdCtrl } from "./bird/birdCtrl.jsx";
import { PipeCtrl } from "./pipes/pipeCtrl.jsx";
import { stateMachine } from "./stateMachin.jsx";




export class Game {
    constructor() {
        this.canvas = document.getElementById("flappy")
        this.ctx = this.canvas.getContext("2d")

        this.canvas.width = 288;
        this.canvas.height = 512;

        this.items = [];
        this.bg = new BgCtrl();
        this.fg = new FgCtrl();
        this.bird = new BirdCtrl();
        this.pipe = new PipeCtrl();
        this.gamePlaing = "start"
        this.items.push(...[this.bg, this.pipe, this.fg, this.bird]);
        this.draw()

        document.addEventListener("keypress", () => {
            if (this.gamePlaing === "end" || this.gamePlaing === "start") {
                this.gamePlaing = "play"
                this.play();
            }
        })
    }

    play() {
        this.pipe.model.setDefaultValues()
        this.bird.model.setDefaultValues()
        this.bg.model.setDefaultValues()
    }
    start() {
        if (this.gamePlaing === "start") {
            this.pipe.model.pipe.length = 0
            this.bird.model.grav = 0
            this.bg.model.play = "Play"


        }
    }
    draw() {
        this.start();
        this.lose()
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.items.forEach(item => item.animate(this.ctx));
        requestAnimationFrame(() => this.draw());

    }

    lose() {
        this.pipe.model.pipe.forEach((arr) => {
            if (this.bird.model.position.x + this.bird.model.bird.width >= arr.x &&
                this.bird.model.position.x <= arr.x + this.pipe.model.pipeUp.width &&
                (this.bird.model.position.y <= arr.y + this.pipe.model.pipeUp.height ||
                    this.bird.model.position.y + this.bird.model.bird.height >= arr.y + this.pipe.model.pipeUp.height + this.pipe.model.gap)
                || this.bird.model.position.y + this.bird.model.bird.height >= this.canvas.height - this.fg.model.fg.height) {
                this.pipe.model.remove()
                this.bird.model.lose()
                this.bg.model.lose()
                this.gamePlaing = "end";


            }

        })
    }

}

