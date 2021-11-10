var input = 'a whale of a deal!';

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (let i = 0; i < input.length; i++)
{
  for (let l = 0; l < vowels.length; l++)
  {
      if (input[i] === vowels[l])
      {
        resultArray.push(input[i]);
        if (input[i] === 'e')
          resultArray.push('e');
        if (input[i] === 'u')
          resultArray.push('u');
      }
  }
}

console.log(resultArray.join("").toUpperCase()); //The empty array will indicate no delimiter, the default delimiter is ','.
