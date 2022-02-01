function preload() {
    classifier = ml5.imageClassifier('DoddleNet')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classify_canavs);
    synth = window.speechSynthesis;
}

function classify_canavs() {
    classifier.classify(canvas, gotResults);
}

function clearCanvas() {
    background("white");
}

function draw() {
    strokeWeight(13);

    stroke("black");

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}