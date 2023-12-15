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

    isSubtree(treeRoot1, treeRoot2) {

        // if subtree is null
        if(!treeRoot2) return true;

        // if main tree is null
        if(!treeRoot1) return false;

        // Check the tree with root as current node
        if(this.areIdentical(treeRoot1, treeRoot2)) return true;

        // If the trees with current nodes are not identical then go to left and right subtrees
        return this.isSubtree(treeRoot1.left, treeRoot2) || this.isSubtree(treeRoot1.right, treeRoot2);
    }

    areIdentical(treeRoot1, treeRoot2) {
        // if any one is not present then not identical, if both not present then identical
        if (treeRoot1 == null || treeRoot2 == null)
            return treeRoot1 == treeRoot2;
  
        /* Check if the data of both roots
           is same and data of left and right
           subtrees are also same */
        return (treeRoot1.value == treeRoot2.value
                && this.areIdentical(treeRoot1.left, treeRoot2.left)
                && this.areIdentical(treeRoot1.right, treeRoot2.right));
    }
}

const input1 = prompt('Enter tree 1: ')
const array1 = input1.split(' ');
const input2 = prompt('Enter tree 2: ')
const array2 = input2.split(' ');
const tree = new BinaryTree();
const treeRoot1 = tree.createTree(array1,0);
const treeRoot2 = tree.createTree(array2,0);

const result = tree.isSubtree(treeRoot1, treeRoot2);
result?console.log('The second tree is a subtree of the first tree.'):console.log('The second tree is not a subtree of the first tree.');