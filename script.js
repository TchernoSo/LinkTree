const message = "Welcome to MySpace";
const speed = 150;

var i = 0;

function typeEffect(){
    document.getElementById("text").innerHTML += message.charAt(i);
    i++;

    setTimeout(typeEffect, speed);
}

typeEffect();



$('button').click(function(){
    $('.success').addClass('show');
    $('.success').addClass('alert');
    $('.success').removeClass('hide');
    setTimeout(function(){
        $('.success').removeClass('show');
        $('.success').addClass('hide');
        
    })
});

