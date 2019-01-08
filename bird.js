
function Bird(img,x,y,speed,a,ctx){
    this.img    =   img;
    this.x      =     x;
    this.y      =     y;
    this.speed  = speed;
    this.a      =     a;
    this.ctx    =   ctx;
    this.index  =     0;

    this.draw = function(){
        this.ctx.save();
        this.ctx.translate(this.x,this.y);
        this.ctx.rotate(Math.PI/180*this.speed*100);
        // this.ctx.drawImage(this.img,52*this.index,0,52,45,this.x,this.y,52,45);
        //this.ctx.drawImage(this.img,52*this.index,0,52,45,-52/2,-45/2,52,45);
        this.ctx.drawImage(this.img,52*this.index,0,52,45, -52/2, -45/2 ,52,45);
        this.ctx.restore();

    }

    var durgather = 0;
    this.update = function(dur){
        
        durgather = dur + durgather;
        if(durgather > 100){
            this.index = this.index + 1;
            if(this.index == 2){
                this.index = 0;
            }
            durgather -= 100;
        }
        this.speed = this.speed + dur*this.a;
        this.y     = this.y     + dur*this.speed;

    }
}