/**
 * Using Divide and Conquer alogorithm
 * Faster than merge sort because it is in-place algorithm (Doesn't copy the given array into auxillary arrays, it just takes up recursion callstack)
 * Time complexity - O(nlog n)
 * @param arr
 */
export function quickSortAlg(arr: number[]) {
    return quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr: number[], low: number, high: number): number[] {
    if (low < high) {
        const pi = parition(arr, low, high);

        quickSort(arr, low, pi - 1); // Before pivot
        quickSort(arr, pi + 1, high); // After pivot
    }

    return arr;
}

function parition(arr: number[], low: number, high: number) {
    // Element to be placed at the right position
    const pivot = arr[high];

    // Initialize index of the smallest element
    let i = low - 1;

    // Loop over low to high and swap elements to bring the pivot to right position
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;

            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, high);

    return i + 1; // Right index of the pivot
}

function swap(arr: number[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
