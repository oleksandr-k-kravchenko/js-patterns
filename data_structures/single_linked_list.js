class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
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

  add(val) {
    const listNode = new ListNode(val);
    if (this.isEmpty()) {
      this.head = listNode;
      this.tail = listNode;
    } else {
      const currentTail = this.tail;
      this.tail = listNode;
      currentTail.next = listNode;
    }
    this.size++;
  }

  insertAt(val, index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError();
    }
    const listNode = new ListNode(val);

    if (index === 0) {
      listNode.next = this.head;
      this.head = listNode;
    } else {
      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      listNode.next = current;
      previous.next = listNode;
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
      let previous;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
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

// const ll = new SingleLinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.add(5);
// console.log(ll.print());
// console.log(ll.size);
// ll.insertAt(10, 0);
// console.log(ll.print());
// ll.insertAt(20, 5);
// console.log(ll.print());
// console.log(ll.removeFrom(0));
// console.log(ll.print());
// console.log(ll.removeFrom(2));
// console.log(ll.print());
