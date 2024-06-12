noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0
function setup() {
    video = createCapture(VIDEO);
    video.size(650, 600);

    canvas = createCanvas(550, 500);
    canvas.position(700,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('Posenet Is Initialized');
}
function draw() {
    background('green');


    document.getElementById("square_side").innerHTML = "Font size of the text will be = " + difference +"px";
        fill('#F90093');
        stroke('F90093')
        text("Arnav", noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX/5 - rightWristX/5);

        console.log("leftWristX = " + leftWristX +" rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

