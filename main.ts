import { findZeroSum } from "./arrays_and_strings/3_sum";
import { integerToRoman } from "./arrays_and_strings/integer_to_roman";
import { maxArea } from "./arrays_and_strings/max_area";
import { reOrderLogFiles } from "./arrays_and_strings/reorder_log_files";
import { trappingRainWater } from "./arrays_and_strings/trapping_rain_water";
import { numIslands } from "./trees_and_graphs/number_of_islands";

// Driver code
function main() {
    const arr = [-2, 2, 0, -2, 2];
    const result = findZeroSum(arr);
    console.log(result);
}

main();
