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

    swap(a, b) {
        let temp = a.data;
        a.data = b.data;
        b.data = temp;
    }

    // Delete without head node
    rearrangeZigZag(head) {
        if(!head) return null;

        let current = head;
        let i = 0;
        while(current && current.next) {
            if(i%2 == 0) {
                // if even index then, next node should be smaller than the current node
                if(current.data > current.next.data) {
                    this.swap(current, current.next);
                }
            } else {
                // if not even index then, next node should be greater than current
                if(current.data < current.next.data) {
                    this.swap(current, current.next);
                }
            }
            i++;
            current = current.next;
        }
        return head;
    }
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const list = new LinkedList();
const listNode = list.createList(array);
const result = list.rearrangeZigZag(listNode);
console.log(list.print(result));