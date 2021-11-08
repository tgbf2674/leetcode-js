//给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
//请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。
//
//
//
// 示例 1：
//
//
//输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
//输出：13
//解释：矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小元素是 13
//
//
// 示例 2：
//
//
//输入：matrix = [[-5]], k = 1
//输出：-5
//
//
//
//
// 提示：
//
//
// n == matrix.length
// n == matrix[i].length
// 1 <= n <= 300
// -10⁹ <= matrix[i][j] <= 10⁹
// 题目数据 保证 matrix 中的所有行和列都按 非递减顺序 排列
// 1 <= k <= n²
//
// Related Topics 数组 二分查找 矩阵 排序 堆（优先队列） 👍 690 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  // 数组降维排序
  // let arr = matrix.flat()
  // arr.sort((a,b)=>a-b)
  // return arr[k-1]

//  值域二分
  const countInMatrix=(matrix,midVal)=>{
    let len = matrix.length
    let row = 0
    let col = len-1
    let count = 0
    while (row<len && col>=0){
      if(matrix[row][col]>midVal){
        col--
      }else {
        count+=col+1
        row++
      }
    }
    return count
  }
  let len = matrix.length
  let low = matrix[0][0]
  let high= matrix[len-1][len-1]
  while (high>=low){
    let midVal = Math.floor(low+(high-low)/2)
    let count = countInMatrix(matrix,midVal)
    if(count>=k){
      high= midVal-1
    }else{
      low = midVal+1
    }
  }
  return low
};

//leetcode submit region end(Prohibit modification and deletion)
