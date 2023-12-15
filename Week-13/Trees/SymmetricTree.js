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

    isSymmetric (root) {
        return root==null || this.isSymmetricHelper(root.left, root.right);
    };
    
    isSymmetricHelper (leftNode, rightNode) {
        if(leftNode == null || rightNode == null) return leftNode == rightNode;
        if(leftNode.value != rightNode.value) return false;
    
        return this.isSymmetricHelper(leftNode.left, rightNode.right) && this.isSymmetricHelper(leftNode.right, rightNode.left);
    };
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const tree = new BinaryTree();
const treeRoot = tree.createTree(array,0);

const result = tree.isSymmetric(treeRoot);
result?console.log('The tree is symmetric'):console.log('The tree is asymmetric');