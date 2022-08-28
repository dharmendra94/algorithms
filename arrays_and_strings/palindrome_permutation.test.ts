import { palindromePermutation } from "./palindrome_permutation";

describe("Check if a string is permutation of a palindrome", () => {
    it("should return true when we pass `Tact Coa`", () => {
        const result = palindromePermutation("Tact Coa");
        expect(result).toBe(true);
    });

    it("Should return false when we pass `abc A`", () => {
        const result = palindromePermutation("abc A");
        expect(result).toBe(true);
    });
});
