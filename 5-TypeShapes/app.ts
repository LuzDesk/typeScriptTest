class Line {
    constructor(public ctx:CanvasRenderingContext2D, public originX:number, public originY:number
        , public x:number, public y:number) {
    }

    draw():void {
        this.ctx.moveTo(this.originX,this.originY);
        this.ctx.lineTo(this.x,this.y);
        this.ctx.stroke();;
    }
}

class MathHelper {
    static generateRandom():number {
        return Math.random() * 500;
    }
}

const v =<HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = <CanvasRenderingContext2D> v.getContext("2d");
const btnLine = document.getElementById("drawLine");

btnLine?.addEventListener("click", () => {
    const line = new Line(ctx, MathHelper.generateRandom(),MathHelper.generateRandom()
    ,MathHelper.generateRandom(),MathHelper.generateRandom());
    line.draw();
});

