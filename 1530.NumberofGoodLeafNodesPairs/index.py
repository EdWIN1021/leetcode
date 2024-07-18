class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def countPairs(self, root: TreeNode, distance: int) -> int:
        self.pairs = 0

        def dfs(node):
            if not node:
                return []
            if not node.left and not node.right:
                return [1]

            left_dist = dfs(node.left)
            right_dist = dfs(node.right)

            # Count valid pairs between left and right subtrees
            for l in left_dist:
                for r in right_dist:
                    if l + r <= distance:
                        self.pairs += 1

            # Return distances incremented by 1, for the current node
            return [d + 1 for d in left_dist + right_dist if d + 1 < distance]

        dfs(root)
        return self.pairs

# Example usage:
root = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3, TreeNode(4), TreeNode(5)))
solution = Solution()
result = solution.countPairs(root, 3)
print(result)  # This should print 2
