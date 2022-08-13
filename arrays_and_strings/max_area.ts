export function maxArea(height: number[]): number {
    let maxArea = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {
        const width = rightPointer - leftPointer;
        maxArea = Math.max(maxArea, width * Math.min(height[leftPointer], height[rightPointer]));

        if (height[leftPointer] <= height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return maxArea;
}