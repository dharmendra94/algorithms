import { stringCompression } from "./string_compression";

describe("Should try to compress the string", () => {
    it("Should return the result as a2b1c5a3 when passed aabcccccaaa", () => {
        const result = stringCompression("aabcccccaaa");
        expect(result).toBe("a2b1c5a3");
    });
});
