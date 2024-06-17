class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  enqueue(item) {
    this.items.push(item);
    this.size++
  }

  dequeue() {
    if (this.size === 0) {
      return undefined;
    }
    this.size--;
    return this.items.shift();
  }

  print() {
    let str = ""
    for (let i = 0; i < this.size; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// q.enqueue(5);
// console.log(q.print());
// console.log(q.dequeue());
// console.log(q.print());
// console.log(q.dequeue());
// console.log(q.print());
