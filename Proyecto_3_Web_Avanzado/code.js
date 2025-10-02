
var canvas; 
var ctx;

function Init(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // ctx.strokeStyle = "rgb(0, 255,0)";
    // ctx.rect (0,0,40,40);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(320, 240, 40, 0, Math.PI * 2, false)
    // ctx.lineWidth = 5;
    // ctx.closePath();
    // ctx.stroke();


    let grd = ctx.createLinearGradient (0,480, 640, 480)
    grd.addColorStop (0,"black");
    grd.addColorStop (0.2, "white");
    grd.addColorStop (0.3, "lime");
    grd.addColorStop (0.5, "red");
    grd.addColorStop (0.95, "pink");
    
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,640,480);

    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, Math.PI * 2, false); 

    let radGrd = ctx.createRadialGradient (75, 50, 10, 60, 60, 100);

    radGrd.addColorStop(0, "white");
    radGrd.addColorStop(1, "black");

    ctx.fillStyle = radGrd;

    ctx.fill();

}

window.onload = Init; 

