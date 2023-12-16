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

    areIdentical(node1, node2) {
        if(!node1 || !node2) return node1 == node2;

        return node1.value == node2.value && this.areIdentical(node1.left, node2.left) && this.areIdentical(node1.right, node2.right);
    }
}

const input1 = prompt('Enter input 1: ')
const array1 = input1.split(' ');
const tree1 = new BinaryTree();
const treeRoot1 = tree1.createTree(array1,0);
const input2 = prompt('Enter input 1: ')
const array2 = input2.split(' ');
const tree2 = new BinaryTree();
const treeRoot2 = tree2.createTree(array2,0);

const result = tree1.areIdentical(treeRoot1, treeRoot2);
result?console.log('The two binary trees are identical'):console.log('The two binary trees are not identical');