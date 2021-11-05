//编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
//
//
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
//
//
//
//
// 示例 1：
//
//
//输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21
//,23,26,30]], target = 5
//输出：true
//
//
// 示例 2：
//
//
//输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21
//,23,26,30]], target = 20
//输出：false
//
//
//
//
// 提示：
//
//
// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -10⁹ <= matrix[i][j] <= 10⁹
// 每行的所有元素从左到右升序排列
// 每列的所有元素从上到下升序排列
// -10⁹ <= target <= 10⁹
//
// Related Topics 数组 二分查找 分治 矩阵 👍 854 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
//  暴力(时间o(mn)，空间O（1））
//   for (let i =0 ;i<matrix.length;i++){
//     for (let j = 0;j<matrix[0].length;j++){
//       if(matrix[i][j] === target){
//         return true
//       }
//     }
//   }
//   return false

//  二分查找 (时间：O(mlogn)，空间： O（1）)
//   const search = (nums,target)=>{
//     let low = 0,high = nums.length-1
//     while (high>=low){
//       let mid = Math.floor(low+ (high-low)/2)
//       const num = nums[mid]
//       if(num=== target){
//         return mid
//       }else if(num > target){
//         high = mid-1
//       }else {
//         low = mid+1
//       }
//     }
//     return -1
//   }
//   for (const row of matrix) {
//     const index = search(row,target)
//     if(index>=0){
//       return true
//     }
//   }
//   return false

//  Z型搜索(时间复杂度（M+N），空间复杂度O（1）)
  if(!matrix.length)return false
  let left = matrix[0].length-1,top= 0
  while (left>=0 && top<matrix.length){
    if(matrix[top][left]>target){
      left--
    }else if(matrix[top][left]<target){
      top++
    }else {
      return true
    }
  }
  return false
};
//leetcode submit region end(Prohibit modification and deletion)

