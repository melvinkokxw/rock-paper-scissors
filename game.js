// This program is a simple program to randomly generate a computer choice for playing rock paper scissors
// This program mainly serves as personal practice for using arrow function expressions

const getUserChoice = () => {
  let userInput = prompt("Rock, Paper or Scissors?"); //allows user to input choice
  userInput.toLowerCase(); //convert user input to lower case to ensure consistency
  if(userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb')
    return userInput;
  else
    console.log('Invalid input!');
};

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
  if (userChoice === 'bomb') {
    return 'User Wins!';
  } else if (userChoice === computerChoice) {
      return 'It\'s a Tie!';
  } else if (userChoice === 'rock') {
      if(computerChoice === 'paper')
        return 'Computer Wins!';
      else
        return 'User Wins!';
  } else if (userChoice === 'paper') {
      if(computerChoice === 'scissors')
        return 'Computer Wins!';
      else
        return 'User Wins!';
  } else if (userChoice === 'scissors') {
      if(computerChoice === 'rock')
        return 'Computer Wins!';
      else
        return 'User Wins!';
  }
};

const playGame = () => {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`User's choice is ${userChoice} and computer\'s choice is ${computerChoice}.`);
    console.log(determineWinner(userChoice,computerChoice));
};

playGame();
