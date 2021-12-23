//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function addTwoNumbers (l1, l2) {
  if (l1.length !== l2.length) return;
  const l1Num = Number(l1.reverse().join(''));
  const l2Num = Number(l2.reverse().join(''));
  return Array.from(String(l1Num + l2Num), x => Number(x));
};

console.log(addTwoNumbers([1,2,3], [4,5,6]));