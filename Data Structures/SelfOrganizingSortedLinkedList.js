class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
        this.nextMax = null;
        this.prevMin = null;
    }
}

class SelfOrganizingSortedLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.minHead = null;
        this.maxTail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    pushFront(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
        this._sortedInsert(node);
    }

    pushBack(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node; 
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        this._sortedInsert(node);
    }

    insert(index, value) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.pushFront(value);
        } else if (index === this.size) {
            this.pushBack(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; ++i) {
                prev = prev.next;
            }
            node.prev = prev;
            node.next = prev.next;
            prev.next.prev = node;
            prev.next = node;
            this.size++;
            this._sortedInsert(node);
        }
    }

    delete(index) {
        if (index < 0 || index >= this.size) { 
            return null;
        }
        let item;
        if (index === 0) {
            return this.removeFromFront();
        } else if (index === this.size - 1) {
            return this.removeFromEnd();
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; ++i) {
                prev = prev.next;
            }
            item = prev.next;
            item.next.prev = prev;
            prev.next = item.next;
        }
        this.size--;
        this._sortedDelete(item.value);
        return item.value;
    }

    removeValue(value) {
        if (!this.head) { return null; }
        let curr = this.head;
        while (curr.next && curr.value !== value) {
            curr = curr.next;
        }

        if (curr.value === value) {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
                this.size--;
                this._sortedDelete(value);
                return value;
            } else if (value === this.head.value) {
                this.head = this.head.next;
                this.head.prev = null;
                this.size--;
                this._sortedDelete(value);
                return value;
            } else if (value === this.tail.value) {
                this.tail = this.tail.prev;
                this.tail.next = null;
                this.size--;
                this._sortedDelete(value);
                return value;
            } else {
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
                this.size--;
                this._sortedDelete(value);
                return value;
            }
        }
        return null;
    }

    find(value) {
        if (this.isEmpty()) { return -1; }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            i++;
            curr = curr.next;
        }
        return -1;
    }

    removeFromFront() {
        if (this.isEmpty()) { return null; }
        const value = this.head.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        this._sortedDelete(value);
        return value;
    }

    removeFromEnd() {
        if (this.isEmpty()) { return null; }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        this._sortedDelete(value);
        return value;
    }

    _sortedInsert(node) {
        if (!this.minHead) {
            this.minHead = node;
            this.maxTail = node;
            return;
        }
        let curr = this.minHead;
        while (curr.nextMax && curr.value < node.value) {
            curr = curr.nextMax;
        }
        if (curr.value <= node.value) {
            node.nextMax = curr.nextMax;
            curr.nextMax = node;
            node.prevMin = curr;
            if (!node.nextMax) {
                this.maxTail = node;
            } 
        } else {
            node.prevMin = curr.prevMin;
            curr.prevMin = node;
            node.nextMax = curr;
            if (!node.prevMin) {
                this.minHead = node;
            } 
        }
    }

    _sortedDelete(value) {
        if (!this.minHead) { return; }
        let curr = this.minHead;
        while (curr.nextMax && curr.value !== value) {
            curr = curr.nextMax;
        }

        if (curr.value === value) {
            if (!this.minHead.prevMin && !this.minHead.nextMax) {
                this.minHead = null;
                this.maxTail = null;
            } else if (value === this.minHead.value) {
                this.minHead = this.minHead.nextMax;
                this.minHead.prevMin = null;
            } else if (value === this.maxTail.value) {
                this.maxTail = this.maxTail.prevMin;
                this.maxTail.nextMax = null;
            } else {
                curr.prevMin.nextMax = curr.nextMax;
                curr.nextMax.prevMin = curr.prevMin;
            }
        }
        return;
    }

    print() {
        if (this.isEmpty()) {
            console.log(`List is empty.`);
        } else {
            let curr = this.head;
            while (curr) {
                console.log(curr.value);
                curr = curr.next;
            }
        }
    }

    printSorted() {
        if (this.isEmpty()) {
            console.log(`List is empty.`);
        } else {
            let curr = this.minHead;
            while (curr) {
                console.log(curr.value);
                curr = curr.nextMax;
            }
        }
    }
}