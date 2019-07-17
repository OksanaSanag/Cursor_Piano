const notes = [
    {src: './sounds/1.mp3', id: 'A', keyCode: 97},
    {src: './sounds/2.mp3', id: 'S', keyCode: 115},
    {src: './sounds/3.mp3', id: 'D', keyCode: 100},
    {src: './sounds/4.mp3', id: 'F', keyCode: 102},
    {src: './sounds/5.mp3', id: 'G', keyCode: 103},
    {src: './sounds/6.mp3', id: 'H', keyCode: 104},
    {src: './sounds/7.mp3', id: 'J', keyCode: 106},
    {src: './sounds/8.mp3', id: 'K', keyCode: 107},
]

const audio = new Audio();

function playNote(value){    
        audio.src = value.src;
        audio.play(); 
};

function audioPlayer() {    
    notes.forEach(value => {
        document.getElementById(value.id).addEventListener("click",  () => playNote(value))
    })
}

function audioPlayerByKey(event) {
    playNote(notes.filter(item => item.keyCode === event.keyCode)[0])
};

window.addEventListener("load", audioPlayer);

window.addEventListener("keypress", audioPlayerByKey);