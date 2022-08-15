export function numIslands(grid: string[][]) {
    if (!grid || !grid.length) return 0;

    let queue: number[][] = [];
    let islands = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                grid[i][j] = "0";

                islands++;

                queue.push([i, j]);

                while (queue.length) {
                    const node = queue.pop();

                    if (!node) {
                        break;
                    }

                    const [rowIdx, colIdx] = [node[0], node[1]];

                    const left = colIdx - 1 >= 0 ? grid[rowIdx][colIdx - 1] : "0";
                    const right = colIdx + 1 < grid[rowIdx].length ? grid[rowIdx][colIdx + 1] : "0";
                    const top = rowIdx - 1 >= 0 ? grid[rowIdx - 1][colIdx] : "0";
                    const bottom =
                    rowIdx + 1 < grid.length ? grid[rowIdx + 1][colIdx] : "0";

                    if (left === "1") {
                        grid[rowIdx][colIdx - 1] = "0";
                        queue.push([rowIdx, colIdx - 1]);
                    }

                    if (right === "1") {
                        grid[rowIdx][colIdx + 1] = "0";
                        queue.push([rowIdx, colIdx + 1]);
                    }

                    if (top === "1") {
                        grid[rowIdx - 1][colIdx] = "0";
                        queue.push([rowIdx - 1, colIdx]);
                    }

                    if (bottom === "1") {
                        grid[rowIdx + 1][colIdx] = "0";
                        queue.push([rowIdx + 1, colIdx]);
                    }
                }
            }
        }
    }

    return islands;
}
