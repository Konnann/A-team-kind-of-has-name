//call all update functions from classes here
function update(){
    if(hero.isHit == false) {
        arr.update();
        hero.update();
        console.log(balls.length);
        let tempArr = Array.from(balls);

        for (let i = 0; i < tempArr.length; i++) {
            let flag = false;
            if (tempArr[i].isHit) {
                balls[i].splitToBalls(balls);
                if (i == 0) {
                    balls.shift();
                } else {
                    balls.splice(i, i);
                }

                flag = true;
            }
            console.log(i);
            console.log(balls);
            tempArr[i].update(arr);
        }
    } else {
        window.addEventListener('click', function () {
            continueGame = true;
        });
        if (continueGame) {
            let currentLife = hero.life - 1;
            hero = new Hero(currentLife);
            hero.isHit = false;
            ball = new Ball(200, 200, 10, 1);
            balls = [];
            balls.push(ball);
            continueGame = false;

        }
    }
    console.log(hero.isHit);
}