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

    mergeTrees(root1, root2) {
        if (!root1 || !root2) return root1 || root2
    
        let node = new TreeNode(root1.value + root2.value)
        
        node.left = this.mergeTrees(root1.left, root2.left)
        node.right = this.mergeTrees(root1.right, root2.right)
    
        return node
    };
}

// const input1 = prompt('Enter input 1: ')
// const array1 = input1.split(' ');
const tree1 = new BinaryTree();
// const input2 = prompt('Enter input 2: ')
// const array2 = input2.split(' ');
const tree2 = new BinaryTree();
const treeRoot1 = tree1.createTree([1,1,1],0);
const treeRoot2 = tree2.createTree([2,2,2],0);
const result = tree1.mergeTrees(treeRoot1, treeRoot2);
console.log(result);
