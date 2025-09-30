Array.prototype.square = function() {
  return this.map(x => x * x);
};

Array.prototype.cube = function() {
  return this.map(x => x * x * x);
};

Array.prototype.sum = function() {
  return this.reduce((acc, val) => acc + val, 0);
};

Array.prototype.average = function() {
  return this.length === 0 ? NaN : this.sum() / this.length;
};
