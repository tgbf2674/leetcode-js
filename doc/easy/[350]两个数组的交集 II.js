//给定两个数组，编写一个函数来计算它们的交集。
//
//
//
// 示例 1：
//
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
//输出：[2,2]
//
//
// 示例 2:
//
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//输出：[4,9]
//
//
//
// 说明：
//
//
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。
//
//
// 进阶：
//
//
// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
//
// Related Topics 数组 哈希表 双指针 二分查找 排序 👍 591 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // 哈希表
  // let map = {}
  // let res = []
  // for (const n1 of nums1) {
  //   if(map[n1]){
  //     map[n1]++
  //   }else {
  //     map[n1] = 1
  //   }
  // }
  // for (const n2 of nums2) {
  //   let val = map[n2]
  //   if(val>0){
  //     res.push(n2)
  //     map[n2]--
  //   }
  // }
  // return res

//  排序 + 双指针
  nums1.sort((a,b)=>a-b)
  nums2.sort((a,b)=>a-b)
  const res= []
  let p1=0, p2=0
  while (p1<nums1.length && p2<nums2.length){
    if(nums1[p1]>nums2[p2]){
      p2++
    }else if(nums1[p1]<nums2[p2]){
      p1++
    }else {
      res.push(nums1[p1])
      p1++
      p2++
    }
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)

