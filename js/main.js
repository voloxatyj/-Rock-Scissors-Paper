const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player:0,
    computer:0
}

//Play Game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = (e.target.id);
    const computerChoice = getComputerChoice();
    const winner = getTheWinner(playerChoice,computerChoice);
    showWinner(winner,computerChoice);
}

// Get the Computer Choice
function getComputerChoice(){
    const random = Math.random();
    if (random<0.34) {
        return 'rock';
    } else if (random<0.67) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

// Get the winner
function getTheWinner(playerChoice,computerChoice){
    if (playerChoice===computerChoice) {
        return 'draw';
    } else if (computerChoice ==='rock' && playerChoice ==='scissors') {
        return "Computer";
    } else if (computerChoice ==='rock' && playerChoice ==='paper') {
        return "Player";
    } else if (computerChoice ==='paper' && playerChoice ==='rock') {
        return "Computer";
    } else if (computerChoice ==='paper' && playerChoice ==='scissors') {
        return "Player";
    } else if (computerChoice ==='scissors' && playerChoice ==='paper') {
        return "Computer";
    } else if (computerChoice ==='scissors' && playerChoice ==='rock') {
        return "Player";
    }
}

//Show thw Winner
function showWinner(winner,computerChoice){
    if (winner==="Player") {
        //Inc. player score
        scoreboard.player++;
        //Show modal result
        result.innerHTML=
            `<h1 class="text-win">Win Player</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong style="color:red">${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`;
    } else if (winner==="Computer") {
        //Inc. computer score
        scoreboard.computer++;
        //Show modal result
        result.innerHTML=
            `<h1 class="text-win">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong style="color:red">${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`;
    } else {
        //Show modal result
        result.innerHTML=
            `<h1>It’s A Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong style="color:red">${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`;
    }
    //Show score
    score.innerHTML=
    `<p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;

    modal.style.display = 'block';
}

//Clear Modal
function modalOff(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

//Restart button
function restartBtn() {
  scoreboard.player=0;
  scoreboard.computer=0;
  score.innerHTML=
    `<p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>`;

}

//Event listeners
choices.forEach(choice=>choice.addEventListener('click',play));
window.addEventListener('click', modalOff);
restart.addEventListener('click', restartBtn);