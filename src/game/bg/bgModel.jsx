import {Model} from "../mvc/Model.jsx";
import {stateMachine} from "../stateMachine.jsx";

window.stateMachine = stateMachine;

export class BgModel extends Model {
    setDefaultValues() {
        this.text = ' ';
    }

    setWinText(text) {
        this.text = text;
    }
}