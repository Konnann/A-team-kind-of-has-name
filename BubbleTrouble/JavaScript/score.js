/**
 * Created by Kokosaish on 11.10.2016 г..
 */
var points=0;
function score() {
    
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.strokeText="black";
    ctx.fillText(`score ${points}` , 10 , 10)
}
/**
 * Created by Kokosaish on 11.10.2016 г..
 */
