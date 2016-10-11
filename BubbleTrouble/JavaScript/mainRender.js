//call all renders from classes here
var ctx = document.getElementById("canvas").getContext("2d");
function render(){
    let canvas = new Image();
    canvas.src = "./src/background.png";
    ctx.drawImage(canvas, 0, 0);
    ctx.clearRect(0,0,800,600);
    arr.draw(ctx);
    for(let ball of balls)
    {
        ball.draw(ctx);
    }

    ball.draw(ctx);

}
