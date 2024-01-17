const MinStack = function () {
  this.arr = [];
};

MinStack.prototype.push = function (val) {
  this.arr.push(val);
};

MinStack.prototype.pop = function (val) {
  this.arr.pop(val);
};

MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

MinStack.prototype.getMin = function () {
  return Math.min(...this.arr);
};

var obj = new MinStack();
