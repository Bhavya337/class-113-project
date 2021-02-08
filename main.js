function preload(){

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(500,300);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";

}
function  draw(){
    image(video,50,50,450,380);
    tint(tint_color);
    rect(30, 20, 55, 55, 20);
    rect(50, 75, 20, 330);
    rect(30, 400, 55, 55, 20);
    rect(500, 75, 20, 330);
    rect(490, 400, 55, 55, 20);
    rect(490, 25, 55, 55, 20);
    rect(85, 35, 410, 20);
    rect(85, 420, 410, 20);
    fill(0,255,255);


}
function take_snapshot(){
    save("filteredImage.png");

}
 
function  filter_tint(){
    tint_color=document.getElementById("Color_name").value;
    
}