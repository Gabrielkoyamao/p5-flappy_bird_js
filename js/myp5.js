function setup(){
    createCanvas(500,500);
    bird = new Bird();
}

function draw(){

    background(0);

    // ellipse(50, 300, 32,32);

    bird.show();
    bird.update();
    
}
function keyPressed(){
    if(key == ' '){
        bird.up()
    }
}

function Bird(){

    this.y = height/2;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -15
    this.velocity = 0;

    this.up = function(){
        this.velocity += this.lift;
    }

    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, 32,32);
    }

    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }

        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }

}