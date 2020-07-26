function allArguments(...arguments) {
  if (!arguments.length) return 0;
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  console.error(result);
}
// allArguments(0)
function reverse(a) {
  let result = "";
  let toString = String(a);
  for (let i = toString.length; i--;) {
    result += toString[i];
  }
  console.log(result);
}

function unicode(str) {
  let string = String(str);
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += string[i].charCodeAt() + " ";
  }
  result.trim();
  console.log(result)
}

function guessNumber(num) {
  let number = Number(num);
  let randomNumber = Math.random(10).toFixed(1) * 10;
  if (number < 0 || number > 10) return console.error("Please provide number in range 0 - 10");
  if (isNaN(number)) return console.error("Please provide a valid number");
  if (number === randomNumber) {
    return "You win"
  } else return `You are lose, your number is ${number}, the random is ${randomNumber}`
}
