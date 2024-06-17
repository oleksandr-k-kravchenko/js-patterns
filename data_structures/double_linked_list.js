class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let str = "";
    let current = this.head;
    while (current) {
      str += current.val + " ";
      current = current.next;
    }
    return str;
  }

  printReverse() {
    let str = "";
    let current = this.tail;
    while (current) {
      str += current.val + " ";
      current = current.prev;
    }
    return str;
  }

  add(val) {
    const listNode = new ListNode(val);
    if (this.isEmpty()) {
      this.head = listNode;
      this.tail = listNode;
    } else {
      listNode.prev = this.tail;
      this.tail.next = listNode;
      this.tail = listNode;
    }
    this.size++;
  }

  prepend(val) {
    const listNode = new ListNode(val);
    if (this.isEmpty()) {
      this.head = listNode;
      this.tail = listNode;
    } else {
      listNode.next = this.head;
      this.head.prev = listNode;
      this.head = listNode;
    }
    this.size++;
  }

  insertAt(val, index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError();
    }
    const listNode = new ListNode(val);

    if (index === 0) {
      this.prepend(val);
    } else {
      let current = this.head;
      let i = 0;

      while (i < index) {
        current = current.next;
        i++;
      }

      listNode.next = current;
      listNode.prev = current.prev;
      current.prev.next = listNode;
      current.prev = listNode;
    }

    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError();
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let i = 0;

      while (i < index) {
        current = current.next;
        i++;
      }
      current.prev.next = current.next;
    }

    this.size--;

    if (this.size === 1) {
      this.tail = this.head;
    }
    if (this.size === 0) {
      this.tail = null;
    }

    return current.val;
  }
}

// const ll = new DoubleLinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
// console.log(ll.print(), ' - ', ll.printReverse());
// console.log(ll.size);
// ll.insertAt(10, 0);
// console.log(ll.print(), ' - ', ll.printReverse());
// ll.insertAt(20, 5);
// console.log(ll.print(), ' - ', ll.printReverse());
// console.log(ll.removeFrom(0));
// console.log(ll.print(), ' - ', ll.printReverse());
// console.log(ll.removeFrom(2));
// console.log(ll.print(), ' - ', ll.printReverse());
