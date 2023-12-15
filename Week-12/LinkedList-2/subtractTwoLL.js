class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.borrow = false;
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

    // Get length of the linked list
    getLength(node) {
        var size = 0;
        while (node != null) {
            node = node.next;
            size++;
        }
        return size;
    }

    // To add zeroes in the from of the linked list for given difference
    paddZeros(sNode , diff) {
        if (sNode == null)
            return null;
 
        var zHead = new Node(0);
        diff--;
        var temp = zHead;
        while ((diff--) != 0) {
            temp.next = new Node(0);
            temp = temp.next;
        }
        temp.next = sNode;
        return zHead;
    }

    subtractLinkedListHelper(l1,  l2) {
        if (l1 == null && l2 == null && this.borrow == false)
            return null;
 
       var previous = this.subtractLinkedListHelper((l1 != null) ? 
       l1.next : null, (l2 != null) ? l2.next : null);
 
        var d1 = l1.data;
        var d2 = l2.data;
        var sub = 0;
 
        /*
         if you have given the value to next
         digit then reduce the d1 by 1
         */
        if (this.borrow) {
            d1--;
            this.borrow = false;
        }
 
        /*
         If d1 < d2, then borrow the number from 
         previous digit. Add 10 to d1 and set
         borrow = true;
         */
        if (d1 < d2) {
            this.borrow = true;
            d1 = d1 + 10;
        }
 
        /* subtract the digits */
        sub = d1 - d2;
 
        /* Create a Node with sub value */
        var current = new Node(sub);
 
        /* Set the Next pointer as Previous */
        current.next = previous;
 
        return current;
    }

    subtractLinkedList(l1,  l2) {
        // Base Case.
        if (l1 == null && l2 == null)
            return null;
 
        // In either of the case, get the lengths
        // of both Linked list.
        var len1 = this.getLength(l1);
        var len2 = this.getLength(l2);
 
        var lNode = null, sNode = null;
        
        var temp1 = l1;
        var temp2 = l2;
        
        // If lengths differ, calculate the smaller
        // Node and padd zeros for smaller Node and
        // ensure both larger Node and smaller Node
        // has equal length.
        if (len1 != len2) {
            lNode = len1 > len2 ? l1 : l2;
            sNode = len1 > len2 ? l2 : l1;
            sNode = this.paddZeros(sNode, Math.abs(len1 - len2));
        }
 
        else {
            // If both list lengths are equal, then
            // calculate the larger and smaller list.
            // If 5-6-7 & 5-6-8 are linked list, then
            // walk through linked list at last Node
            // as 7 < 8, larger Node is 5-6-8 and
            // smaller Node is 5-6-7.
            while (l1 != null && l2 != null) {
                if (l1.data != l2.data) {
                    lNode = l1.data > l2.data ? temp1 : temp2;
                    sNode = l1.data > l2.data ? temp2 : temp1;
                    break;
                }
                l1 = l1.next;
                l2 = l2.next;
            }
        }
 
        // After calculating larger and smaller Node,
        // call subtractLinkedListHelper which returns
        // the subtracted linked list.
        this.borrow = false;
        return this.subtractLinkedListHelper(lNode, sNode);
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
const result = list1.subtractLinkedList(listNode1, listNode2);
console.log(list1.print(result));