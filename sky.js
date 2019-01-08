
function Sky(img,x,speed,ctx){
    this.img    =   img;
    this.x      =     x;
    this.speed  = speed;
    this.ctx    =   ctx;

    this.draw = function(){
        this.ctx.drawImage(this.img,this.x,0);
    }

    this.update = function(dur){
        this.x = this.x + dur*this.speed;
        if(this.x < -800){
            this.x = this.x +1600;
        }
    }
}