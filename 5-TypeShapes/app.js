"use strict";
var Line = /** @class */ (function () {
    function Line(ctx, originX, originY, x, y) {
        this.ctx = ctx;
        this.originX = originX;
        this.originY = originY;
        this.x = x;
        this.y = y;
    }
    Line.prototype.draw = function () {
        this.ctx.moveTo(this.originX, this.originY);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
        ;
    };
    return Line;
}());
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.generateRandom = function () {
        return Math.random() * 500;
    };
    return MathHelper;
}());
var v = document.getElementById("myCanvas");
var ctx = v.getContext("2d");
var btnLine = document.getElementById("drawLine");
btnLine === null || btnLine === void 0 ? void 0 : btnLine.addEventListener("click", function () {
    var line = new Line(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
    line.draw();
});
