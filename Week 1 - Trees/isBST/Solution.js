class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const validTree = new BinaryNode(10);
validTree.left = new BinaryNode(5);
validTree.right = new BinaryNode(15);
validTree.left.left = new BinaryNode(2);
validTree.left.right = new BinaryNode(7);
validTree.left.right.left = new BinaryNode(6);
validTree.left.right.right = new BinaryNode(12); // out of bounds here
validTree.right.left = new BinaryNode(12);
validTree.right.right = new BinaryNode(20);

checkIfBST = (tree, prevVal, left, right) => {
    if (!tree) return true;
    const returnLeft = checkIfBST(
        tree.left, 
        tree.value, 
        left ? Math.min(tree.value, left) : tree.value, 
        right);
    const returnRight = checkIfBST(
        tree.right, 
        tree.value, 
        left, 
        right ? Math.max(tree.value, right) : tree.value);
    if (left && right) {
        if (tree.value > left || tree.value <= right) return false;
    } else {
        if (left && tree.value > prevVal) return false;
        if (right && tree.value <= prevVal) return false;
    }
    if (returnLeft && returnRight) return true;
    else return false;
}

console.log(checkIfBST(validTree, validTree.value, null, null));