import { integerToRoman } from "./arrays_and_strings/integer_to_roman";
import { maxArea } from "./arrays_and_strings/max_area";
import { reOrderLogFiles } from "./arrays_and_strings/reorder_log_files";
import { trappingRainWater } from "./arrays_and_strings/trapping_rain_water";

// Driver code
function main() {
    const arr = [4,2,0,3,2,5];
    const result = trappingRainWater(arr);
    console.log(result);
}

main();
