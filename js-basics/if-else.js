//let a = 0 || 'string';
//let a = 1 && 'string';
//let a = null || 25;
//let a = null && 25;
//let a = null || 0 || 35;
//let a = null && 0 && 35;
// console.log(a);
// 12 + 14 + '12' = 2612;
// 3 + 2 - '1' = 4;
// '3' + 2 - 1 = 31;
// true + 2 = 3 
// +'10' + 1 = 11 + вместо Number;
// undefined + 2 = NaN
// true + undefined = NaN;
// null + 5 = 5;

// let str = 'hiden';
// if (str === 'hidden') {
//   str = 'visible'
// } else {
//   str = 'hidden'
// }
// console.log(str);
// let num = 10;
// if (num === 0) {
//   num = 1;
// } else if (num < 0) {
//   num = 'less then zero';
// } else {
//   num *= 10;
// }
// console.log(num);
// let car = {
//   name: 'Lexus',
//   age: 6,
//   create: 2008,
//   needRepair: false
// }
// if (car.age > 5) {
//   car.needRepair = true;
//   console.log("Need Repair");
// } else {
//   car.needRepair = false
// }
// let item = {
//   name: 'Intel core i7',
//   price: '100$',
//   discount: '15%'
// }
// const price = parseFloat(item.price);
// const discount = parseFloat(item.discount);
// if (!isNaN(price) && !isNaN(discount)) {
//   const priceWithDiscount = price - (price * (discount / 100));
//   console.log(priceWithDiscount)
// } else {
//   console.log(price);
// }
// let product = {
//   name: "Яблоко",
//   price: "10 $"
// };
// let min = 10;
// let max = 20;
// if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
//   console.log(product.name)
// } else {
//   console.log("Product not a defined")
// }

// Тернарчик

// let b = "hidden";
// b === "hidden" ? b = "visible" : b = "hidden"

// let b = "hidde"
// b = b === 'hidden' ? 'visible' : 'hidden';
// console.log(b);

// let c = -10;
// c === 0 ? c = 1 : c < 0 ? c = "less then zero" : c += 10;
let c = 9;
c = c === 0 ? 1 : c < 0 ? "less then zero" : c * 10;
console.log(c)