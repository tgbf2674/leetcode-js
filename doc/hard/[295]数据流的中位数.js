//中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
//
// 例如，
//
// [2,3,4] 的中位数是 3
//
// [2,3] 的中位数是 (2 + 3) / 2 = 2.5
//
// 设计一个支持以下两种操作的数据结构：
//
//
// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
//
//
// 示例：
//
// addNum(1)
//addNum(2)
//findMedian() -> 1.5
//addNum(3)
//findMedian() -> 2
//
// 进阶:
//
//
// 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
// 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？
//
// Related Topics 设计 双指针 数据流 排序 堆（优先队列） 👍 576 👎 0


//leetcode submit region begin(Prohibit modification and deletion)

var MedianFinder = function() {
  this.data= []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if(!this.data.length){
    this.data.push(num)
    return
  }
  let l = 0,r = this.data.length-1
  while (l<=r){
    let mid = Math.floor(l+(r-l)/2)
    if(this.data[mid]===num){
      this.data.splice(mid,0,num)
      return
    }else if(this.data[mid]>num){
      r= mid-1
    }else {
      l = mid+1
    }
  }
  this.data.splice(r+1,0,num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let length = this.data.length
  if(!length)return null
  let mid = Math.floor((length-1)/2)
  if(length%2){
   return this.data[mid]
  }
  return (this.data[mid]+this.data[mid+1])/2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
//leetcode submit region end(Prohibit modification and deletion)
