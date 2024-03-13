# Insert In BST
# Given an array of numbers, build a binary search tree(BST) by inserting the values sequentially inside an initially empty BST.

# Example
# {
# "values": [7, 5, 9]
# }



"""
For your reference:
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
"""
def build_a_bst(values):
    """
    Args:
     values(list_int32)
    Returns:
     BinaryTreeNode_int32
    """
    # Write your code here.
    root = BinaryTreeNode(values[0])
    for value in values[1:]:
        curr = root
        newNode = BinaryTreeNode(value)
        while curr:
            prev = curr
            if value < curr.value:
                curr = curr.left
            else:
                curr = curr.right
        
        if value < prev.value:
            prev.left = newNode
        else:
            prev.right = newNode
            
    return root