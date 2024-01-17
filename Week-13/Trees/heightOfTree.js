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

    height(node) {
        if (!node) {
            return 0; // Height of an empty tree is 0
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const tree = new BinaryTree();
const treeRoot = tree.createTree(array,0);

const result = tree.height(treeRoot);
console.log(result);
