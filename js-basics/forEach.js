const array = [1, 2, 3, 5, 8, 9, 10];
const digitArray = array.map(i => ({
  digit: i,
  odd: i % 2 !== 0 //Booleand(i%2)
}))

const array2 = [12, 4, 50, 1, 0, 18, 40];
const someArray = array2.some(num => num == 0)

const lengthArray = ['yes', 'hello', 'no', 'easycode', 'what'];
const testLength = lengthArray.every(i => i.length > 3);

const arrayWords = [{
  char: "a",
  index: 12
}, {
  char: "w",
  index: 8
}, {
  char: "Y",
  index: 10
}, {
  char: "p",
  index: 3
}, {
  char: "p",
  index: 2
}, {
  char: "N",
  index: 6
}, {
  char: " ",
  index: 5
}, {
  char: "y",
  index: 4
}, {
  char: "r",
  index: 13
}, {
  char: "H",
  index: 0
}, {
  char: "e",
  index: 11
}, {
  char: "a",
  index: 1
}, {
  char: " ",
  index: 9
}, {
  char: "!",
  index: 14
}, {
  char: "e",
  index: 7
}]

const strWords = arrayWords.sort((prev, next) => prev.index - next.index).map(i => i.char).join('');
const strWords = arrayWords.sort((prev, next) => prev.index - next.index).reduce((acc, {char} ))

const twiceArray = [
  [14, 45],
  [1],
  ['a', 'c', 'd']
]

twiceArray.sort()

const thirdArray = [

  {
    cpu: 'intel',
    info: {
      cores: 2,
      сache: 3
    }
  },

  {
    cpu: 'intel',
    info: {
      cores: 4,
      сache: 4
    }
  },

  {
    cpu: 'amd',
    info: {
      cores: 1,
      сache: 1
    }
  },

  {
    cpu: 'intel',
    info: {
      cores: 3,
      сache: 2
    }
  },

  {
    cpu: 'amd',
    info: {
      cores: 4,
      сache: 2
    }
  }

]
thirdArray.sort((prev, next) => prev.info.cores - next.info.cores)


let products = [

  {
    title: 'prod1',
    price: 5.2
  }, {
    title: 'prod2',
    price: 0.18
  },

  {
    title: 'prod3',
    price: 15
  }, {
    title: 'prod4',
    price: 25
  },

  {
    title: 'prod5',
    price: 18.9
  }, {
    title: 'prod6',
    price: 8
  },

  {
    title: 'prod7',
    price: 19
  }, {
    title: 'prod8',
    price: 63
  }

];

function filterCollection(array, min, max) {
  return array
    .filter((obj) => obj.price > min && obj.price < max)
    .sort((prev, next) => prev.price - next.price)
}

function filterCollection(prod, min, max) {
  return prod
    .filter(({price}) => price >= min && price <= max)
    .sort((prev, next) => prev.price - next.price)
}