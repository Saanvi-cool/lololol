nose_x="";
nose_y="";
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(400,300);
    webcam.hide();
    posenet=ml5.poseNet(webcam,modelLoaded);
    posenet.on("pose",getResult);
}
function getResult(pose_array){
    if(pose_array.length>0){
        console.log(pose_array);
        lip_x=pose_array[0].pose.nose.x;
        lip_y=pose_array[0].pose.nose.y;
        console.log(lip_x,lip_y);
    }
}
function modelLoaded(){
    console.log("Model loaded succesfully :)");
}
function draw(){
    image(webcam,0,0,400,300);
    image(nose,nose_x-25,nose_y-25,50,50);
}
function click_pic(){
    save("-_-.png");
}
function preload(){
    nose=loadImage("unnamed.png");
 
}

