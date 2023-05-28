class BinaryNode
{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    search(root, value) {
        if (!root) { return false; }
        else if (root.value === value) { return true; }
        else if (root.value > value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }

    preorderTraverse(root, visit) {
        if (root) {
            visit(root.value);
            this.preorderTraverse(root.left);
            this.preorderTraverse(root.right);
        }
    }

    inorderTraverse(root, visit) {
        if (root) {
            this.inorderTraverse(root.left);
            visit(root.value);
            this.inorderTraverse(root.right);
        }
    }

    postorderTraverse(root, visit) {
        if (root) {
            this.postorderTraverse(root.left, visit);
            this.postorderTraverse(root.right, visit);
            visit(root.value);
        }
    }

    levelOrder() {
        if (!this.root) { return; }
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    _insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this._insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this._insertNode(root.right, newNode);
            }
        }
    }

    insert(value) {
        const newNode = new BinaryNode(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
        return true;
    }

    min(root) {
        if (!root.left) { return root.value; }
        else { return this.min(root.left); }
    }

    max(root) {
        if (!root.right) { return root.value; }
        else { return this.max(root.right); }
    }

    _deleteNode(root, value) {
        if (!root) { return root; }
        if (value < root.value) {
            root.left = this._deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this._deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this._deleteNode(root.right, root.value)
        }
        return root;
    }

    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    traverseIterative(visit) {
        const nodeStack = [];
        let curr = this.root;
        let done = false;
        while (!done) {
            if (curr) {
                nodeStack.push(curr);
                curr = curr.left;
            } else {
                if (nodeStack.length !== 0) {
                    curr = nodeStack[nodeStack.length - 1];
                    visit(curr.value);
                    nodeStack.pop();
                        curr = curr.right;
                    
                } else {
                    done = true;
                }
            }
        }
    }
}