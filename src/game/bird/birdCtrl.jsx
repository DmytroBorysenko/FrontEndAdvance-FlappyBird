
import { Ctrl } from "../mvc/ctrl.jsx";
import { BirdModel } from "./birdModel.jsx";
import { BirdView } from "./birdView.jsx";



export class BirdCtrl extends Ctrl {
    constructor() {
        super(new BirdModel(), new BirdView());
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 32) {
                this.model.moveUp()
            }
        })
    }

    animate(ctx) {
        super.animate(ctx);
        this.model.gravity();
    };
}