import { oneWay } from "./one_way";

describe("Should check if two strings are one edit away", () => {
    it("Should return true when passed 'pale' and 'ple'", () => {
        const result = oneWay("pale", "ple");
        expect(result).toBe(true);
    });

    it("Should return true when passed 'pales', 'pale'", () => {
        const result = oneWay("pales", "pale");
        expect(result).toBe(true);
    });

    it("Should return true when passed 'pale' and 'bale'", () => {
        const result = oneWay("pale", "bale");
        expect(result).toBe(true);
    });

    it("Should return false when passed 'pale' and 'bae'", () => {
        const result = oneWay("pale", "bae");
        expect(result).toBe(false);
    });
});
