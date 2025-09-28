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

    rect1 = new Rectangle(10,10,100,50,"red");
    rect2 = new Rectangle(300,200,50,50,"blue");

    rect1.draw(ctx);
    rect2.draw(ctx);
}

window.addEventListener ("keydown", function (anon)  {
    var move = 10;
    switch (anon.key) {
        case "ArrowUp":
            rect1.y -= move;
            break;
        case "ArrowDown":
            rect1.y += move;
            break;
        case "ArrowLeft":
            rect1.x -= move;
            break;
        case "ArrowRight":
            rect1.x += move;
            break;
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);
    rect1.draw(ctx);
    rect2.draw(ctx);
} )
window.onload = Init; 

