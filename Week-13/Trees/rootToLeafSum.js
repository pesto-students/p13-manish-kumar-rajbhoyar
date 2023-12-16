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

    hasPathSum(root, targetSum) {
        if(!root) return false;

        // Subtract current node from target sum
        targetSum -= root.value;
        // if leaf node and target is 0 then true else false
        if(!root.left && !root.right) {
            return targetSum==0?true:false;
        }

        // if any of the left or right subtree returns true then true else false
        return this.hasPathSum(root.left, targetSum) || this.hasPathSum(root.right, targetSum);
    }
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const tree = new BinaryTree();
const targetSum = array[array.length-1];
const inputArray = array.slice(0, array.length-1);
const treeRoot = tree.createTree(inputArray,0);
const result = tree.hasPathSum(treeRoot, targetSum);
console.log(result);
