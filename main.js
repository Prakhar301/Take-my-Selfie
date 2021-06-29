var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("text").innerHTML="";
    recognition.start();    
}
recognition.onresult = function(event) { 
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("text").innerHTML=Content;
if(Content=="take my selfie"){
    speak();
}
}
function speak(){
    var synth=window.speechSynthesis;
    var speakData="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);  
    setTimeout(function() { 
        pic();  
        save(); 
    }, 5000); 
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    jpeg_quality:100
});
var camera=document.getElementById("camera");
function pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img_store" src="'+data_uri+'">';
    });
}
function save() { 
link = document.getElementById("link"); 
image = document.getElementById("img_store").src ; 
link.href = image;
link.click();
}