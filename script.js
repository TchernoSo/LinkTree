const message = "Welcome to MySpace";
const speed = 150;

var i = 0;

function typeEffect(){
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;

    setTimeout(typeEffect, speed);
}

typeEffect();



