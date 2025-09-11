window.onload = function() {
    var text = "hola";
    console.log(text)
    var canvas = document.getElementById("first_canvas");
    var context =canvas.getContext("2d");
    context.fillRect(10,10, 50,20);
    context.fillStyle = "blue";
    context.fillRect(40,20, 50,50);
}
