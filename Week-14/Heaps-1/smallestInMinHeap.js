function smallestMinHeap(heap) {
    if (heap.length === 0) {
        return []; // The heap is empty
    }

    // Replace the root with the last element
    const lastIndex = heap.length - 1;
    [heap[0], heap[lastIndex]] = [heap[lastIndex], heap[0]];

    // Remove the last element (former root)
    const smallestElement = heap.pop();

    // Heapify down to maintain the min heap property
    heapifyDown(heap, 0);

    return smallestElement;
}

function heapifyDown(heap, index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    // Find the index of the smallest value among the current node and its children
    if (leftChildIndex < heap.length && heap[leftChildIndex] < heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
    }
    if (rightChildIndex < heap.length && heap[rightChildIndex] < heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
    }

    // If the smallest value is not the current node, swap them and recursively heapify down
    if (smallestIndex !== index) {
        [heap[index], heap[smallestIndex]] = [heap[smallestIndex], heap[index]];
        heapifyDown(heap, smallestIndex);
    }
}

const input = prompt('Enter input: ');
const array = input.split(',');
const result = smallestMinHeap(array);
console.log(result);