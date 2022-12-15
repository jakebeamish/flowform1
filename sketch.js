function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    let points = [];
    for (let i = 0; i < 5000; i++) {
        let x = (noise((frameCount/PI + i)/200) - 0.5) * width;
        let y = (noise((frameCount/10 + i)/PI/60) - 0.5) * height;
        points.push(createVector(x, y));
    }
    background(0);
    translate(width/2, height/2);
    stroke(255, 10);
    noFill();
    beginShape();
    vertex(0, 0);
    for (let p of points) {
        curveVertex(p.x, p.y);
        curveVertex(0, 0);
    }
    vertex(0, 0);
    endShape();
}
