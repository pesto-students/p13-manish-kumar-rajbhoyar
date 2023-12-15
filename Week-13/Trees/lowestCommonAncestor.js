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

    lowestCommonAncestor(root, node1, node2) {
        // if root is null, node1 or node2 return root as node can be descendant of itself
        if (!root || root.value == node1 || root.value == node2) return root;
        // search for node in left subtree and if found store it in resL
        var resL = this.lowestCommonAncestor(root.left, node1, node2);
        // search for node in right subtree and if found store it in resR
        var resR = this.lowestCommonAncestor(root.right, node1, node2);
        // if both nodes are in left subtree then return resL, else if both nodes are in right subtree then return resR, else if they are on either side then return root
        return (resL && resR) ? root : (resL || resR); // if 1 2 3 is a tree where 1 is root and 2 and 3 are child, resL will have 2, resR will have 3 and since both are present, root at that point will be 1 hence 1 is returned. Whereas if 1 2 3 is a left skewed tree then resL will have 2 and resR will be null, thus 2 will be returned.
    }
}

const input = prompt('Enter input: ')
const array = input.split(' ');
const numberOfNodes = array[0];
const nodeValuesArray = array.slice(1,array.length-2);
const node1 = array[array.length-2];
const node2 = array[array.length-1];
const tree = new BinaryTree();
const treeRoot = tree.createTree(nodeValuesArray,0);

const result = tree.lowestCommonAncestor(treeRoot, node1, node2);
console.log('The lowest common ancestor of nodes ', node1 ,' and ', node2, ' is ', result.value);
