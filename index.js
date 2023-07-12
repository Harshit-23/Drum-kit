var buttons = document.querySelectorAll(".drum");
var sounds = ["./sounds/crash.mp3", "./sounds/kick-bass.mp3", "./sounds/snare.mp3", "./sounds/tom-1.mp3", "./sounds/tom-2.mp3", "./sounds/tom-3.mp3",  "./sounds/tom-4.mp3"];

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function (){
        var innerKey = this.innerHTML;
        makeSound(innerKey);
        buttonAnimation(innerKey);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key)
{
    var audio;
    switch(key)
        {
            case "w": audio = new Audio(sounds[0]);
            break;

            case "a": audio = new Audio(sounds[1]);
            break;

            case "s": audio = new Audio(sounds[2]);
            break;

            case "d": audio = new Audio(sounds[3]);
            break;

            case "j": audio = new Audio(sounds[4]);
            break;

            case "k": audio = new Audio(sounds[5]);
            break;

            case "l": audio = new Audio(sounds[6]);
            break;

            default: console.log(key);
        }
        audio.play();
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(
        function(){
            activeButton.classList.remove("pressed");
        }, 100
    )
}

