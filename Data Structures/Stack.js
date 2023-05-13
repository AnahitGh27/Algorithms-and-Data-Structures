class Stack {
    #items;
    constructor() {
        this.#items = [];
    }

    push(elem) {
        this.#items.push(elem);
    }

    pop() {
        return this.#items.pop();
    }

    top() {
        if (this.#items.length === 0) { return undefined; }
        return this.#items[this.#items.length - 1];
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    size() {
        return this.#items.length;
    }
}