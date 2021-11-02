//给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
//
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
//
//
//
// 示例 1：
//
//
//输入：[3,2,3]
//输出：3
//
// 示例 2：
//
//
//输入：[2,2,1,1,1,2,2]
//输出：2
//
//
//
//
// 进阶：
//
//
// 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
//
// Related Topics 数组 哈希表 分治 计数 排序 👍 1185 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 方案一
  // const len = nums.length
  // const map = new Map()
  // for (let i = 0;i<len;i++){
  //   map.set(nums[i],map.has(nums[i]) ? map.get(nums[i])+ 1 :1)
  // }
  // for (let [key,val] of map){
  //   if(val>len/2){
  //     return key
  //   }
  // }

//  方案二
//   const len = nums.length
//   const sort = nums.sort((a,b)=>a-b)
//   return sort[Math.floor(len/2)]
//  投票算法
  let count = 1
  let res = nums[0]
  for (let i =1 ;i<nums.length;i++){
    if(count === 0 ){
      res = nums[i]
    }
    if(res !== nums[i]){
      count--
    }else{
      count++
    }
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)
