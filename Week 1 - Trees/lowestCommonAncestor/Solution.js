class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

const LCATree = new TreeNode(1);
LCATree.children.push(new TreeNode(2), new TreeNode(3));
LCATree.children[0].children.push(new TreeNode(4), new TreeNode(5));
LCATree.children[1].children.push(new TreeNode(6), new TreeNode(7));

findNode = (tree, n) => {
    if (!tree) return;
    if (tree.value === n) return [n];
    const paths = tree.children;
    if (paths.length) {
        for (let i = 0; i < paths.length; i++) {
            const path = findNode(paths[i], n);
            if (path) {
                path.unshift(tree.value);
                return path;
            }
        }
    }
    return null;
}

findCommonality = (arr1, arr2) => {
    let i = 0;
    while (arr1[i] && arr2[i] && arr1[i] === arr2[i]) i++;
    return arr1[i - 1];
}

findLCA = (tree, n1, n2) => {
    // find nodes and return array from root to value
    const n1Path = findNode(tree, n1);
    const n2Path = findNode(tree, n2);
    // step through array until you reach different numbers or the end of one array
    return findCommonality(n1Path, n2Path);
}

console.log(findLCA(LCATree, 6, 7));
