class Queue {
    #items;
    #head;
    #tail;
    constructor() {
        this.#items = {};
        this.#head = 0;
        this.#tail = 0;
    }

    enqueue(elem) {
        this.#items[this.#tail++] = elem;
    }

    dequeue() {
        if (this.isEmpty()) { return undefined; }
        const item = this.#items[this.#head];
        delete this.#items[this.#head];
        this.#head++;
        return item;
    }

    isEmpty() { return this.#tail - this.#head === 0; }

    size() { return this.#tail - this.#head; }

    getFront() {
        if (this.isEmpty()) { return undefined; }
        return this.#items[this.#head];
    }

    getRear() {
        if (this.empty()) { return undefined; }
        return this.#items[this.#tail - 1];
    }
}


