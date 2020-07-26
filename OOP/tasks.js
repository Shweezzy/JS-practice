class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}
var worker = new Worker('Иван', 'Иванов', 10, 31);

export class Worker{};
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31



// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }
//   getName() {
//     return this._name;
//   }
//   getSurname() {
//     return this._surname;
//   }
//   getRate() {
//     return this._rate;
//   }
//   setRate(rate) {
//     return this._rate = rate;
//   }
//   getDays() {
//     return this._days;
//   }
//   setDays(days) {
//     return this._days = days;
//   }
//   getSalary() {
//     return this._rate * this._days;
//   }
// }

// // var worker = new Worker('Иван', 'Иванов', 10, 31);

// // console.log(worker.getName()); //выведет 'Иван'
// // console.log(worker.getSurname()); //выведет 'Иванов'
// // console.log(worker.getRate()); //выведет 10
// // console.log(worker.getDays()); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31


// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// class MyString {
//   reverse(str) {
//     return str.split('').reverse().join('');
//   }
//   ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   ucWords(str) {
//     let resultStr = '';
//     for (let i = 0; i < str.length; i++) {
//       if (i == 0) {
//         resultStr += str[0].toUpperCase();

//       } else if (str[i - 1] === ' ') {
//         resultStr += str[i].toUpperCase();
//       } else resultStr += str[i];

//     }
//     return resultStr;
//   }
// }
// var str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

class Validator {
  isEmail(email) {
    return /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i.test(email);
  }
  isDate(date) {
    {
      var arrD = date.split(".");
      arrD[1] -= 1;
      var d = new Date(arrD[2], arrD[1], arrD[0]);
      if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
        return true;
      } else {
        return false;
      }
    }
  }
  isPhone(phone) {
    return /^\+380\d{3}\d{2}\d{2}\d{2}$/.test(phone)
  }
}

var validator = new Validator();

console.log(validator.isEmail('naerok@icloud.com'));
console.log(validator.isDate('122.05.2020'));
console.log(validator.isPhone('+380678870923'))