class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const validTree1 = new BinaryNode(10);
validTree1.left = new BinaryNode(5);
validTree1.right = new BinaryNode(15);
validTree1.left.left = new BinaryNode(2);
validTree1.left.right = new BinaryNode(7);
validTree1.left.right.left = new BinaryNode(6);
validTree1.left.right.right = new BinaryNode(9);
validTree1.right.left = new BinaryNode(12);
validTree1.right.right = new BinaryNode(20);

const validTree2 = new BinaryNode(15);
validTree2.left = new BinaryNode(10);
validTree2.right = new BinaryNode(20);
validTree2.left.left = new BinaryNode(4);
validTree2.left.right = new BinaryNode(12);
validTree2.left.right.left = new BinaryNode(11);
validTree2.left.right.right = new BinaryNode(14);
validTree2.right.left = new BinaryNode(16);
validTree2.right.right = new BinaryNode(25);

// inOrderTraversal to get sorted array for both BST's
fromBstToArr = (tree, arr) => {
    if (!tree) return;
    fromBstToArr(tree.left, arr);
    arr.push(tree.value);
    fromBstToArr(tree.right, arr);
}

// merge into one sorted array
mergeTwoSortedArrays = (array1, array2) => {
    const arr = [];
    let i1 = 0, i2 = 0;
    while (i1 < array1.length || i2 < array2.length) {
        const e1 = array1[i1], e2 = array2[i2];
        if (e1 < e2) {
            arr.push(e1);
            i1++;
        } else {
            arr.push(e2);
            i2++;
        }
    }
    return arr;
}

// create BST from sorted array
sortedArrToBst = (arr, low, high) => {
    if (low > high) return null;
    let mid = Math.ceil((low + high) / 2);
    while (mid + 1 <= high && arr[mid + 1] === arr[mid]) mid++;
    const root = new BinaryNode(arr[mid]);
    root.left = sortedArrToBst(arr, low, mid - 1);
    root.right = sortedArrToBst(arr, mid + 1, high);
    return root;
}


mergeBST = (tree1, tree2) => {
    if (!tree1 && !tree2) return 'at least one valid tree must be inputted';
    const tree1Arr = [], tree2Arr = [];
    fromBstToArr(tree1,tree1Arr);
    fromBstToArr(tree2,tree2Arr);
    if (!tree1Arr.length || !tree2Arr.length) return tree1Arr.length ? tree1 : tree2;
    const sortedArr = mergeTwoSortedArrays(tree1Arr,tree2Arr);
    return sortedArrToBst(sortedArr, 0, sortedArr.length - 1);
}

console.log(mergeBST(validTree1, validTree2));

/*
class TreeNode {
    constructor({ value, left, right }) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
// Creating test data
const nodeTwo = new TreeNode({ value: 2 });
const nodeFour = new TreeNode({ value: 4 });
const nodeThree = new TreeNode({ left: nodeTwo, right: nodeFour, value: 3 });
const nodeSix = new TreeNode({ value: 6 });
const treeOne = new TreeNode({ left: nodeThree, right: nodeSix, value: 5 });
const nodeOne = new TreeNode({ value: 1 });
const treeTwo = new TreeNode({ value: 7, left: nodeOne });

console.log('treeOne', treeOne);
class LinkedListNode {
    constructor({ value, next }) {
      this.value = value;
      this.next = next;
    }
}
  
function bstToLinkedList(tree) {
    // if no tree passed in, return;
    if (!tree) return;
    // Create linked list head
    let linkedList = null;
    // Create stack
    const stack = [];
    // Create pointer for current node
    let currentLinkedListNode = null;
    // Start at root node;
    let currentNode = tree;
    // If there are no nodes left, we're done.
    while (currentNode || stack.length) {
        if (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        } else {
            // There are no left nodes.
            // Get the last node on top of tack
            currentNode = stack.pop();
            // create Linked List Node from current value
            const nextNode = new LinkedListNode({
                value: currentNode.value,
                next: null,
            });
            // If there is no linked list, create one, and set it as the current linked list node
            if (!linkedList) {
                linkedList = nextNode;
                currentLinkedListNode = nextNode;
            } else {
                // Create attach next node to current linked list node
                currentLinkedListNode.next = nextNode;
                // set current linked list node to next node;
                currentLinkedListNode = currentLinkedListNode.next;
            }
        }
    }
    return linkedList;
}

console.log('linkedList', bstToLinkedList(treeOne));
*/