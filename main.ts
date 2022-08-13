import { integerToRoman } from "./arrays_and_strings/integer_to_roman";
import { maxArea } from "./arrays_and_strings/max_area";
import { reOrderLogFiles } from "./arrays_and_strings/reorder_log_files";

// Driver code
function main() {
    // const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = reOrderLogFiles([
        "a1 9 2 3 1",
        "g1 act car",
        "zo4 4 7",
        "ab1 off key dog",
        "a8 act zoo",
    ]);
    console.log(result);
}

main();
