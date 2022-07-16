const winMessages = ["You won! Bulbasaur beats Squirtle", "You won! Squirtle beats Charmander", "You won! Charmander beats Bulbasaur"];
const loseMessages = ["You lost! Bulbasaur loses to Charmander", "You lost! Squirtle loses to Bulabasaur", "You lost! Charmander loses to Squirtle"];
const tieMessages = ["You tied! Bulbasaur ties with Bulbasaur", "You tied! Squirtle ties with Squirtle", "You tied! Charmander ties with Charmander"];
const options = ["Charmander", "Squirtle", "Bulbasaur"];

function Charmander() {
    var randomNum = Math.floor(Math.random() * options.length);
    var pokemon = options[randomNum];
    
    if(pokemon==="Charmander") {
        document.getElementById('displayMessage').innerHTML = tieMessages[2];
    } else if (pokemon==="Squirtle") {
        document.getElementById('displayMessage').innerHTML = loseMessages[2];
    } else if (pokemon==="Bulbasaur") {
        document.getElementById('displayMessage').innerHTML = winMessages[2];
    }
}

function Squirtle() {
    var randomNum = Math.floor(Math.random() * options.length);
    var pokemon = options[randomNum];
    
    if(pokemon==="Charmander") {
        document.getElementById('displayMessage').innerHTML = winMessages[1];
    } else if (pokemon==="Squirtle") {
        document.getElementById('displayMessage').innerHTML = tieMessages[1];
    } else if (pokemon==="Bulbasaur") {
        document.getElementById('displayMessage').innerHTML = loseMessages[1];
    }
}

function Bulbasaur() {
    var randomNum = Math.floor(Math.random() * options.length);
    var pokemon = options[randomNum];
    
    if(pokemon==="Charmander") {
        document.getElementById('displayMessage').innerHTML = loseMessages[0];
    } else if (pokemon==="Squirtle") {
        document.getElementById('displayMessage').innerHTML = winMessages[0];
    } else if (pokemon==="Bulbasaur") {
        document.getElementById('displayMessage').innerHTML = tieMessages[0];
    }
}