//给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
//
// 示例:
//
// 输入: [0,1,0,3,12]
//输出: [1,3,12,0,0]
//
// 说明:
//
//
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
//
// Related Topics 数组 双指针 👍 1287 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let fast = 0,slow = 0
  while (fast<nums.length){
    if(nums[fast] !== 0){
      [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
      slow++
    }
    fast++
  }
  return nums
};
//leetcode submit region end(Prohibit modification and deletion)
