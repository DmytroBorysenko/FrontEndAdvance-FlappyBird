
import { Ctrl } from "../mvc/ctrl.jsx";
import { FgModel } from "./fgModel.jsx";
import { FgView } from "./fgView.jsx";


export class FgCtrl extends Ctrl{
    constructor(){
        super(new FgModel(),new FgView())
    }
    
    animate(ctx) {
        super.animate(ctx);
        
    };
}