class Node 
{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList 
{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() { return this.size === 0; }

    getSize() { return this.size; }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeFromFront() {
        if (this.isEmpty()) { return null; } 
        const value = this.head.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
        return value;
    }

    removeFromEnd() {
        if (this.isEmpty()) { return null; }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }

    removeValue(value) {
        if (this.isEmpty()) { return null; }
        if (value === this.head.value) {
            return this.removeFromFront();
        } else if (value === this.tail.value) {
            return this.removeFromEnd();
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                let item = prev.next;
                prev.next = item.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value)
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; ++i) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
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
            prev.next = item.next;
        }
        this.size--;
        return item.value;
    }

    find(value) {
        if (this.isEmpty()) { return -1; } 
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) { return i; }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log(`The list is empty.`);
        } else {
            let curr = this.head;
            while (curr) {
                console.log(curr.value);
                curr = curr.next;
            }
        }
    }
}