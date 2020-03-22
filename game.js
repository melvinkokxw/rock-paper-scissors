// This program is a simple program to randomly generate a computer choice for playing rock paper scissors
// This program mainly serves as personal practice for using arrow function expressions

userInput = 'Rock'; //input user choice here
userInput.toLowerCase(); //convert uer input to lower case to ensure consistency

const getUserChoice = userInput => {
  if(userInput==='rock' || userInput==='paper' || userInput==='scissors')
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
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}
