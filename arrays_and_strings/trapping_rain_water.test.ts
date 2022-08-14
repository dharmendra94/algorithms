import { trappingRainWater } from "./trapping_rain_water";

test('[4,2,0,3,2,5] returns 9 as output', () => {
    const input = [4,2,0,3,2,5];
    const result = trappingRainWater(input);
    expect(result).toEqual(9);
});