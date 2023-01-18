let angle = 0;

function setup() {
    createCanvas(900, 600, WEBGL);
}

function draw() {
    background(175);

    //rectMode(CENTER);
    noStroke();

    //plane
    translate(-260, -120, 0);
    normalMaterial();
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    plane(150, 150);
    pop();
    
    //torus
    translate(240, 0, 0);
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    torus(50, 10);
    pop();

    //box
    translate(240, 0, 0);
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(100, 100, 100);
    pop();

    //cone
    translate(-240 * 2, 200, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(70, 70);
    pop();

    //cylinder
    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(70, 70);
    pop();

    translate(240, 0, 0);
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(70);
    pop();
}
