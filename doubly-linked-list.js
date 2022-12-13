/** Node: node for a doubly linked list. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** get(idx) returns a node at the given index */

  _get(idx) {
    let current;
    let count;
    let middle = Math.floor(this.length / 2);

    if (idx < 0 || idx >= this.length) throw new Error();

    if (idx < middle) {
      current = this.head;
      count = 0;
      while (count < idx) {
        count++;
        current = current.next;
      }
      return current.val;
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count > idx) {
        count--;
        current = current.prev;
      }
      return current.val;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    newNode.prev = this.tail;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = null;
      newNode.prev = null;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      newNode.prev = null;
      this.head = newNode;
    }

    this.length += 1;
  }

  /** pop(): remove last item & return its value */

  pop() {
    if (this.head === null && this.tail === null) throw new Error();

    let current = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length -= 1;

      return current.val;
    }

    let popNode = current;
    this.tail = current.prev;
    this.tail.next = null;
    this.length -= 1;
    return popNode.val;
  }

  /** shift(): remove first item & return its value */

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
    this.head.prev = null;
    this.length -= 1;
    return current.val;
  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {
    return this._get(idx);
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current;
    let count;
    let middle = Math.floor(this.length / 2);

    if (idx < 0 || idx >= this.length) throw new Error();

    if (idx < middle) {
      current = this.head;
      count = 0;
      while (count < idx) {
        count++;
        current = current.next;
      }
      current.val = val;
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count > idx) {
        count--;
        current = current.prev;
      }
      current.val = val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let current;
    let count;
    let middle = Math.floor(this.length / 2);
    if (idx < 0 || idx > this.length) throw new Error();

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = null;
      newNode.prev = null;
      this.length++;
      return undefined;
    }

    if (idx === 0) {
      this.head.prev = newNode;
      this.head = newNode;
      newNode.prev = null;
      this.length++;
      return undefined;
    }

    if (idx === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = null;
      this.tail = newNode;
      this.length++;
      return undefined;
    }

    if (idx < middle) {
      current = this.head;
      count = 0;
      while (count < idx) {
        count++;
        current = current.next;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count > idx) {
        count--;
        current = current.prev;
      }
    }
    current.prev.next = newNode;
    newNode.prev = current.prev;
    newNode.next = current;
    current.prev = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current;
    let count;
    let middle = Math.floor(this.length / 2);

    if (idx < 0 || idx >= this.length) throw new Error();

    if (this.length === 1) {
      current = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    if (idx === 0) {
      current = this.head;
      this.head = current.next;
      this.head.prev = null;
      this.length--;
      return current.val;
    }

    if (idx === this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
      this.length--;
      return current.val;
    }

    if (idx < middle) {
      current = this.head;
      count = 0;
      while (count < idx) {
        count++;
        current = current.next;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count > idx) {
        count--;
        current = current.prev;
      }
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.length--;

    return current.val;
  }

  /** return average (mean) of list values. */

  average() {}
}

module.exports = DoublyLinkedList;
