var hands = document.getElementsByClassName("hand");
var hourHand = hands[0];
var minHand = hands[1];
var secHand = hands[2];


function setClock(){

    var now = new Date();
    var secondDeg = (parseFloat(now.getSeconds()) / 60) * 360;
    secHand.style.transform = 'translate(200px, -340px)';
    secHand.style.transform += `rotate(${secondDeg}deg)`;

    
    var minDeg = (parseFloat(now.getMinutes()) / 60) * 360;
    minHand.style.transform = 'translate(200px, -160px)';
    minHand.style.transform += `rotate(${minDeg}deg)`;
    
    
    var hourDeg = ((now.getHours() % 12) / 24) * 360;
    hourHand.style.transform = 'translate(200px, 20px)';
    hourHand.style.transform += `rotate(${hourDeg}deg)`;
    
    if(now.getSeconds()==0){
        secHand.style.transitionDuration = '0s';
        minHand.style.transitionDuration = '0s';
        hourHand.style.transitionDuration = '0s';
    } else {
        secHand.style.transitionDuration = '0.05s';
        minHand.style.transitionDuration = '0.05s';
        hourHand.style.transitionDuration = '0.05s';
    }
}

setInterval(setClock, 16);
