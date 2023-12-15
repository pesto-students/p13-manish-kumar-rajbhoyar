class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Create a linked list using array
    createList(arr) {
        var root = null; 
        for (let i = 0; i < arr.length; i++) 
            root = this.append(arr[i]); 
        return root; 
    }

    // Method to append a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this.head;
    }

    // Method to print the linked list
    print(head) {
        let current = head;
        const values = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        return values;
    }

    // Remove duplicates
    removeDuplicates(head) {
        let set = new Set();
        let currentNode = head;
        let prevNode = null;

        while(currentNode) {
            // if the data is present in set, we skip the current node by setting previous node next to current node next
            if(set.has(currentNode.data)) {
                prevNode.next = currentNode.next
            } else {
                // else we add the node value to set and set prevnode to current node
                set.add(currentNode.data);
                prevNode = currentNode;
            }
            currentNode = currentNode.next;
        }
        return head;
    }
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const list = new LinkedList();
const rootNode = list.createList(array);
const result = list.removeDuplicates(rootNode);
console.log(list.print(result));