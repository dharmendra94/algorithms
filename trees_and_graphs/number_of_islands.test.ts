import { numIslands } from "./number_of_islands";

describe("Number of islands test cases", () => {
    test("Case 1", () => {
        const input = [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
        ];

        const result = numIslands(input);

        expect(result).toEqual(1);
    });

    test("Case 2", () => {
        const input = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"],
        ];

        const result = numIslands(input);

        expect(result).toEqual(3);
    });
});
