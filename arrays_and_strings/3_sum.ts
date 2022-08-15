export function findZeroSum(arr: number[]): string[] {
    // Sort them in ascending order to use two-pointer technique to solve this problem
    arr = arr.sort((a, b) => a - b);
    
    let result: Set<string> = new Set();

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];

        let left = i + 1;
        let right = arr.length - 1;

        let sumNeeded = -currentElement;

        while (left < right) {
            let sum = arr[left] + arr[right];

            if (sum + currentElement === 0) {
                result.add(currentElement + "," + arr[left] + "," + arr[right]);
                left++;
            } else if (sum > sumNeeded) {
                right--;
            } else {
                left++;
            }
        }
    }

    return Array.from(result);
}
