const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const scores = document.querySelector(".scores");


let humanScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {playGame("ROCK")});
paper.addEventListener("click", () => {playGame("PAPER")});
scissors.addEventListener("click", () => {playGame("SCISSORS")});




function getComputerChoice () {
    let random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
        case 1 : return "ROCK";
        break;
        case 2 : return "PAPER";
        break;
        case 3 : return "SCISSORS";
        break;
    }
}
/*      this function is disabled when adding buttons to the ui because it returns an undefine value due to how this program is structured
        function getHumanChoice (choice) {                                                                         
           return choice;
        }
*/
function getWinner() {    //declares final score
    if (humanScore == 5) {
        scores.textContent = `You won this game with your score being:${humanScore} and the my score being ${computerScore}.`;
        scores.classList.toggle("highlight")
        setTimeout(
            () => {
                reset() 
            },
            2 * 1000
          );
       
    }
    else if (computerScore == 5) {
        scores.textContent = `You lost this game with your score being:${humanScore} and the my score being ${computerScore}.`;
        scores.classList.toggle("highlight")
        setTimeout(
            () => {
                reset() 
            },
            2 * 1000
          );
        
    }
    
}


function playRound(humanChoice, computerChoice) {       //this function sets the logic for who wins and who losses and then add changes to the winner's score
    if (humanChoice === computerChoice) {
                scores.textContent = `A Draw! You chose ${humanChoice}, while i chose ${computerChoice}. Your Score: ${humanScore}. My Score: ${computerScore}`;
    } else if (humanChoice === "ROCK") {
        switch (computerChoice) {
            case "PAPER" : 
                computerScore++
                scores.textContent = `A Lose! You chose ${humanChoice}, while i chose ${computerChoice}. Your Score: ${humanScore}. My Score: ${computerScore}`;
            break;
            case "SCISSORS" : 
                humanScore++
                scores.textContent = `A Win! You chose ${humanChoice}, while i chose ${computerChoice}. Your Score: ${humanScore}. My Score: ${computerScore}`;
            break;
        }    
    } else if (humanChoice === "PAPER") {
        switch (computerChoice) {
            case "ROCK" : 
                humanScore++
                scores.textContent = `A Win! You chose ${humanChoice}, while i chose ${computerChoice}. Your Score: ${humanScore}. My Score: ${computerScore}`;
            break;
            case "SCISSORS" : 
                computerScore++
                scores.textContent = `A Lose! You chose ${humanChoice}, while i chose ${computerChoice}. Your Score: ${humanScore}. My Score: ${computerScore}`;
            break;
        }            
    } else if (humanChoice === "SCISSORS") {
        switch (computerChoice) {
            case "ROCK" : 
                computerScore++
                scores.textContent = `A Lose! You chose ${humanChoice}, while i chose ${computerChoice}. Your Score: ${humanScore}. My Score: ${computerScore}`;
            break;
            case "PAPER" : 
                humanScore++
                scores.textContent = `A Win! You chose ${humanChoice}, while i chose ${computerChoice}. Your Score: ${humanScore}. My Score: ${computerScore}`;
            break;
        } 
    } else { console.log("Error")}
}



function playGame(humanChoice) {
    const computerSelection = getComputerChoice();
    const humanSelection = humanChoice;

    playRound(humanSelection, computerSelection)
        
    getWinner();
           // playGame(); activate this if you want an endless gameplay

}

function reset() {
    humanScore = 0;
    computerScore = 0;
    scores.classList.toggle("highlight")
}

      