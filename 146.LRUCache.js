const Node = function (key, val) {
  this.pre = null;
  this.next = null;
  this.key = key > -1 ? key : -1;
  this.val = val > -1 ? val : -1;
};

const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.left = new Node();
  this.right = new Node();
  this.left.next = this.right;
  this.right.pre = this.left;
};

LRUCache.prototype.remove = function (key) {
  const node = this.map.get(key);
  node.pre.next = node.next;
  node.next.pre = node.pre;
};

LRUCache.prototype.insert = function (key, value) {
  const newNode = new Node(key, value);
  this.map.set(key, newNode);

  this.right.pre.next = newNode;
  newNode.pre = this.right.pre;
  newNode.next = this.right;
  this.right.pre = newNode;
};

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    this.remove(key);
    this.insert(key, this.map.get(key).val);
    return this.map.get(key).val;
  }

  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.remove(key);
  } else if (this.map.size === this.capacity) {
    this.map.delete(this.left.next.key);

    this.left.next = this.left.next.next;
    this.left.next.pre = this.left;
  }

  this.insert(key, value);
};

const obj = new LRUCache(2);

obj.put(1, 0);
obj.put(2, 2);
obj.get(1);
obj.put(3, 3);
obj.put(4, 4);

let curr = obj.left;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
