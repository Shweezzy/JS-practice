function numToArray(num) {
  if (typeof num != "number") return new Error("Its a not number:D");
  const array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  console.log(array);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function changeCollection() {
  const result = [];

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const el = arguments[i].slice();
      el.shift();
      result.push(el)
    }
  }

  return result;
}