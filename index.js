var RandomizedSet = function () {
  this.nums = [];
};

RandomizedSet.prototype.insert = function (val) {
  if (this.nums.includes(val)) {
    return false;
  }

  this.nums.push(val);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.nums.includes(val)) {
    return false;
  } else {
    this.nums = this.nums.filter((num) => num !== val);
    return true;
  }
};

RandomizedSet.prototype.getRandom = function () {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

const obj = new RandomizedSet();

var param_1 = obj.insert(1);
var param_2 = obj.insert(2);
var param_2 = obj.insert(2);
var param_3 = obj.getRandom();
