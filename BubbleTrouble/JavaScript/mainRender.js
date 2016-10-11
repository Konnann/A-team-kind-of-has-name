//call all renders from classes here
var ctx = document.getElementById("canvas").getContext("2d");
function render(){
    let canvas = new Image();
    canvas.src = "./src/background.png";
    ctx.drawImage(canvas, 0, 0);
    arr.draw(ctx);
    ball.draw(ctx);
    hero.draw(ctx);
}
