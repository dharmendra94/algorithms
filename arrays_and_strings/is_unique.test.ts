import { isUnique } from "./is_unique"

describe("Check if a string has unique characters", () => {
    it("should return true when it receives abcdefg", () => {
        const result = isUnique("abcdefg");
        expect(result).toBe(true);
    });

    it("should return false when it receives aaabb as input", () => {
        const result = isUnique("aaabb");
        expect(result).toBe(false);
    });
})