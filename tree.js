class Tree {
    constructor(value) {
        this.root = new Node(value);
    }
}

class Node {
    children = [];

    constructor(value) {
        this.value = value;
    }

    push(value) {
        this.children.push(new Node(value));
    }
}


const tree = new Tree(10);
tree.root.push(5);
tree.root.push(15);
tree.root.children[0].push(2);
tree.root.children[0].push(8);
tree.root.children[1].push(12);
tree.root.children[1].push(18);
