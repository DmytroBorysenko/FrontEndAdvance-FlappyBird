
import { Ctrl } from "../mvc/ctrl.jsx";
import { BgModel } from "./bgModel.jsx";
import { BgView } from "./bgView.jsx";


export class BgCtrl extends Ctrl {
    constructor() {
        super(new BgModel(), new BgView())
    }

    animate(ctx) {
        super.animate(ctx);

    };
}