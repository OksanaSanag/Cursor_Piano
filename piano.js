
function AudioPlayer() {
    let audio = new Audio();
    const Aplay = document.getElementById("A"); console.log(Aplay);
    Aplay.addEventListener("click", divplay("playA"));
    const Splay = document.getElementById("S");
    Splay.addEventListener("click", divplay("playS"));

    function divplay(note) {
        switch (note) {
            case "playA":               
              audio.src = "sounds/1.mp3"; console.log(audio.src);
              break;
            case "playS":
              audio.src = "sounds/2.mp3";
        }  
        audio.play();                             
    }
}
window.addEventListener("load", AudioPlayer);

//const divs = document.getElementsByClassName('pianoKey');
//console.log(divs);

/*
[...divs].forEach(element => {
    element.addEventListener('click', function() { 
        document.getElementsById('audio1').play();}
    );

})
*/
