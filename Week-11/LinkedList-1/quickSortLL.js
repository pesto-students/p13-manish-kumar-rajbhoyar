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

    partition(start, end) {
        // pivot as start element
        let pivot = start.data;
        let p = start;
        let q = start.next;

        while(q != end) {
            // if the current node data is less than pivot then swap it with next element of p
            if(q.data < pivot) {
                p = p.next;
                this.swap(p, q);
            }
            q = q.next;
        }
        // swap the pivot element with p so that pivot is placed at its place.
        this.swap(p, start);
        return p;
    }

    quickSortHelper(start, end) {
        // find partition and apply quick sort on both halves
        if(start != end) {
            let partition = this.partition(start, end);
            this.quickSortHelper(start, partition);
            this.quickSortHelper(partition.next, end);
        }
    }

    quickSortLL(head) {
        // pass start pointer as head and end pointer as null
        this.quickSortHelper(head, null);
        return head;
    }
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const list = new LinkedList();
const rootNode = list.createList(array);
const result = list.quickSortLL(rootNode);
console.log(list.print(result));