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

    serializeTree(root, str) {
        if(!root) return '';
        if(root.left){
            str = this.serializeTree(root.left, str);
        }
        if(root.right){
            str = this.serializeTree(root.right, str);
        }
        str += root.value;
        return str;
    }
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const tree = new BinaryTree();
const treeRoot = tree.createTree(array,0);
const str = '';
const result = tree.serializeTree(treeRoot, str);
console.log(result);
