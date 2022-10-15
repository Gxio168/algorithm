function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

var mergeTwoLists = function (list1, list2) {
  let pre = index = new ListNode(-1, null)
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      index.next = list1;
      index = index.next;
      list1 = list1.next;
    } else {
      index.next = list2;
      index = index.next;
      list2 = list2.next;
    }
  }
  if (list1) {
    index.next = list1;
  } else {
    index.next = list2;
  }
  return pre.next;
}

let result = mergeTwoLists(list1, list2);
console.log(result);
