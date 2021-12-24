// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

function mergeIntervals (intervals) {
  // 剔除掉不合法的輸入
  for (let i=0; i<intervals.length; i++) {
    if (Array.isArray(intervals)) {
        const isIntervalAllArray = intervals.find(interval => !Array.isArray(interval))
        if(isIntervalAllArray) {
          console.log('需輸入二維陣列');
          return;
        }
        if (intervals[i].length !== 2) {
          console.log('每組數字陣列須兩個一組。');
          return;
        }
      } else {
      console.log('需輸入陣列。');
      return;
    }
  }
  // 先將數組排序好（雙維皆小->大）
  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]).map(interval => interval.sort((a, b) => a - b));

  // 開始 compare
  let index = 0;
  if (index + 1 === sortedIntervals.length) return sortedIntervals;
  while(sortedIntervals[index+1][0] <= sortedIntervals[index][1] && sortedIntervals[index][1] <= sortedIntervals[index+1][1]) {
    sortedIntervals.splice(index, 2, [sortedIntervals[index][0], sortedIntervals[index+1][1]]);
    console.log(sortedIntervals);
    console.log(index+1, sortedIntervals.length)
  }

  index++;
};

// 期待結果：[[2, 10], [11, 17]]
// 目前只跟下一個比沒辦法滿足結果，所以可能要在 while 內寫 for 回圈解決
mergeIntervals([[2, 9], [8, 10], [7, 10, 15], [11,13], [14, 17], [12, 15]]);