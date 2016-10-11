//call all renders from classes here
var ctx = document.getElementById("canvas").getContext("2d");
function render(){
    ctx.clearRect(0,0,800,600);
    arr.draw(ctx);
    ball.draw(ctx);
}
