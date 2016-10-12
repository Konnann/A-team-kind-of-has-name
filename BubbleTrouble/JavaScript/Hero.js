class Hero {

    constructor() {
        this.x = 400;
        this.y = 544; // canvas height - sprite height
        this.height = 56;
        this.width = 47.25;
        this.velocity = 10;
        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.spritesheet = new Image();
        this.spritesheet.src = "./src/hero_47-25x56.png";
        this.currentFrame = 0;
    }

    getX(){
        return this.x;
    }
    getY() {
        return this.y;

    }

    update() {

        //Keyboard event handling
        window.addEventListener('keypress', keyPress);
        window.addEventListener('keydown', keyDown);
        window.addEventListener('keyup', keyUp);

        function keyDown(event) {
            if (event.code == "ArrowLeft") {
                hero.isMovingLeft = true;
            } else if (event.code == "ArrowRight") {
                hero.isMovingRight = true;
            }
        }
        function keyUp(event) {
            if (event.code == "ArrowLeft") {
                hero.isMovingLeft = false;
            } else if (event.code == "ArrowRight") {
                hero.isMovingRight = false;
            }
        }
        function keyPress(event) {
            if (event.keyCode == 32) {
                hero.shoot();
            }
        }

        //hero movement
        if (this.isMovingRight) {
            this.x += 5;
        } else if (this.isMovingLeft) {
            this.x -= 5;
        }
    }



    draw(ctx) {
        //for debugging
        //ctx.font = "48px serif";
        //ctx.fillText(String(this.x), 100, 100);

        //sprite animation
        if (this.isMovingRight){
            //TODO: slow down frame rate
            let imageX = this.currentFrame % 189;
            this.currentFrame += 47.25;
            ctx.drawImage(this.spritesheet, imageX, 0, this.width, this.height, this.x, this.y, this.width, this.height);

        }else if(this.isMovingLeft) {
            let imageX = this.currentFrame % 189;
            this.currentFrame += 47.25;
            ctx.drawImage(this.spritesheet, imageX, 56, this.width, this. height, this.x, this.y, this.width, this.height);

        }else{
            ctx.drawImage(this.spritesheet, 0, 112, this.width, this. height, this.x, this.y, this.width, this.height);
        }
    }

    shoot(){
        this.isMovingLeft = false;
        this.isMovingRight = false;
        arr.shoot(this.x, this.y);
    }
}
