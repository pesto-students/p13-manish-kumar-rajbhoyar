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

    // Reverse a linked list
    reverse(head) {
        let prev = null;
        let curr = head;

        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    findMiddle(head) {
        if(!head) return null;
        let slow = head;
        let fast = head;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    // Check if the linked list is palindrome
    isLinkedListPalindrome(head) {
        if(!head) return null;

        let firstHalf = this.head;
        let secondHalf = this.reverse(this.findMiddle(head));

        while (secondHalf) {
            if (firstHalf.data !== secondHalf.data) {
                return false;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }
        return true;


    }
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const list = new LinkedList();
const rootNode = list.createList(array);
const result = list.isLinkedListPalindrome(rootNode);
console.log(result);