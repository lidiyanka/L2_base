function primeFactors(n){
  let factors = {};
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      factors[divisor] = (factors[divisor] || 0) + 1;
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  let result = "";
  for (let factor in factors) {
    if (factors.hasOwnProperty(factor)) {
      if (factors[factor] === 1) {
        result += "(" + factor + ")";
      } else {
        result += "(" + factor + "**" + factors[factor] + ")";
      }
    }
  }
  return result;
}
