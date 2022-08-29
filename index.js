



let computerScore = 0, userScore = 0;


function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
  }


function playRound(playerSelection, computerSelection){

      if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore++;
        return "Rock beats scissors, you win!";
      }
      else if (playerSelection == "paper" && computerSelection == "rock") {
        userScore++;
        return "Paper beats rock, you win!";
      }
      else if (playerSelection == "scissors" && computerSelection == "paper") {
        userScore++;
        return "Scissors beats paper, you win!";
      }
      else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "Rock is defeated by paper, you lose!";
      }
      else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "Scissors are defeated by rock, you lose!";
      }
      else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return "Paper is defeated by scissors, you lose!";
      }
      else return "Tie.";
      
    }



const buttons = document.querySelectorAll(".btn");
const statusText = document.querySelector(".status");
const resultText = document.querySelector(".resultText");
const userScoreText = document.querySelector("#userScore");
const cpuScoreText = document.querySelector("#cpuScore");


buttons.forEach((button)=>{button.addEventListener('click',()=>{

    playerChoice = button.id;
    statusText.textContent = "You clicked " + playerChoice;
    resultText.textContent = playRound(playerChoice, getComputerChoice());
    userScoreText.textContent = "User score: " + userScore;
    cpuScoreText.textContent = "CPU score: " + computerScore;

    if (userScore === 5 || computerScore === 5){
        if (computerScore > userScore) window.alert("You lose! You were slain by the machine");
        else window.alert("You have won the war against the machine!");
        statusText.textContent = "Refreshing page...";
        
        setTimeout(() => {
            window.location.reload();
         }, 500);
         userScore = 0, computerScore = 0;
    }
    
    
})
});

