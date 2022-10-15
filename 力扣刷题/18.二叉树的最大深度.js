var maxDepth = function (root) {
  if (!root) return 0
  function inorder(root, index) {
    if (!root) return index - 1
    let a = inorder(root.left, index + 1)
    let b = inorder(root.right, index + 1)
    return getMax(a, b)
  }
  return inorder(root, 1)
};

function getMax(a, b) {
  return a > b ? a : b
}


var maxDepth = function (root) {
  if (!root) return 0
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return Math.max(left, right) + 1
};
