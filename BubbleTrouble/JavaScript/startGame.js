var IsGameOver=false;
function start() {
    if(!IsGameOver){
    update();
    render();
    
    requestAnimationFrame(start);
    score();
        }
}
var hero = new Hero(5);
var ball = new Ball(200, 200, 10, 1);
var balls = [];
balls.push(ball);
var arr = new Arrow();
var continueGame = false;
var gameOver = false;
start();
