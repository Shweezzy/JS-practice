let string = "some test string";
console.log(`${string[0]} ${string[string.length - 1]}`);
//
let lol = string.slice(1, [string.length - 1]);
console.log(`${string[0].toUpperCase()}${lol}${string[string.length - 1].toUpperCase()}`);
//
console.log(`${string.indexOf("string")}`)
//
console.log(`${string.lastIndexOf(" ")}`)
//
console.log(`${string.substr(5, 4)}`);
//
console.log(`${string.slice(4, 10)}`);
//
console.log(`${string.slice(0, -6)}`);
//
let a = 20
let b = 16
console.log(`${String(a) + String(b)}`)