export class TreeNode {
    val: number;
    left?: TreeNode = undefined;
    right?: TreeNode = undefined;

    constructor(val: number, left?: TreeNode, right?: TreeNode) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export function binaryTreeZigzagOrderTraversal(root: TreeNode | null): number[][] {
    // Base case, we have no root
    if (!root) {
        return [];
    }

    if (!root.left && !root.right) return [[root.val]]

    let queue = [root];
    let levelOrder: number[][] = [];

    // Starts from left to right traversal and then goes to right to left and so on...
    let zigZag = false;

    while (queue.length) {
        let row: number[] = [];

        const queueLength = queue.length;

        for (let counter = 0; counter < queueLength; counter++) {
            const node = queue.pop();

            if (!node) continue;

            if (zigZag) {
                row.unshift(node.val);
            } else {
                row.push(node.val);
            }

            if (node?.left) {
                queue.unshift(node.left);
            }

            if (node?.right) {
                queue.unshift(node.right);
            }
        }

        levelOrder.push(row);

        zigZag = !zigZag;

    }

    return levelOrder;
}

function treeTraversalRecursion (tree: number[], rootIndex: number, leftToRight: boolean) {

}