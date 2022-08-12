import {
    longestSubstringLengthWithDistinctCharacters,
    maxSumSubArray,
    smallestSubArrayWithGivenSum,
} from "./arrays_and_strings/sliding_window";
import { quickSort } from "./sort/quick_sort";

function main() {
    const arr = [10, 7, 8, 9, 1, 5];
    const result = quickSort(arr, 0, arr.length - 1);
    console.log(result);
}

main();
