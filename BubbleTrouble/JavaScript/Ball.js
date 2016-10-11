class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.isHit = false;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getR() {
        return this.r;
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.r,
            0,
            Math.PI * 2,
            false
        );
        ctx.closePath();
        ctx.fill();
    };

    update(pL) {
        if (pL != undefined) {
            let xCollides = (pL.x >= this.x - this.r && pL.x <= this.x + this.r);
            if (xCollides && (this.y <= pL.y - pL.height))//top point below project top point
            {
                this.isHit = true;
            }
            else if (Math.sqrt((this.x - pL.x)*(this.x - pL.x) +
                    (this.y - (pL.y - pL.height)) * (this.y - (pL.y - pL.height))
                ) <= this.r
            ) {
                this.isHit = true;
            }

        }
    }

    split(balls)
    {
        let ball1 = new Ball(this.x - 3,this.y + 3, this.r);
        let ball2 = new Ball(this.x + 3,this.y + 3, this.r);
        //delete this ball in balls. Find where it is here or in main update ?
        balls.add(ball1).add(ball2);

        //delete ball ?
    }
}

