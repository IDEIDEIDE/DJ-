var soun = ""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0

rightWristScore=0
leftWristScore=0
function preload(){
    soun = loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(500,500)
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
        leftWristScore = results[0].pose.keypoints[9].score
        rightWristX = results[0].pose.rightWrist.x
        rightWristX = results[0].pose.rightWrist.y
        console.log(leftWristX)
        console.log(leftWristScore)
        

    }
}

function modelLoaded(){
    console.log("model Loaded!")
}


function draw(){
    image(video, 0, 0, 500, 500)    

    if(leftWristScore > 0.02){
        circle(leftWristX, leftWristY, 30)
        fill("red")
        stroke("red")
        numberconverter1 = Number(leftWristY)
        yeahbro = floor(numberconverter1)
        boxedfish = yeahbro/500
        soun.setVolume(boxedfish)
        document.getElementById("volume").innerHTML = "Volume" + " = " + boxedfish;
    }

    
}
function play(){
        soun.play()
        soun.rate(1)
        soun.setVolume(1)
}
