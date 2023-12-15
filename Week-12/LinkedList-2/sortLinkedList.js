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
    sortLL(head) {
        const count = [0, 0, 0];
 
        // Count the number of 0's, 1's, and 2's in the linked list
        let current = head;
        while (current !== null) {
            // increment the counter as per the occurence and store in the array
            count[current.data] += 1;
            current = current.next;
        }

        // Overwrite the linked list with the sorted elements
        current = head;
        let i = 0;
        while (current !== null) {
            // if the count of 0,1,2 is 0 then skip the element and increment i else overwrite the node data with i and decrement the count
            if (count[i] === 0) {
                i += 1;
            } else {
            current.data = i;
            count[i] -= 1;
            current = current.next;
            }
        }
        return this.head;
    }
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const list = new LinkedList();
const listNode = list.createList(array);
const result = list.sortLL(listNode);
console.log(list.print(result));