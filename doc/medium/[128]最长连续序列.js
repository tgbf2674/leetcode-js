//给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
//
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
//
//
//
// 示例 1：
//
//
//输入：nums = [100,4,200,1,3,2]
//输出：4
//解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
//
// 示例 2：
//
//
//输入：nums = [0,3,7,2,5,8,4,6,0,1]
//输出：9
//
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 10⁵
// -10⁹ <= nums[i] <= 10⁹
//
// Related Topics 并查集 数组 哈希表 👍 949 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // set解法 （空间复杂度较低）
  // let set = new Set(nums)
  // let max = 0
  // for (let i = 0;i<nums.length;i++){
  //   if(!set.has(nums[i]-1)){
  //     let cur = nums[i]
  //     let count = 1
  //     while (set.has(cur+1)){
  //       count++
  //       cur++
  //     }
  //     max = Math.max(max,count)
  //   }
  // }
  // return max

  //map解法(时间复杂度较低)
  let map = new Map()
  let max = 0
  for (const num of nums) {
    if(!map.has(num)){
      let preLen = map.get(num-1) ||0
      let nextLen= map.get(num+1) || 0
      let curLen = preLen+1+nextLen
      map.set(num,curLen)
      max = Math.max(max,curLen)
      map.set(num-preLen,curLen)
      map.set(num+nextLen,curLen)
    }
  }
  return max
};
//leetcode submit region end(Prohibit modification and deletion)


