class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.isHit = false;
    }

    x() {
        return this.x;
    }

    y() {
        return this.y;
    }

    r() {
        return this.r;
    }

    draw = function (ctx) {
        ctx.fillStyle = 'black';
        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2,
            false
        );
        ctx.closePath();
        ctx.fill();
    }

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
}

