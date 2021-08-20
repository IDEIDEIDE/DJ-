var soun = ""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
function preload(){
    soun = loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(400,400)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)

}

function gotPoses(results){
    if(results.length>0){
        console.log(results)


        leftWristX = results[0].pose.leftWrist.x
        leftWristX = results[0].pose.leftWrist.y
        rightWristX = results[0].pose.rightWrist.x
        rightWristX = results[0].pose.rightWrist.y
        console.log(leftWristX)

    }
}

function modelLoaded(){
    console.log("model Loaded!")
}


function draw(){
    image(video, 0, 0, 400, 400)
    circle(leftWristX, leftWristY, 30)
    circle(rightWristX, rightWristY, 30)
    fill(white)
}
function play(){
        soun.play()
        soun.rate(1)
        soun.volume(1)
}
