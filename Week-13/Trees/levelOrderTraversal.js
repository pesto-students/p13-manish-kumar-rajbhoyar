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

    levelOrderTraversal(root) {
        let q = [root], ans = [];
        while (q[0]) {
            let qlen = q.length;
            for (let i = 0; i < qlen; i++) {
                let curr = q.shift();
                ans.push(curr.value);
                if (curr.left) q.push(curr.left);
                if (curr.right) q.push(curr.right);
            }
        }
        return ans;
    }
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const tree = new BinaryTree();
const treeRoot = tree.createTree(array,0);

const result = tree.levelOrderTraversal(treeRoot);
console.log(result);
