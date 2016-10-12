
function start() {
    update();
    render();
    
    requestAnimationFrame(start);
    score();
}
var hero = new Hero();
var ball = new Ball(200, 200, 10, 1);
var balls = [];
balls.push(ball);
var arr = new Arrow();
start();
