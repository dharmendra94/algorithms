import { maximumOverlaps } from "./maximum_overlaps";

describe("Should return maximum number of overlaps at any given time", () => {
    it ("Should return 2 when passed [[1,2], [2,4], [3,6]]", () => {
        const input = [[1,2], [2,4], [3,6]];
        const result = maximumOverlaps(input);
        expect(result).toBe(2);
    })

    it ("Should return 3 when passed [[1,4], [2, 5], [4, 5], [6, 10]]", () => {
        const input = [[1,4], [2, 5], [4, 5], [6, 10]];
        const result = maximumOverlaps(input);
        expect(result).toBe(3);
    });
});