class Node {
    #value;
    #next;
    #prev;
    constructor(value) {
        this.#value = value;
        this.#next = null;
        this.#prev = null;
    }

    getValue() { return this.#value; }

    setValue(value) { this.#value = value; }

    getNext() { return this.#next; }

    setNext(next) { this.#next = next; }

    getPrev() { return this.#prev; }

    setPrev(prev) { this.#prev = prev; }
}

class DoublyLikedList {
    #head;
    #tail;
    #size;
    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    getHead() { return this.#head; }

    setHead(head) { this.#head = head; }

    getTail() { return this.#tail; } 

    setTail(tail) { this.#tail = tail; }

    getSize() { return this.#size; }

    isEmpty() { return this.#size === 0; }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.#head = node;
            this.#tail = node;
        } else {
            node.setNext(this.#head);
            this.#head.setPrev(node);
            this.#head = node;
        }
        this.#size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.#head = node;
            this.#tail = node; 
        } else {
            node.setPrev(this.#tail);
            this.#tail.setNext(node);
            this.#tail = node;
        }
        this.#size++;
    }

    insert(index, value) {
        if (index < 0 || index > this.#size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.#size) {
            this.append(value);
        } else {
            const node = new Node(value);
            let prev = this.#head;
            for (let i = 0; i < index - 1; ++i) {
                prev = prev.getNext();
            }
            node.setPrev(prev);
            node.setNext(prev.getNext());
            prev.getNext().setPrev(node);
            prev.setNext(node);
            this.#size++;
        }
    }

    delete(index) {
        if (index < 0 || index >= this.#size) { 
            return null;
        }
        let item;
        if (index === 0) {
            return this.removeFromFront();
        } else if (index === this.#size - 1) {
            return this.removeFromEnd();
        } else {
            let prev = this.#head;
            for (let i = 0; i < index - 1; ++i) {
                prev = prev.getNext();
            }
            item = prev.getNext();
            item.getNext().setPrev(prev);
            prev.setNext(item.getNext());
        }
        this.#size--;
        return item.getValue();
    }

    removeValue(value) {
        if (!this.#head) { return null; }
        let curr = this.#head;
        while (curr.getNext() && curr.getValue() !== value) {
            curr = curr.getNext();
        }

        if (curr.getValue() === value) {
            if (this.#size === 1) {
                this.#head = null;
                this.#tail = null;
                this.#size--;
                return value;
            } else if (value === this.#head.getValue()) {
                this.#head = this.#head.getNext();
                this.#head.setPrev(null);
                this.#size--;
                return value;
            } else if (value === this.#tail.getValue()) {
                this.#tail = this.#tail.getPrev();
                this.#tail.setNext(null);
                this.#size--;
                return value;
            } else {
                curr.getPrev().setNext(curr.getNext());
                curr.getNext().setPrev(curr.getPret());
                this.#size--;
                return value;
            }
        }
        return null;
    }

    removeFromFront() {
        if (this.isEmpty()) { return null; }
        const value = this.#head.getValue();
        if (this.#size === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.setHead(this.#head.getNext());
            this.#head.setPrev(null);
        }
        this.#size--;
        return value;
    }

    removeFromEnd() {
        if (this.isEmpty()) { return null; }
        const value = this.#tail.getValue();
        if (this.#size === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.setTail(this.#tail.getPrev());
            this.#tail.setNext(null);
        }
        this.#size--;
        return value;
    }
    
    find(value) {
        if (this.isEmpty()) { return -1; }
        let i = 0;
        let curr = this.#head;
        while (curr) {
            if (curr.getValue() === value) { return i; }
            i++;
            curr = curr.getNext();
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log(`List is empty.`);
        } else {
            let curr = this.#head;
            while (curr) {
                console.log(curr.getValue());
                curr = curr.getNext();
            }
        }
    }

    printReverse() {
        if (this.isEmpty()) { 
            console.log(`List is empty.`);
        } else {
            let curr = this.#tail;
            while (curr) {
                console.log(curr.getValue());
                curr = curr.getPrev();
            }
        }
    }
}