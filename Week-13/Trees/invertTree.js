class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    createTree(arr, i) {
        let root = null;
        if (i < arr.length) {
            root = new TreeNode(arr[i]);
            root.left = this.createTree(arr, 2 * i + 1);
            root.right = this.createTree(arr, 2 * i + 2);
        }
        return root;
    }

    invertTree(root) {
        // base case
        if(!root || !root.left && !root.right) return root;

        // invert left subtree
        this.invertTree(root.left);
        // invert right subtree
        this.invertTree(root.right);
        // swap node values
        const curr = root.left;
        root.left = root.right;
        root.right = curr;
        return root;
    }
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const tree = new BinaryTree();
const treeRoot = tree.createTree(array,0);

const resultRootNode = tree.invertTree(treeRoot);

// Level order traversal to store the elements level wise
let q = [resultRootNode], ans = [];
while (q[0]) {
    let qlen = q.length, row = [];
    for (let i = 0; i < qlen; i++) {
        let curr = q.shift();
        row.push(curr.value);
        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);
    }
    ans.push(row);
}
for(let i = 1; i <= ans.length; i++){
    console.log('Level ', i, ': ', ans[i-1].toString());
}
