//给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
//
// 如果数组中不存在目标值 target，返回 [-1, -1]。
//
// 进阶：
//
//
// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
//
//
//
//
// 示例 1：
//
//
//输入：nums = [5,7,7,8,8,10], target = 8
//输出：[3,4]
//
// 示例 2：
//
//
//输入：nums = [5,7,7,8,8,10], target = 6
//输出：[-1,-1]
//
// 示例 3：
//
//
//输入：nums = [], target = 0
//输出：[-1,-1]
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 10⁵
// -10⁹ <= nums[i] <= 10⁹
// nums 是一个非递减数组
// -10⁹ <= target <= 10⁹
//
// Related Topics 数组 二分查找 👍 1241 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const findLeft = (nums,target)=>{
    let l = 0 , r = nums.length-1
    while (l<=r){
      let mid = Math.floor((l+r)/2)
      if(nums[mid]>=target){
        r = mid -1
      }else {
        l = mid +1
      }
    }
    return l
  }
  let res = new Array(2)
  if(findLeft(nums,target) > nums.length || nums[findLeft(nums,target)] !== target)return res = [-1,-1]
  else res = [findLeft(nums,target),findLeft(nums,target+1)-1]
  return res
};
//leetcode submit region end(Prohibit modification and deletion)
