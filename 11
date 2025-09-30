function longest(arr, n) {
  const targetLength = arr[n - 1].length;
  let longestStr = null;
  for (let str of arr) {
    if (str.length >= targetLength) {
      if (longestStr === null || str.length > longestStr.length) {
        longestStr = str;
      }
    }
  }
  return longestStr;
}

