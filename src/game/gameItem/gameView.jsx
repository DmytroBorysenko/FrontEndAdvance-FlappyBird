export class GameItemView{
    constructor(modal){
        this.modal=modal;
    }
    animate(ctx){
        ctx.fillStyle = this.modal.type;
        ctx.fillRect.apply(ctx, [150,150,50,50])
    }
}
