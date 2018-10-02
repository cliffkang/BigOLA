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