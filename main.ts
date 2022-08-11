import {
    longestSubstringLengthWithDistinctCharacters,
    maxSumSubArray,
    smallestSubArrayWithGivenSum,
} from "./arrays_and_strings/sliding_window";

function main() {
    const result = longestSubstringLengthWithDistinctCharacters("aaabbbcdeaaaaaaa", 2);
    console.log(result);
}

main();
