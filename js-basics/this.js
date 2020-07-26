const rectangle = {
  width: 3,
  height: 5,
  getSquare: function () {
    return this.width * this.height
  }
};
rectangle.getSquare();
//
const price = {
  price: 10,
  discount: '15%',
  getPrice: function () {
    return this.price
  },
  getPriceWithDiscount: function () {
    let disc = (this.price * parseFloat(this.discount)) / 100;
    return (this.price - disc);
  }
};
getPrice();
getPriceWithDiscount();
//
let obj = {
  height: 10,
  toRaise: function () {
    return this.height += 1;
  }
}
obj.toRaise();
//
const numerator = {

  value: 1,

  double: function () {
    this.value *= this.value;
    return this
  },

  plusOne: function () {
    this.value += 1;
    return this
  },

  minusOne: function () {
    this.value -= 2;
    return
  }

}
numerator.double().plusOne().plusOne().minusOne();
//
let priceList = {
  price: 100,
  amount: 13,
  getFullPrice() {
    return this.price * this.amount
  }
}
let anotherList = {
  price: 200,
  amount: 13,
}
priceList.getFullPrice.call(anotherList);
//
let sizes = {
  width: 5,
  height: 10
}
getSquare = function () {
  return this.width * this.height
};
getSquare.call(sizes);
//
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  }
};

let getElementHeight = element.getHeight.bind(element);

getElementHeight();