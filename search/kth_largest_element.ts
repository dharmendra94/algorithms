export function findKthLargest(nums: number[], k: number): number {
    // We can also do this by using QuickSelect methodology pretty much we will be using QuickSort algorithm
    const low = 0;
    const high = nums.length - 1;
    const kSmallest = nums.length - k;
    
    return quickSelect(nums, low, high, kSmallest);
};

function quickSelect(nums: number[], low: number, high: number, kSmallest: number): number {
    // If the list only contains one element then return that element
    if (low === high) {
        return nums[low];
    }
    
    // Get the pivot position
    const pivot = partition(nums, low, high);
    
    // if pivot is the kth largest element return the pivot element
    if (kSmallest === pivot) {
      return nums[pivot];  
    } 
    
    // if pivot position is greater than k work on right part of the array
    if (kSmallest > pivot) {
        return quickSelect(nums, pivot + 1, high, kSmallest);
    }
    else {
      // If pivot position is less than k then work on the left part of the array
      return quickSelect(nums, low, pivot - 1, kSmallest);  
    } 
}


function partition(nums: number[], low: number, high: number) {
    // We need to pick a pivot element
    const pivot = nums[high];
    
    // Smallest element index with the pivot at the right position so far
    let i = low - 1;
    
    // Then we need to loop over the nums array and put the pivot in a position so that left of the pivot is always smaller and the right of the pivot is greater than pivot
    for (let j = low; j <= high; j++) {
        if (nums[j] <= pivot) {
            i++;
            swap(nums, i, j);
        }
    }
    
    swap(nums, nums[i], nums[high]);
    
    return i;

}


function swap (nums: number[], i: number, j: number) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}