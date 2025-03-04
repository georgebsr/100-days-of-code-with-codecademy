let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  const randomInt = Math.floor(Math.random() * 10);
  return randomInt;
};

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

//Absolute distance between guess and target
function getAbsoluteDistance(guess, target) {
  return Math.abs(guess - target);
}


//Compare guesses and see the winner
function compareGuesses(humanGuess, computerGuess, target) {
  //Check if human guess is on range
    if (humanGuess < 0 || humanGuess > 9) {
    alert("Please enter a number between 0 and 9.");
    return;
  }
  const humanDifference = getAbsoluteDistance(humanGuess, target);
  const computerDifference = getAbsoluteDistance(computerGuess, target);



  if (humanDifference < computerDifference) {
    return true;
  } else if (humanDifference > computerDifference) {
    return false;
  } else {
    return true;
  }
}

/* Sample test case to check the game flow
let humanGuess = 5;
let computerGuess = 3;
let target = generateTarget();

console.log('Initial Round:', currentRoundNumber);
console.log('Target:', target);
if (compareGuesses(humanGuess, computerGuess, target)) {
  updateScore('human');
} else {
  updateScore('computer');
}
advanceRound();

console.log('Human Score:', humanScore);
console.log('Computer Score:', computerScore);
console.log('New Round:', currentRoundNumber);
*/

