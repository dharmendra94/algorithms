/**
 * Calculates the maximum sum from a sub array of the given size
 * @param arr numbers array
 * @param size size of the sub array
 * @returns sum of the sub array
 */
export function maxSumSubArray(arr: number[], size: number) {
    let currentRunningSum = 0, maxValue = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        currentRunningSum += arr[i];

        if (i >= size - 1) {
            maxValue = Math.max(currentRunningSum, maxValue);
            currentRunningSum -= arr[i - size + 1];
        }
    }

    return maxValue;
}