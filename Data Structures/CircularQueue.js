class CircularQueue 
{
    #items;
    #capacity;
    #currentLength;
    #front;
    #rear;
    constructor(capacity) {
        this.#items = new Array(capacity);
        this.#capacity = capacity;
        this.#currentLength = 0;
        this.#front = this.#rear = -1;
    }

    isFull() { return this.#currentLength === this.#capacity; }

    isEmpty() { return this.#currentLength === 0; }

    getSize() { return this.#currentLength; }

    enqueue(elem) {
        if (!this.isFull()) {
            this.#rear = (this.#rear + 1) % this.#capacity;
            this.#items[this.#rear] = elem;
            this.#currentLength++;
            if (this.#front === -1) {
                this.#front = this.#rear;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) { return null; }
        const item = this.#items[this.#front];
        this.#items[this.#front] = null;
        this.#front = (this.#front + 1) % this.#capacity;
        this.#currentLength--;
        if (this.isEmpty()) {
            this.#front = this.#rear = -1;
        }
        return item;
    }
    
    getFront() {
        if (this.isEmpty()) { return null; }
        return this.#items[this.#front];
    }

    getRear() {
        if (this.isEmpty()) { return null; }
        return this.#items[this.#rear];
    }

    print() {
        if (this.isEmpty()) {
            console.log(`The queue is empty.`);
        } else {
            let i = this.#front;
            for (; i !== this.#rear; i = ((i + 1) % this.#capacity)) {
                console.log(this.#items[i]);
            }
            console.log(this.#items[i]);
        }
    }
}