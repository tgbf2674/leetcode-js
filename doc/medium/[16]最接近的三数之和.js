//给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和
//。假定每组输入只存在唯一答案。
//
//
//
// 示例：
//
// 输入：nums = [-1,2,1,-4], target = 1
//输出：2
//解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
//
//
//
//
// 提示：
//
//
// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4
//
// Related Topics 数组 双指针 排序 👍 897 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a,b)=> a-b)
  let res = nums[0]+ nums[1] + nums[nums.length-1]
  for(let i = 0;i<nums.length-2;i++){
    let l = i+1
    let r = nums.length-1
    while (r>l){
      let sum = nums[i]+nums[l]+nums[r]
      if(sum>target)r--
      else l++
      if(Math.abs(sum-target)<Math.abs(res-target)){
        res = sum
      }
    }
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)

