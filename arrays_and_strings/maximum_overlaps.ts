export function maximumOverlaps(v: number[][]): number {
    if (!v || !v.length) return 0;

    if (v.length === 1) return 1;

    // Variable to store the maximum
    // count
    let ans = 0;
    let count = 0;
    let data = [];

    // Storing the x and y
    // coordinates in data vector
    for (var i = 0; i < v.length; i++) {
        // Pushing the x coordinate
        data.push([v[i][0], "x"]);

        // Pushing the y coordinate
        data.push([v[i][1], "y"]);
    }

    // Sorting of ranges
    data.sort();

    // Traverse the data vector to
    // count number of overlaps
    for (var i = 0; i < data.length; i++) {
        // If x occur it means a new range
        // is added so we increase count
        if (data[i][1] == "x") count++;

        // If y occur it means a range
        // is ended so we decrease count
        if (data[i][1] == "y") count--;

        // Updating the value of ans
        // after every traversal
        ans = Math.max(ans, count);
    }

    return ans;
}
