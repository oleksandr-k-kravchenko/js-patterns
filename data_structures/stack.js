class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(item) {
    this.items.push(item);
    this.length++;
  }

  pop() {
    if (this.length) {
      this.length--;
      return this.items.pop();
    }
    return undefined;
  }

  peek() {
    return this.items.peek();
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    let str = "";
    for (let i = 0; i < this.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// console.log(stack.print());
// console.log('pop', stack.pop());
// console.log(stack.print());
