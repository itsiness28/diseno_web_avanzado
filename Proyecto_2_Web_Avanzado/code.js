console.log("Hola caracola :)");

var canvas; 
var ctx;

class Shape{
    constructor(x,y,color) {
        this.x =x;
        this.y =y;
        this.color = color; 
    }

    draw(ctx) { }
}

class Rectangle extends Shape{
    constructor(x,y,w,h,color){
        super(x,y,color);
        this.w = w;
        this.h = h;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }

}

function Init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    let rect1 = new Rectangle(10,10,100,50,"red");
    let rect2 = new Rectangle(300,200,50,50,"blue");

    rect1.draw(ctx);
    rect2.draw(ctx);
}

window.onload = Init; 