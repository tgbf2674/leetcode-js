//设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
//
//
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。
//
//
//
//
// 示例:
//
// 输入：
//["MinStack","push","push","push","getMin","pop","top","getMin"]
//[[],[-2],[0],[-3],[],[],[],[]]
//
//输出：
//[null,null,null,null,-3,null,0,-2]
//
//解释：
//MinStack minStack = new MinStack();
//minStack.push(-2);
//minStack.push(0);
//minStack.push(-3);
//minStack.getMin();   --> 返回 -3.
//minStack.pop();
//minStack.top();      --> 返回 0.
//minStack.getMin();   --> 返回 -2.
//
//
//
//
// 提示：
//
//
// pop、top 和 getMin 操作总是在 非空栈 上调用。
//
// Related Topics 栈 设计 👍 1063 👎 0


//leetcode submit region begin(Prohibit modification and deletion)

var MinStack = function() {
  this.stackA = []
  this.stackB = [Infinity]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stackA.push(val)
  this.stackB.push(Math.min(this.stackB[this.stackB.length-1],val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stackA.pop()
  this.stackB.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stackA[this.stackA.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stackB[this.stackB.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
//leetcode submit region end(Prohibit modification and deletion)
