//call all update functions from classes here
function update(){
    arr.update();
    hero.update();
    console.log(balls.length);
    let tempArr = Array.from(balls);

    for(let i = 0; i < tempArr.length; i ++)
    {
        let flag = false;
        if(tempArr[i].isHit)
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
        console.log(i);
        console.log(balls);
        tempArr[i].update(arr);

    }
}