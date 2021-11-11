const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||      userInput === 'scissors' || userInput === 'bomb')
  {
    return userInput;
  }
  else
  {
    console.log('Error');
  }
}

// console.log(getUserChoice('SCissors'));

function getComputerChoice()
{
  const ret = ['rock', 'paper', 'scissors'];

  return ret[Math.floor(Math.random() * 3)];
}

// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice)
{
  if (userChoice === 'bomb')
    return 'user won';
  if (userChoice === computerChoice)
    return 'game was a tie';
  if (userChoice === 'rock' && computerChoice === 'paper')
    return 'computer won';
  else if (userChoice === 'rock' && computerChoice === 'scissors')
    return 'user won';
  else if (userChoice === 'scissors' && computerChoice === 'rock')
    return 'computer won';
  else if (userChoice === 'scissors' && computerChoice === 'paper')
    return 'user won';
  else if (userChoice === 'paper' && computerChoice === 'rock')
    return 'user won';
  else if (userChoice === 'paper' && computerChoice === 'scissors')
    return 'computer won';
}

// console.log(determineWinner('paper', 'rock'));

function playGame()
{
  userChoice = getUserChoice('rock');
  computerChoice = getComputerChoice();

  console.log('User: ' + userChoice);
  console.log('Computer: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

console.log('-----------------------------------------------------------------------------------------------------------------------------');

function getSleepHours(day)
{
  switch (day)
  {
    case 'monday':
      return 8;
    case 'tuesday':
      return 3;
    case 'wednesday':
      return 4;
    case 'thursday':
      return 6;
    case 'friday':
      return 7;
    case 'saturday':
      return 9;
    case 'sunday':
      return 9;
  }
}

// console.log(getSleepHours('monday'));

function getActualSleepHours()
{
  return getSleepHours('monday') + getSleepHours('tuesday') +
        getSleepHours('wednesday') + getSleepHours('thursday') +
        getSleepHours('friday') + getSleepHours('saturday') +
        getSleepHours('sunday');
}

function getIdealSleepHours(ideal)
{
  return ideal * 7;
}

// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

function calculateSleepDebt()
{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(7);

  let dif = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours)
    console.log('Perfect sleep');
  if (actualSleepHours > idealSleepHours)
    console.log('More sleep than necessary: ' + (actualSleepHours - idealSleepHours) + 'hs');
  if (actualSleepHours < idealSleepHours)
    console.log('Get some rest: ' + (idealSleepHours - actualSleepHours) + 'hs');
}


calculateSleepDebt();
