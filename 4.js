function findMissing(list) {  
  const n = list.length;

  const differences = [];
  for (let i = 1; i < n; i++) {
    differences.push(list[i] - list[i - 1]);
  }

  let step;
  if (differences[0] !== differences[1]) { 
    step = Math.min(...differences);  
  } else {
    step = differences[0]; 
  }

  for (let i = 1; i < n; i++) {
    if (list[i] - list[i - 1] !== step) {
      return list[i - 1] + step;  
    }
  }

  return list[0]; 
}

