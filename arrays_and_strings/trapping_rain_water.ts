export function trappingRainWater(height: number[]): number {
    if (height.length <= 1) return 0;

    let areaCovered = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                areaCovered += leftMax - height[left];
            }

            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                areaCovered+= rightMax - height[right];
            }

            right--;
        }
    }

    return areaCovered;
}