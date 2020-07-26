// let obj = {
//   product: "iphone"
// };
// obj.price = 1000;
// obj.currency = 'dollar';
// obj.details = {
//   model: 'XR',
//   color: "red"
// }
// object.details = {};
// object.details.model = '';
// object.details.color = '';

//
// let str = "asd sad dsa"
// let str2 = "";

// function camelCase(str) {
//   let abbr = "";
//   for (let i = 0; i < str.length; i++) {

//     if (str[i] === " ") {
//       abbr += str[i + 1].toUpperCase();
//     }
//     abbr += str[i + 1];
//   }
//   return abbr
// }
// camelCase("aa asd asdasf")
let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}

console.log(res);