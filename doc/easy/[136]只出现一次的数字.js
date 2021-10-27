//给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
//
// 说明：
//
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
//
// 示例 1:
//
// 输入: [2,2,1]
//输出: 1
//
//
// 示例 2:
//
// 输入: [4,1,2,1,2]
//输出: 4
// Related Topics 位运算 数组 👍 2076 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 异或思路
  // let res = 0
  // for (let i = 0;i<nums.length;i++){
  //   res ^= nums[i]
  // }
  // return res

//  hash表（不满足题目要求）
  let map = new Map()
  for (let num of nums){
    if(map.has(num)){
      map.set(num,map.get(num)+1)
    }else {
      map.set(num,1)
    }
  }
  for (let [key,value] of map.entries()){
    if(value === 1){
      return key
    }
  }
};
//leetcode submit region end(Prohibit modification and deletion)
