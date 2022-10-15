var isSymmetric = function (root) {
  return check(root.left, root.right)
};

// 递归
const check1 = function (p, q) {
  if (!q && !p) return true
  if (!q || !p) return false
  return p.val == q.val && check1(p.left, q.right) && check1(p.right, q.left)
}

// 迭代
const check2 = function (p, q) {
  let list = []
  list.push(p), list.push(q);
  while (list.length) {
    p = list.shift()
    q = list.shift()
    if (!p && !q) continue
    if ((!p || !q) || (p.val != q.val)) return false
    list.push(p.left)
    list.push(q.right)
    list.push(p.right)
    list.push(q.left)
  }
  return true
}