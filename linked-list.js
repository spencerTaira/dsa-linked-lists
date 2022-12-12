/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail === null) this.tail = newNode;

    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null && this.tail === null) throw new Error();

    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return current.val;
    }

    while (current.next.next !== null) {
      current = current.next;
    }

    let popNode = current.next;
    this.tail = current;
    current.next = null;
    this.length -= 1;
    return popNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null && this.tail === null) throw new Error();

    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return current.val;
    }

    this.head = current.next;
    this.length -= 1;
    return current.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error();

    let current = this.head;
    let count = 0;

    while (count != idx) {
      current = current.next;
      count += 1;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error();

    let current = this.head;
    let count = 0;

    while (count != idx) {
      current = current.next;
      count += 1;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error();

    const newNode = new Node(val);

    let current = this.head;
    let count = 0;

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;

      if (this.tail === null) this.tail = newNode;
    
      return undefined;
    }

    if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return undefined;
    }

    while (count != idx - 1) {
      current = current.next;
      count += 1;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
