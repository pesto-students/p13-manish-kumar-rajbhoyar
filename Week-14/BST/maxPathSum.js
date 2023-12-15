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
        this.maxSum = Number.NEGATIVE_INFINITY;
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

    maxPathSum(node) {
        var max = Number.NEGATIVE_INFINITY;
        function getMaxSum(node) {
            if (!node) return 0;
            var leftSum = getMaxSum(node.left);
            var rightSum = getMaxSum(node.right);
            max = Math.max(max, node.value + leftSum + rightSum);
            // chooses either left or right path
            return Math.max(0, node.value + leftSum, node.value + rightSum);
        }
        getMaxSum(node);
        return max;
    }
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const tree = new BinaryTree();
const treeRoot = tree.createTree(array,0);

const result = tree.maxPathSum(treeRoot);
console.log(result);
