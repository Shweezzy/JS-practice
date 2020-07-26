const MyObj2 = initVal => {
  return {
    myVal: initVal,
    set: function(x) {
      this.myVal = x
    }
  }
}


//FIRST 
// function Component(tagName) {
//   this.tagName = tagName || 'div';
//   this.node = document.createElement(tagName);
// }
//SECOND
//Component.prototype.setText = function (text) { 
//   this.node.textContent = text;
// };

class Component {
  constructor(tagName) {
    this.tagName = tagName || 'div';
  }
  getNode() {
    let node = document.createElement(this.tagName);
    return node;
  }
  setText(text) {
    let textNode = this.getNode()
    textNode.textContent = text;
    return textNode;
  }
}
const comp = new Component('span');

//THIRD

class Calc {
  constructor(firstNum) {
    this.firstNum = firstNum;

  }
  get num() {
    return this.firstNum;
  }
  set num(number) {
    this.firstNum = number;
  }
  get clear() {
    return `${this.firstNum = 0} - number is cleared!`;
  }
  getAmount(secondNum) {
    return this.firstNum += secondNum;
  }
  getSubtract(secondNum) {
    return this.firstNum -= secondNum;
  }
  getMultiply(secondNum) {
    return this.firstNum *= secondNum;
  }
  getDivide(secondNum) {
    return this.firstNum /= ppsecondNum;
  }
}

const testCalc = new Calc(0);