//kelvin
const Kelvin = 0;

//celsius is kelvin minus 273
let celsius = Kelvin - 273;

//fahrenheit convertion formula
let fahrenheit = celsius * (9/5) + 32;

//Rounding down number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log("---------------------------------------------------------------------------------------------")

//personal age
const myAge = 21;

let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

laterYears *= 4;

//console.log(earlyYears);
//console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears;

myName = 'Arthur'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
