class Shape {
    constructor(public ctx: CanvasRenderingContext2D, public originX: number, public originY: number){
    }
}

// se heredan propiedades de shape a line --> se utiliza super para hacer uso de la herencia.
class Line extends Shape{
    constructor(ctx: CanvasRenderingContext2D, originX: number, originY: number
        , public x:number, public y:number) {
        super(ctx, originX, originY);
    }

    draw():void {
        this.ctx.moveTo(this.originX,this.originY);
        this.ctx.lineTo(this.x,this.y);
        this.ctx.stroke();
    }
}

class Circle extends Shape {
    constructor(ctx: CanvasRenderingContext2D, originiX: number, originiY: number, public radius: number ){
        super(ctx, originiX, originiY);
    }

    draw():void {
        ctx.beginPath();
        ctx.arc(this.originX, this.originY
              , this.radius, 0, 2 * Math.PI);
        ctx.stroke();
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
const btnCircle = document.getElementById("drawCircle");

btnLine?.addEventListener("click", () => {
    const line = new Line(ctx, MathHelper.generateRandom(),MathHelper.generateRandom()
    ,MathHelper.generateRandom(),MathHelper.generateRandom());
    line.draw();
});



btnCircle?.addEventListener("click", () => {
    const circle = new Circle(ctx, MathHelper.generateRandom(),MathHelper.generateRandom(),MathHelper.generateRandom());
    circle.draw();
});

