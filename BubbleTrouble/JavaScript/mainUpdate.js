//call all update functions from classes here
function update(){
    arr.update();
    hero.update();
    console.log(balls.length);
    //let tempArr = Array.from(balls);

    for(let i = 0; i < balls.length; i++)
    {
        balls[i].update(arr);
        // flag = false;
        if(balls[i].isHit)
        {
            balls[i].splitToBalls(balls);
            // if(i ==0 )
            // {
            //     balls.shift();
            // }else
            // {
                balls.splice(i,1);
            // }
                i--;
            //flag = true;
        }

        console.log(i);
        console.log(balls);

    }
    if(balls.length==0){
        IsGameOver=true;
    }
}