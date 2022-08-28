/**
 * Calculates the maximum sum from a sub array of the given size (Fixed size sliding window)
 * @param arr numbers array
 * @param size size of the sub array
 * @returns sum of the sub array
 */
export function maxSumSubArray(arr: number[], size: number): number {
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

/**
 * Dynamically sized sliding window technique used to find a sub array of target sum
 */
export function smallestSubArrayWithGivenSum(arr: number[], targetSum: number) {
     if (!arr || !arr.length) return 0;

     let windowStart = 0, currentWindowSum = 0, minWindowSize = Number.MAX_VALUE;

     for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentWindowSum += arr[windowEnd];
        
        while (currentWindowSum >= targetSum && windowStart < arr.length) {
            minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);

            currentWindowSum -= arr[windowStart];
            windowStart++;
        }
     }

     return minWindowSize;
}

export function longestSubstringLengthWithDistinctCharacters(str: string, distinctChars: number) {
    if (!str || !str.length) return 0;

    let windowStart = 0, maxSubstringLength = 0, currentRunningSum = 0, characterMap: Map<string, number> = new Map();

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const character = str[windowEnd];
        currentRunningSum++;

        if (characterMap.has(character)) {
            let characterCount = characterMap.get(character) ?? 0;
            characterMap.set(character, ++characterCount);
        } else {
            characterMap.set(character, 1);
        }

        while (characterMap.size > distinctChars) {
            characterMap.delete(str[windowStart]);
            windowStart++;
            currentRunningSum--;
        }
        
        maxSubstringLength = Math.max(maxSubstringLength, currentRunningSum);
    }

    return maxSubstringLength;
}