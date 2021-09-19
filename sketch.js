var speed;

function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;
    

    push();
    translate(width/2, height/2);
    celestialObj(color(255,150,0), 300); // SUN
    rotate(radians(speed));
    push();
    celestialObj(color(255,150,0), 300); // SUN
    rotate(radians(speed/3));
    pop();
    
    
    push();
    translate(200, 200);
    celestialObj(color(0,0,255), 80); // EARTH
    rotate(radians(speed));
    push();
    celestialObj(color(0,0,255), 80); // EARTH
    rotate(radians(speed));
    pop();
    
    translate(100, 100);
    celestialObj(color(128,128,128), 30); // MOON
    rotate(radians(-speed*2));
    
    pop();
    pop();
    
}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
