function setup() {
    video = createCapture(VIDEO);
    video.size(600, 600);
    canvas = createCanvas(400, 400);
    canvas.position(800, 120);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("model is loaded");
}
function draw() {
    background('#03f8fc');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}