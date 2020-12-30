let toilet, fft;
var jump = 0;
var toggle = 0;
var circle;
var numpoints = 16;
var currentPos = [];
var newPos = [];
var finalPos = [];
var newSpectrum = [];
var spheres = [];
var spectrumTotal = [];
var spectrumToggle = [];
var spectrumFinal = [];
var timelines = [];

function preload() {
    letterg = loadModel('assets/g.obj', true);
    lettero = loadModel('assets/o.obj', true);
    letterf = loadModel('assets/f.obj', true);
    lettert = loadModel('assets/t.obj', true);
    two = loadModel('assets/2.obj', true);
    zero = loadModel('assets/0.obj', true);
    toilet = loadModel('assets/toilet.obj', true);
    music = loadSound('assets/thisyear.mp3');
}

function setup() {
    flushit = createCanvas(windowWidth, windowHeight, WEBGL);
    amplitude = new p5.Amplitude();
    flushit.mouseClicked(function () {
        if (music.isPlaying()) {
            music.stop();
        } else {
            music.play();
        }
    });
    fft = new p5.FFT(0.95, 16);
}

function draw() {
    angleMode(DEGREES);
    directionalLight(155, 55, 255, 100, 0.25, 1000);
    background(255, 255, 255, 0);
    noStroke();
    smooth();
    translate(0, 75, 0);
    rotateX(180);
    var left = mouseX / 8 + (frameCount * 0.1);
    var spin = mouseX / 6;
    var top = 20 - Math.max((mouseY / -40), -80);
    let spectrum = fft.analyze();
    specularMaterial("#fff");
    push();
    scale(0.4);
    translate(0, 375, 0);
    rotateY(spin / 2 - 20);
    model(letterg);
    pop();
    push();
    scale(0.5);
    translate(-50, 150, 0);
    rotateZ(10);
    rotateY(spin / -2 + 20);
    model(lettert);
    pop();
    push();
    scale(0.5);
    translate(50, -10, 0);
    rotateZ(-10);
    rotateY(spin / 2 - 20);
    model(letterf);
    pop();
    push();
    scale(0.3);
    translate(-25, -250, 0);
    rotateY(spin / -2 + 20);
    model(lettero);
    pop();

    for (let i = 0; i < spectrum.length; i++) {
        let amp = spectrum[i];
        let y = map(amp, 0, 256, height, 0) * 5;
        if ((i < 5) && (i > 0) && (spectrum[i] > 50)) {

            spectrumTotal[i] = (spectrum[i] * (spectrum[i] / 150)) - 100;
            push();

            rotateX(20 - top);
            rotateY(0 - left);
            translate(0, Math.max(spectrumTotal[i], -20), -160);
            rotateX(frameCount * 10 * (i / 4));
            rotateY(frameCount * 10 * (i / 4));
            scale(0.2);
            if ((i % 2) == 0) {
                model(zero);
            } else {
                model(two);
            }
            pop();
        }
        if ((i < 9) && (i > 4) && (spectrum[i] > 50)) {
            spectrumTotal[i] = (spectrum[i] * (spectrum[i] / 100)) - 100;
            push();

            rotateX(20 - top);
            rotateY(90 - left);
            translate(0, Math.max(-20, spectrumTotal[i]), -160);
            rotateX(frameCount * 10 * (i / 4));
            rotateY(frameCount * 10 * (i / 4));
            scale(0.2);
            if ((i % 2) == 0) {
                model(zero);
            } else {
                model(two);
            }
            pop();
        }
        if ((i < 11) && (i > 6) && (spectrum[i] > 50)) {
            spectrumTotal[i] = (spectrum[i] * (spectrum[i] / 100) - 50);
            push();

            rotateX(20 - top);
            rotateY(180 - left);
            translate(0, Math.max(-20, spectrumTotal[i]), -160);
            rotateX(frameCount * 10 * (i / 4));
            rotateY(frameCount * 10 * (i / 4));
            scale(0.2);
            if ((i % 2) == 0) {
                model(zero);
            } else {
                model(two);
            }
            pop();
        }
        if ((i < 8) && (i > 3) && (spectrum[i] > 50)) {
            spectrumTotal[i] = (spectrum[i] * (spectrum[i] / 100) - 50);
            push();

            rotateX(20 - top);
            rotateY(270 - left);
            translate(0, Math.max(-20, spectrumTotal[i]), -160);
            rotateX(frameCount * 10 * (i / 4));
            rotateY(frameCount * 10 * (i / 4));
            scale(0.2);
            if ((i % 2) == 0) {
                model(zero);
            } else {
                model(two);
            }
            pop();
        }
    }

    push();
    rotateX(20 - top);
    rotateY(0 - left);
    translate(0, 0, -200);
    rotateY(-45);
    model(toilet);
    pop();
    push();
    rotateX(20 - top);
    rotateY(90 - left);
    translate(0, 0, -200);
    rotateY(-45);
    model(toilet);
    pop();
    push();
    rotateX(20 - top);
    rotateY(180 - left);
    translate(0, 0, -200);
    rotateY(-45);
    model(toilet);
    pop();
    push();
    rotateX(20 - top);
    rotateY(270 - left);
    translate(0, 0, -200);
    rotateY(-45);
    model(toilet);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}