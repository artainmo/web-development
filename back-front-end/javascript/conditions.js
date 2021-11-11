userName = 'Jane';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');

userQuestion = 'What is my future?';

console.log(userName + ': ' + userQuestion);

randomNumber = Math.floor(Math.random() * 8);

eightBall = '';

switch (randomNumber)
{
  case 0:
    eightBall = 'It is certain';
    break ;
  case 1:
    eightBall = 'It is decidedly so';
    break ;
  case 2:
    eightBall = 'Is it decidedly so';
    break ;
  case 3:
    eightBall = 'Reply hazy try again';
    break ;
  case 4:
    eightBall = 'Cannot predict now';
    break ;
  case 5:
    eightBall = 'Do not count on it';
    break ;
  case 6:
    eightBall = 'My sources say no';
    break ;
  case 7:
    eightBall = 'Outlook not so good';
    break ;
  default:
    eightBall = 'Signs point to yes';
    break ;
}

console.log(eightBall);

console.log('------------------------------------------------------------------------');

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;

let runnerAge = 18;

if (earlyRegistration && runnerAge > 17)
  raceNumber += 1000;

if (runnerAge > 17 && earlyRegistration)
  console.log(`race number ${raceNumber} - race time 9:30AM`);
else if (runnerAge > 17 && !earlyRegistration)
  console.log(`race number ${raceNumber} - race time 11:00AM`);
else if (runnerAge < 18)
  console.log(`race number ${raceNumber} - race time 12:30AM`);
else
  console.log('check the registration desk');

