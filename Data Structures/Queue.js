class Queue {
    #items;
    #head;
    #tail;
    constructor() {
        this.#items = {};
        this.#head = 0;
        this.#tail = 0;
    }

    push(elem) {
        this.#items[this.#tail++] = elem;
    }

    pop() {
        if (this.empty()) { return undefined; }
        const item = this.#items[this.#head];
        delete this.#items[this.#head];
        this.#head++;
        return item;
    }

    empty() {
        return this.#tail - this.#head === 0;
    }

    size() {
        return this.#tail - this.#head;
    }

    front() {
        if (this.empty()) { return undefined; }
        return this.#items[this.#head];
    }

    back() {
        if (this.empty()) { return undefined; }
        return this.#items[this.#tail - 1];
    }
}


