song1 = ""
song2 = ""

function preload(){
song1  = loadSound("music.mp3")
song2 = loadSound("music2.mp3")
}

 function setup(){
  canvas = createCanvas(500, 300);
  canvas.position(380, 250);
  video  = createCapture(VIDEO);
  video.hide();
 }

 function draw(){
     image(video, 0, 0, 500, 300);
 }
