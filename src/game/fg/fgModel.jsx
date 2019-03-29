import { Model } from "../mvc/model.jsx";


export class FgModel extends Model {
    setDefaultValues() {
        this.fg = new Image();
        this.fg.src = '../../../static/fg.png'

    }
}