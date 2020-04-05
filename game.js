// This program is a simple program to randomly generate a computer choice for playing rock paper scissors
// This program mainly serves as personal practice for using arrow function expressions

// getUserChoice function no longer needed as buttons as used

/* const getUserChoice = () => {
  let userInput = prompt("Rock, Paper or Scissors?"); //allows user to input choice
  userInput.toLowerCase(); //convert user input to lower case to ensure consistency
  if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb')
    return userInput;
  else
    console.log('Invalid input!');
}; */

let computerscore = 0;
let playerscore = 0;

const getComputerChoice = () => {
  const computerInput=Math.floor(Math.random()*3); //generate random number between 0-2
  //return computer choice based on number generated
  switch(computerInput) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice) {
      return 'It\'s a Tie!';
  } else if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        computerscore++;
        return 'Computer Wins!';
      } else {
        playerscore++;
        return 'User Wins!';
      }
  } else if (userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        computerscore++;
        return 'Computer Wins!';
      } else {
        playerscore++;
        return 'User Wins!';
      }
  } else if (userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        computerscore++;
        return 'Computer Wins!';
      } else {
        playerscore++;
        return 'User Wins!';
      }
  }
};

const playGame = (e) => {
    const computerChoice = getComputerChoice();
    currentChoices.textContent=`User's choice is ${e.target.name} and computer\'s choice is ${computerChoice}.`;
    currentResults.textContent=determineWinner(e.target.name,computerChoice);
    updateScores();
    if(playerscore===5) {
      alert("Player wins game!");
      resetScores();
      updateScores();
    } else if(computerscore===5) {
      alert("Computer wins game!");
      resetScores();
      updateScores();
    }
};

const resetScores = () => {
  playerscore = 0;
  computerscore = 0;
};

const updateScores = () => {
  playerScoreDisplay.textContent=playerscore;
  computerScoreDisplay.textContent=computerscore;
};

const currentChoices = document.querySelector('.currentChoicesDisplay');
const currentResults = document.querySelector('.currentResultsDisplay');

const playerScoreDisplay = document.querySelector('.playerScoreDisplay');
const computerScoreDisplay = document.querySelector('.computerScoreDisplay');

const buttons = document.querySelectorAll('.choiceButton');
buttons.forEach(button => button.addEventListener('click', playGame));
