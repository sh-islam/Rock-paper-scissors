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


// function playHearts(){
//   let bottomImages = document.querySelector(".bottom").querySelectorAll(".btm.unactive");
//   console.log(bottomImages);
//   bottomImages.forEach(botImg => botImg.classList.remove("unactive"));
//   console.log(bottomImages);
// }


function injectHearts(){
  for (let i = 0; i < 3; i++){
    var img = document.createElement("img");
    img.src = "/images/pixelheart.png";
    var src = document.getElementById("insertHearts");
    src.append(img);
  }
}

function injectBrokenHearts(){
  for (let i = 0; i < 3; i++){
    var img = document.createElement("img");
    img.src = "/images/brokenheart.png";
    var src = document.getElementById("insertHearts");
    src.append(img);
  }
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
        if (computerScore > userScore) {
          window.alert("You lose! You were slain by the machine");
          injectBrokenHearts();
        }
        else {
          window.alert("You have won the war against the machine!");
          injectHearts();
        }
        statusText.textContent = "Refreshing page...";
        setTimeout(() => {
          let bottomImages = document.querySelector(".bottom").querySelectorAll(".btm.unactive");
          bottomImages.forEach(botImg => botImg.classList.add("unactive"));
            window.location.reload();
         }, 2200);
         userScore = 0, computerScore = 0;
    }
    
    
})
});



