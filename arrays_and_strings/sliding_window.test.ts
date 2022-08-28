import { maxSumSubArray, smallestSubArrayWithGivenSum } from "./sliding_window";

describe("Maximum sum of a sub array of given fixed size and an input array", () => {
    it("Should return 9 when the input array is [1,2,3,4,5] and the sub array size is 2", () => {
        const input = [1, 2, 3, 4, 5];
        const windowSize = 2;
        const result = maxSumSubArray(input, windowSize);
        expect(result).toBe(9);
    });
});

describe("Smallest sub array with given sum (Dynamically sized sliding window)", () => {
    it ("Should return 2 when passed [1,2,4,5,7,8,1] and sum as 9", () => {
        const input = [1,2,4,5,7,8,1];
        const targetSum = 9;
        const result = smallestSubArrayWithGivenSum(input, targetSum);
        expect(result).toBe(2);
    })
});


