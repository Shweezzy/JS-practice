function minus(firstNum) {
  return function (secondNum) {
    return firstNum - secondNum
  }
};

function multiplyMaker(result) {
  return function (num) {
    return result *= num
  }
};
const multiply = multiplyMaker(2);

function reverse(str) {
  return str.split("").reverse().join("");
}

const stringMethods = (function () {
  let str = "";

  function setString(string = "") {
    str = String(string)
  }

  function b() {
    return str
  }

  function c() {
    return str.length
  }

  function d() {
    return reverse(str)
  }
  return {
    setString,
    b,
    c,
    d
  }
}());

const calcModule = (function () {
  let result = 0;

  function setRes(num) {
    result = Number(num);
  }

  function plus(num) {
    result += num
  }

  function minus(num) {
    result -= num
  }

  function multiply(num) {
    result += num
  }

  function getRes() {
    return result.toFixed(2)
  }
  return {
    setRes,
    plus,
    minus,
    multiply,
    getRes
  }
}())