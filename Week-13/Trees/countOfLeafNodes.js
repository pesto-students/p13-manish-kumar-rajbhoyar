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
        if (i < arr.length && arr[i] != 'null') {
            root = new TreeNode(arr[i]);
            root.left = this.createTree(arr, 2 * i + 1);
            root.right = this.createTree(arr, 2 * i + 2);
        }
        return root;
    }

    countOfLeafNodes(root) {
        if(!root) return 0;
        if(!root.left && !root.right) {
            return 1;
        } else {
            return this.countOfLeafNodes(root.left) + this.countOfLeafNodes(root.right);
        }
    }
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const tree = new BinaryTree();
const treeRoot = tree.createTree(array,0);

const result = tree.countOfLeafNodes(treeRoot);
console.log(result);
