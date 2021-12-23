// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

function isPalintdrome (int) {
  const intReverse = Number(Array.from(String(int)).reverse().join(''));
  return int === intReverse;
}

console.log(isPalintdrome(12321));
