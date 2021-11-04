//给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位
//。
//
// 返回滑动窗口中的最大值。
//
//
//
// 示例 1：
//
//
//输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
//输出：[3,3,5,5,6,7]
//解释：
//滑动窗口的位置                最大值
//---------------               -----
//[1  3  -1] -3  5  3  6  7       3
// 1 [3  -1  -3] 5  3  6  7       3
// 1  3 [-1  -3  5] 3  6  7       5
// 1  3  -1 [-3  5  3] 6  7       5
// 1  3  -1  -3 [5  3  6] 7       6
// 1  3  -1  -3  5 [3  6  7]      7
//
//
// 示例 2：
//
//
//输入：nums = [1], k = 1
//输出：[1]
//
//
// 示例 3：
//
//
//输入：nums = [1,-1], k = 1
//输出：[1,-1]
//
//
// 示例 4：
//
//
//输入：nums = [9,11], k = 2
//输出：[11]
//
//
// 示例 5：
//
//
//输入：nums = [4,-2], k = 2
//输出：[4]
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 10⁵
// -10⁴ <= nums[i] <= 10⁴
// 1 <= k <= nums.length
//
// Related Topics 队列 数组 滑动窗口 单调队列 堆（优先队列） 👍 1244 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 暴力法
  // let len = nums.length
  // if(len === 0)return []
  // let res =[]
  // for (let i = 0;i<len-k+1;i++){
  //   let max = Number.MIN_SAFE_INTEGER
  //   for (let j = i;j<i+k;j++){
  //     max = Math.max(max,nums[j])
  //   }
  //   res.push(max)
  // }
  // return res

// 单调队列
  const res = []
  const deque = []
  for (let i =0;i<nums.length;i++){
    if(i-deque[0]>=k)deque.shift()
    while (nums[deque[deque.length-1]]<=nums[i]){
      deque.pop()
    }
    deque.push(i)
    if(i>=k-1){
      res.push(nums[deque[0]])
    }
  }
  return res
}
//leetcode submit region end(Prohibit modification and deletion)

