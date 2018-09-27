class Solution {
    
    class Node {
        public int val;
        public Node right;
        public Node left;
        
        public Node(int val) {
            this.val = val;
        }
    }

    boolean isValidBST(final Node node) {
        return isValidBST(node, null, null);
    }

    private boolean isValidBST(final Node node, final Integer min, final Integer max) {
        if (node == null) {
            return true;
        }

        if (min != null && node.val <= min) {
            return false;
        }

        if (max != null && node.val > max) {
            return false;
        }

        return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
    }
}
