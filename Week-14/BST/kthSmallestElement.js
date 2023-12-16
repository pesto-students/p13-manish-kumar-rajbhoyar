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

    kthSmallest(root, k) {
        let n = 0;
        let res;
        const inorder = (root) => {
            if (!root) return;
            inorder(root.left);
            if (n++ < k) res = root.value;
            inorder(root.right);
        };
        inorder(root);
        return res;
    }
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const inputAray = array.slice(1,array.length-1);
const k = array[array.length-1];
const tree = new BinaryTree();
const treeRoot = tree.createTree(inputAray,0);

const result = tree.kthSmallest(treeRoot, k);
console.log(result);
