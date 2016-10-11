
//main, don't write anything else here
function start(){
    update();
    render();
    requestAnimationFrame(start);
}
var ball = new Ball(200,200,10);

var arr = new Arrow();
arr.shoot(400,600);
start();
