//call all renders from classes here
var ctx = document.getElementById("canvas").getContext("2d");
function render(){
    let canvas = new Image();
    canvas.src = "./src/background.png";
    ctx.drawImage(canvas, 0, 0);
    arr.draw(ctx);
    
    for(let ball of balls)
    {
        ball.draw(ctx);
    }

    ball.draw(ctx);
    hero.draw(ctx);

    score();

    if(hero.isHit){
        ctx.font = "70px serif";
        ctx.fillText("A ball got you!", 180, 280);
        ctx.font = "30px serif";
        ctx.fillText("(click to restart level)", 250, 340);
    }
}
