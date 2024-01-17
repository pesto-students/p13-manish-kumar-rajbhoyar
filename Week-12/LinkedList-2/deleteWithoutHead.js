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

    // Delete without head node
    deleteWithoutHead(node) {
        if(!node) return null;

        node.data = node.next.data;
        node.next = node.next.next;

    }
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const k = array[array.length-1];
const inputArray = array.slice(0, array.length-1);
const list = new LinkedList();
const head = list.createList(inputArray);
let temp = head;
while(temp && temp.data != k) temp = temp.next;
list.deleteWithoutHead(temp);
console.log(list.print(head));