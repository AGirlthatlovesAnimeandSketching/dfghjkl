var SpeechRecognition = window.webkitSpeechRecognition;
var recogntion = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";

    recogntion.start();
}
recogntion.onresult  = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;

    if( Content == "take my selfie" )
    {
        console.log("taking selfie");
        speak();
    }

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
    Webcam.attach(camera);


}

 camera = document.getElementById("camera");
 Webcam.set({

    width:360,
    height: 250,
    image_format:"jpeg",
    jpeg_quality:90
 });
