function isCircleSorted( arr ){
  let countBreaks = 0;
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let next = arr[(i + 1) % arr.length];
    if (curr > next) {
      countBreaks++;
      if (countBreaks > 1) return false;
    }
  }
  return true;
}
