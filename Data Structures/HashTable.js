class HashTable {
    #table;
    #capacity;
    constructor(capacity) {
        this.#table = new Array(capacity);
        this.#capacity = capacity;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; ++i) {
            hash += key.charCodeAt(i);
        }
        return hash % this.#capacity;
    }

    set(key, value) {
        const index = this._hash(key);
        const bucket = this.#table[index];
        if(!bucket) {
            this.#table[index] = [[key, value]];
        } else {
            const sameKeyItem = bucket.find((el) => el[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.#table[index];
        if (bucket) {
            const keyItem = bucket.find((el) => el[0] === key);
            if (keyItem) {
                return keyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.#table[index];
        if (bucket) {
            const keyItem = bucket.find((el) => el[0] === key);
            if (keyItem) {
                bucket.splice(bucket.indexOf(keyItem), 1);
                return true;
            }
        }
        return false;
    }
}
