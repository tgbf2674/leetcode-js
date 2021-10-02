//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//
//
// 示例 2：
//
//
//输入：nums = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：nums = [0]
//输出：[]
//
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵
//
// Related Topics 数组 双指针 排序 👍 3824 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  let length = nums.length
  if(length<3 && nums === null)return res
  nums.sort((a,b)=> a-b)
  for(let i = 0;i<length;i++){
    if(nums[i]>0)break
    if(i>0 && nums[i] === nums[i-1])continue
    let l = i+1
    let r = length-1
    while (r>l){
      const sum = nums[i]+ nums[l]+ nums[r]
      if(sum===0){
        res.push([nums[i],nums[l],nums[r]])
        while (l<r && nums[l] === nums[l+1])l++
        while (l<r && nums[r] === nums[r-1])r--
        l++
        r--
      }
      else if(sum<0)l++
      else if(sum>0)r--
    }
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)
