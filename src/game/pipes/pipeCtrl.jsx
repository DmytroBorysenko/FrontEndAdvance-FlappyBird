import { Ctrl } from "../mvc/ctrl.jsx";
import { PipeModel } from "./pipeModel.jsx";
import { PipeView } from "./pipeView.jsx";



export class PipeCtrl extends Ctrl{
    constructor(){
        super(new PipeModel(),new PipeView())
    }
    animate(ctx) {
        super.animate(ctx);
        
    };
}