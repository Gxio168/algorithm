function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)

}

// 递归
let inorderTraversal1 = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right)
  }
  inorder(root)
  return res
};

// 迭代
let inorderTraversal2 = function (root) {
  const res = [];
  const list = [];
  while (root || list.length) {
    while (root) {
      list.push(root);
      root = root.left
    }
    root = list.pop();
    res.push(root.val);
    root = root.right
  }
  return res;

};

// Morris 算法
var inorderTraversal = function (root) {
  const res = [];
  let predecessor = null;
  while (root) {
    if (root.left) {
      predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right
      }
      if (!predecessor.right) {
        predecessor.right = root;
        root = root.left
      } else {
        res.push(root.val);
        predecessor.right = null;
        root = root.right
      }
    } else {
      res.push(root.val);
      root = root.right
    }
  }
  return res
}



