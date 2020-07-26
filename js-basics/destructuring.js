function destr(a, ...others) {
  return {
    a,
    others
  }
}
const dester = destr('a', 'b', 'c', 'd')

function getFirstAndOther(first, ...other) {
  return {
    first,
    other
  }
}

const getFirstAndOther = (first, ...other) => ({
  first,
  other
});

console.log(getFirstAndOther(2, 3, 5, 6))



const organisation = {

  name: 'Google',

  info: {
    employees: ['Vlad', 'Olga'],
    partners: ['Microsoft', 'Facebook', 'Xing']
  }
};

function getInfo({
  name = 'Unknown',
  info: {
    partners: [first = "empty"] = []
  } = {}
} = {}) {
  console.log(`Name: ${name}`)
  console.log(`Partners: ${first}`)
}

getInfo(organisation)
getInfo()


let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];

// let [elem1, elem2, elem3, ...arr] = newArr;
// let [elem1, elem2] = newArr.reverse()
// let [, elem2] = newArr;
// let [, elem2 = "bbb", elem3 = "eee"] = newArr;
let obj = {
  name: 'Петр',
  'surname': 'Петров',
  'age': '20 лет'
}

let {
  name = 'аноним',
    surname = "Анонимович",
    age = "? лет"
} = obj;

let arr = [1, 2, 3, 4, 5];
arr.reduce((acc, i) => acc + i)