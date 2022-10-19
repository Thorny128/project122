x = 0;
y = 0;
var screen_width=0;
var screen_height=0;
var apple="";
var speak_data="";
var to_number="";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  loadImage('apple.png')
  apple='apple.png';
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  to_number=Number(content);
 console.log(event); 
  if(Number.isInteger(to_number)==true){
    console.log("Started drawing ");
    draw_apple="set";
  } else{
    console.log("The speech has not recognized a number");
  }
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas=createCanvas(screen_width, screen_height-150);
    canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    to_number="Apples drawn";
    for (let i=0; i<=to_number; i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
