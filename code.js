var winMessages = ["You won! Bulbasaur beats Squirtle", "You won! Squirtle beats Charmander", "You won! Charmander beats Bulbasaur"];
var loseMessages = ["You lost! Bulbasaur loses to Charmander", "You lost! Squirtle loses to Bulabasaur", "You lost! Charmander loses to Squirtle"];
var tieMessages = ["You tied! Bulbasaur ties with Bulbasaur", "You tied! Squirtle ties with Squirtle", "You tied! Charmander ties with Charmander"];
var options = ["Charmander", "Squirtle", "Bulbasaur"];
var randomNum;
var pokemon;
var score = 0;

function Charmander() {
    randomNum = Math.floor(Math.random() * options.length);
    pokemon = options[randomNum];
    
    if(pokemon==="Charmander") {
        document.getElementById('message').innerHTML = tieMessages[2];
    } else if (pokemon==="Squirtle") {
        document.getElementById('message').innerHTML = loseMessages[2];
        if (score>0){
            score--;
        }
    } else if (pokemon==="Bulbasaur") {
        document.getElementById('message').innerHTML = winMessages[2];
        score++;
    }
}

function Squirtle() {
    randomNum = Math.floor(Math.random() * options.length);
    pokemon = options[randomNum];
    
    if(pokemon==="Charmander") {
        document.getElementById('message').innerHTML = winMessages[1];
        score++;
    } else if (pokemon==="Squirtle") {
        document.getElementById('message').innerHTML = tieMessages[1];
    } else if (pokemon==="Bulbasaur") {
        document.getElementById('message').innerHTML = loseMessages[1];
        if (score>0){
            score--;
        }
    }
}

function Bulbasaur() {
    randomNum = Math.floor(Math.random() * options.length);
    pokemon = options[randomNum];
    
    if(pokemon==="Charmander") {
        document.getElementById('message').innerHTML = loseMessages[0];
        if (score>0){
            score--;
        }
    } else if (pokemon==="Squirtle") {
        document.getElementById('message').innerHTML = winMessages[0];
        score++;
    } else if (pokemon==="Bulbasaur") {
        document.getElementById('message').innerHTML = tieMessages[0];
    }
}

function randomPokemon() {
    document.getElementById('randomPokemon').innerHTML = "The Computer Chose: " + pokemon;
}

function updateScore() {
    document.getElementById('score').innerHTML = "Score: " + score;
}

function playMusic() {
    var music=document.getElementById("music");
    music.volume=0.3;
    if(music.paused){
        music.play();
        icon.src = "images/pause.png";
    } else {
        music.pause();
        icon.src = "images/play.png";
    }
}