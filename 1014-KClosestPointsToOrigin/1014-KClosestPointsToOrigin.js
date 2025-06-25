// Last updated: 6/25/2025, 3:32:51 PM
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const priority_queue = [];

    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i];
        const distance = findDistance(x, y);
        priority_queue.push([distance, x, y]);
    }

    for (let i = Math.floor(priority_queue.length / 2) - 1; i >= 0; i--) {
        heapify(priority_queue, i);
    }


    const res = [];
    while (k > 0) {
        const [_, x, y] = remove(priority_queue);
        res.push([x, y]);
        k--;
    }

    return res;

    function findDistance(x, y) {
        return x * x + y * y;
    }

    function remove(heap) {
        const n = heap.length - 1;
        [heap[0], heap[n]] = [heap[n], heap[0]];
        const val = heap.pop();
        heapify(heap, 0);
        return val;
    }

    function heapify(heap, i) {
        const length = heap.length;
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < length && heap[left][0] < heap[smallest][0]) {
            smallest = left;
        }
        if (right < length && heap[right][0] < heap[smallest][0]) {
            smallest = right;
        }

        if (smallest !== i) {
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            heapify(heap, smallest);
        }
    }
};
