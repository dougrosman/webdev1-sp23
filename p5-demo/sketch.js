let capture;
const w = 640;
const h = 480;

function setup() {
    createCanvas(w, h);

    capture = createCapture(VIDEO);
    capture.size(w, h);
    // capture.hide();
    
}

function draw() {
    clear();
    ellipse(mouseX, mouseY, 50, 50);
    
}