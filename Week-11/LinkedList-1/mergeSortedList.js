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

    // Merge two sorted lists
    mergeTwoLists(list1, list2) {
        // if only one list is present, return it
        if (!list1) return list2;
        else if (!list2) return list1;

        // if the value of list1 pointer is less than that of list2 pointer, then call the recursion on list1 pointer and return that node so the the next of this pointer will be whatever is returned from the recursive call
        else if (list1.data <= list2.data) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }
    };
}


const input1 = prompt('Enter List 1: ');
const input2 = prompt('Enter List 2: ');
const array1 = input1.split(' ');
const array2 = input2.split(' ');
const list1 = new LinkedList();
const list2 = new LinkedList();
const rootNode1 = list1.createList(array1);
const rootNode2 = list2.createList(array2);
const result = list1.mergeTwoLists(rootNode1, rootNode2);
console.log(list1.print(result));