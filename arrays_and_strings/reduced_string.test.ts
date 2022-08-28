import { superReducedString } from "./reduced_string";

describe("Check if the string is reduced so no two adjacent characters are same", () => {
    it ("Should return 'abd' when passed in 'aaabccddd'", () => {
        const result = superReducedString("aaabccddd");
        expect(result).toBe("abd");
    });

    it ("Should return 'Empty String' when passed in 'baab'", () => {
        const result = superReducedString("baab");
        expect(result).toBe("Empty String");
    })
});