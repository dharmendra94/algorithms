import { quickSortAlg } from "./quick_sort";

describe("Check if an array is sorted properly using Quick Sort algorithm", () => {
    it("Should sort the array [1,4,3,5,1] to [1,1,3,4,5]", () => {
        const input = [1, 4, 3, 5, 1];
        const result = quickSortAlg(input);
        expect(result).toBe([1, 1, 3, 4, 5]);
    });
});
