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
    reverseList(head, stop) {
        var prev = stop;
        while (head !== stop) {
            var next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }

    // get group end for k nodes
    getGroupEnd(head, k) {
        while (head && k > 1) {
            var prev = head // if less than k nodes left then head will be null and k will be still greater than 1, in that case return previous(last) node
            head = head.next;
            k--;
        }
        return head?head:prev;
    }

    // Reverse every k nodes
    reverseKNodes(head, k) {
        // created a dummy node and pointed its next to head
        var dummy = new Node(0);
        dummy.next = head;

        // Created a previous group tail variable to be used to link every k nodes
        var prevGroupTail = dummy;

        while (head) {
            // group start set to current head for each iteration
            var groupStart = head;
            // group end set to a node that is k nodes away
            var groupEnd = this.getGroupEnd(head, k);

            // less than k nodes left hence no need to reverse
            if (!groupEnd)
                break;

            // prev group tail next set to head of reversed list
            prevGroupTail.next = this.reverseList(groupStart, groupEnd.next);
            // prev group tail set to reversed list tail i.e., groupstart
            prevGroupTail = groupStart;
            // head set to next group start
            head = prevGroupTail.next;
        }
        var newHead = dummy.next;
        return newHead;
    }
}


const input = prompt('Enter input: ')
const array = input.split(' ');
const k = array[array.length-1];
const inputArray = array.slice(0, array.length-1);
const list = new LinkedList();
const rootNode = list.createList(inputArray);
const result = list.reverseKNodes(rootNode, k);
console.log(list.print(result));