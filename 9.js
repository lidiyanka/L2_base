function expandedForm(num) {
  const strNum = String(num);
  const length = strNum.length;
  const parts = [];

  for (let i = 0; i < length; i++) {
    const digit = strNum[i];
    if (digit !== '0') {
      parts.push(digit + '0'.repeat(length - i - 1));
    }
  }
  return parts.join(' + ');
}


console.log(expandedForm(12));   
console.log(expandedForm(45));    
console.log(expandedForm(70304)); 
