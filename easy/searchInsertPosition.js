// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

function searchInsertPosition(numArray, target) {
  const sortedNumArray = numArray.sort((a, b) => a - b);
  const index = sortedNumArray.findIndex(num => num === target);
  if (index !== -1) {
    return index;
  } else {
    let position = 0;
    while(target > sortedNumArray[position]) {
      position++;
    }
    return position;
  }
}

console.log(searchInsertPosition([5,9,12,3], 12));