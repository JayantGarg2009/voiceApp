var X = 0;
var Y = 0;

var draw_circle = "";
var draw_rectangle = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System Is Listening Please Speak";
    recognition.start();
     

}
recognition.onresult = function(event)
{
 console.log(event); 
 var content = event.results[0][0].transcript;
 console.log(content);
 document.getElementById("status").innerHTML = "The Speech Has Been Recognize As : "+content;
 if(content == "circle" || content == "Circle")
 {
    document.getElementById("status").innerHTML = "Started Drawing Circle";
    X = Math.floor(Math.random()*600);
    Y = Math.floor(Math.random()*600);
    draw_circle = "set";

 }

 if(content == "rectangle" || content == "Rectangle")
 {
    document.getElementById("status").innerHTML = "Started Drawing Rectangle";
    X = Math.floor(Math.random()*600);
    Y = Math.floor(Math.random()*600);
    draw_rectangle = "set";
 }
}


function preload()
{

}

function setup()
{
    canvas = createCanvas(700,700);
        }

function draw()
{
    if(draw_rectangle == "set")
    {
        rect(X , Y , 70 , 50);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn";
        draw_rectangle="";
    }

    if(draw_circle == "set")
    {
        circle(X , Y , 40);
        document.getElementById("status").innerHTML = "Circle Is Drawn";
        draw_circle="";

    }


}