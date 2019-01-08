
function Pipe(upImg,downImg,x,speed,ctx){
    this.upImg = upImg;
    this.downImg = downImg;
    this.x = x;
    this.speed = speed;
    this.ctx = ctx;
    this.r = Math.random()*200 + 100;

    this.draw = function(){
        this.ctx.drawImage(this.upImg,this.x,this.r - 420);
        this.ctx.drawImage(this.downImg,this.x,this.r + 150);
    }

    this.update = function(dur){
        this.x = this.x + this.speed*dur;
        if(this.x < -52){
            this.x = this.x + 200*5;
            this.r = Math.random()*200 + 100;
        }
    }

    this.hitTest = function(bird_x,bird_y){
        return (this.x < bird_x && bird_x < this.x + 52) && (!(this.r < bird_y && bird_y < this.r + 150));
    }

}