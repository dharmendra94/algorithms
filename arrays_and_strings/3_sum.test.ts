import { findZeroSum } from "./3_sum";

describe("3 sum problems tests", () => {
    test("find zero sum problem: [10, 3, -4, 1, -6, 9] should return ['10,-4,-6', '3,-4,1']", () => {
        const input = [10, 3, -4, 1, -6, 9];
        const result = findZeroSum(input);
        expect(result).toEqual(["-6,-4,10", "-4,1,3"]);
    });

    test("find zero sum problem: [0, 0, 0] should return ['0,0,0']", () => {
        const input = [0, 0, 0];
        const result = findZeroSum(input);
        expect(result).toEqual(["0,0,0"]);
    });

    test("find zero sum problem: [-2, 2, 0, -2, 2] should return ['2,-2,0']", () => {
        const input = [-2, 2, 0, -2, 2];
        const result = findZeroSum(input);
        expect(result).toEqual(["-2,0,2"]);
    });
});
