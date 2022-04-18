
const player1 = document.querySelector(".btn-primary"); //Player 1 game button - Blue
const player2 = document.querySelector(".btn-success"); //Player 2 game button - Green
const reset = document.querySelector(".btn-danger") //Game reset button
const playingTo = document.querySelector("#playingToDropDown"); //This defines the game period
const countPlayer2 = document.querySelector("#player2Count")
const countPlayer1 = document.querySelector("#player1Count");

let count = 0;
let gamePeriod = 5;

console.log(playingTo);

player1.addEventListener("click", function(evt){
    evt.preventDefault;
    count = count + 1;
    const countPlayer1 = document.querySelector("#player1Count");
    countPlayer1.textContent = count; //Span with the 0 value for player1

    if(count > gamePeriod){
        countPlayer1.addEventListener("click", resetFunc());
        countPlayer1.classList.add('winner');
        countPlayer2.classList.add('loser');
    }
});

player2.addEventListener("click", function(evt){
    evt.preventDefault;
    count = count + 1;
    const countPlayer2 = document.querySelector("#player2Count")
    countPlayer2.textContent = count; //Span with the 0 value for player2

    if(count > gamePeriod){
        countPlayer2.addEventListener("click", resetFunc());
        countPlayer2.classList.add('winner');
        countPlayer1.classList.add('loser'); 
        //alert("Game Over. Game will reset by default");
    }
});

//CAPTURING THE USER INPUT FROM THE DROP DOWN LIST
playingTo.addEventListener("change", function(){
    gamePeriod = parseInt(this.value);
}) 

//RESET FUNCTION
reset.addEventListener("click", resetFunc);

function resetFunc(){
    const countPlayer1 = document.querySelector("#player1Count");
    const countPlayer2 = document.querySelector("#player2Count")
    count = 0;
    countPlayer1.textContent = 0;
    countPlayer2.textContent = 0;
    countPlayer1.classList.remove('winner', 'loser');
    countPlayer2.classList.remove('winner', 'loser');
    gamePeriod = 5; //By default the selected drop down is set to 5
} //cannot replay after reset


