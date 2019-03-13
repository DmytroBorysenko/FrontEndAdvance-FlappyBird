import {Model} from "../mvc/Model.jsx";

export class BgModel extends Model {
    setDefaultValues() {
        this.text = 'Play';
    }

    setLoseText() {
        this.text = 'GameOver';
    }
}