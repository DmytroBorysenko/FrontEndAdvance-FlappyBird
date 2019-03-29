import { Model } from "../mvc/model.jsx";



export class BirdModel extends Model {
    setDefaultValues() {
        this.bird = new Image();
        this.bird.src = '../../../static/flappy_bird.png'


        this.position = { x: 15, y: 150 }
        this.grav = 1.5;

    }
    moveUp() {
        this.position.y -= 30
    }
    gravity() {
        this.position.y += this.grav
    }
    lose() {
        this.grav = 0
        this.position.x = -50

    }
}
