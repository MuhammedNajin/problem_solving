// Last updated: 6/25/2025, 3:34:11 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxHeap = new MaxHeap(nums);
    for (let i = 0; i < k - 1; i++) {
        maxHeap.pop();
    }
    return maxHeap.top();
}

class MaxHeap {
    constructor(nums) {
        this.heap = nums;
        this.buildHeap();
    }
    
    buildHeap() {
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.shiftDown(i);
        }
    }
    
    shiftDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let maxIndex = index;
        
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
            maxIndex = leftChildIndex;
        }
        
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
            maxIndex = rightChildIndex;
        }
        
        if (maxIndex !== index) {
            [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
            this.shiftDown(maxIndex);
        }
    }
    
    pop() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        const maxElement = this.heap.pop();
        this.shiftDown(0);
        return maxElement;
    }
    
    top() {
        return this.heap[0];
    }
}