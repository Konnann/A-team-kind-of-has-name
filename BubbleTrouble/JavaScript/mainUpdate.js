//call all update functions from classes here
function update(){
    arr.update();
    for(let i = 0; i < balls.length; i ++)
    {
        let flag = false;
        if(balls[i].isHit)
        {
            balls[i].splitToBalls(balls);
            if(i ==0 )
            {
                balls.shift();
            }else
            {
                balls.splice(i,i);
            }

            flag = true;
        }

        balls[i].update(arr);

        if(flag) i --;
    }
}