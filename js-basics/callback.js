function processString(string, callback) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    newString += callback(string[i]);
  }

  return newString;
}

processString('Hello, easycode!',
  function (symbol) {
    return symbol.toUpperCase();
  });
processString('Hello, easycode!',
  function (symbol) {
    return symbol + '_';
  });
processString('Hello, easycode!',
  function (symbol) {
    return symbol.charCodeAt();
  });


function doWithLoading(fn) {
  console.log("начало загрузки");
  let returnValue = fn();
  console.log("конец загрузки");
  return returnValue;
}

function process() {
  console.log("загружаем...");
}
doWithLoading(process);
// начало загрузки
// загружаем...
// конец загрузки


// 1
function firstFunc(arr, fn) {
  let result = "New value: ";
  for (let i = 0; i < arr.length; i++) {
    result += fn(arr[1]);
  }
  return result;
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  return Number(el) * 10 + ", ";
}

console.log(firstFunc([10, 20, 30], handler2))

function handler3(el) {
  return `${el.name} is ${el.age} `
}

console.log(firstFunc([{
  age: 45,
  name: 'Jhon'
}, {
  age: 20,
  name: 'Aaron'
}], handler3));

function handler4(el) {
  return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));

function isBigEnough(element, index, array) {
  return element > 5;
}