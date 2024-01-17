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
    intersectionOfLL(head1, head2) {
        if(!head1 || !head2) return null;

        let a = head1;
        let b = head2;

        // if both lists have diffferent lengths then this while loop will end after second iteration of list.
        while(a != b) {
            // At the end of first iteration set the pointer to other list, its like calculating the difference in one go without calculating the length
            a = a == null? head2 : a.next;
            b = b == null? head1 : b.next;
        }
        return a;
    }
}

// How to create two linked lists wit a intersection point from given input

const input1 = prompt('Enter input 1: ')
const array1 = input1.split(' ');
const input2 = prompt('Enter input 1: ')
const array2 = input2.split(' ');
const list1 = new LinkedList();
const list2 = new LinkedList();
const listNode1 = list1.createList(array1);
const listNode2 = list2.createList(array2);
const result = list1.intersectionOfLL(listNode1, listNode2);
console.log(result);