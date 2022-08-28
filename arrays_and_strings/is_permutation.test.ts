import { isPermutation } from "./is_permutation";

describe("Check if two strings are permutations of one another", () => {
    it ("Should return true when we pass abc and bac", () => {
        const result = isPermutation("abc", "bac");
        expect(result).toBe(true);
    })

    it ("Should return false when we pass abcd and bcda", () => {
        const result = isPermutation("abc", "abcde");
        expect(result).toBe(false);
    });
});