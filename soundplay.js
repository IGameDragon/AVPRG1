
var context = new AudioContext();
var buttons = document.getElementsByClassName("drum");

function playSound(value){
    soundbuffer[value].play
};

soundbuffer =[];
for(let i = 0; i < buttons.length; i++){
    soundbuffer[i]= new Audio("sounds/sound" + (i+1) + ".wav");
    var soundNode = context.createMediaElementSource(soundbuffer[i]);
    var gainNode = context.createGain();
    gainNode.gain.value = 0.8;

    soundNode.connect(gainNode);
    gainNode.connect(context.destination);

    buttons[i].addEventListener("click", function(){playSound(i)})
}

