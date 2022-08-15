import {
    binaryTreeZigzagOrderTraversal,
    TreeNode,
} from "./binary_tree_zigzag_traversal";

describe("Binary tree zig zag traversal", () => {
    test("[3,9,20,null,null,15,7] returns [[3],[20,9],[15,7]] as output", () => {
        const tree = new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        const result = binaryTreeZigzagOrderTraversal(tree);
        expect(result).toEqual([[3], [20, 9], [15, 7]]);
    });

    test("[1] return [[1]]", () => {
        const tree = new TreeNode(1);
        const result = binaryTreeZigzagOrderTraversal(tree);
        expect(result).toEqual([[1]]);
    });
});
