//给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
//
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
//
//
//
// 示例 1:
//
//
//输入: [3,2,1,5,6,4] 和 k = 2
//输出: 5
//
//
// 示例 2:
//
//
//输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
//输出: 4
//
//
//
// 提示：
//
//
// 1 <= k <= nums.length <= 10⁴
// -10⁴ <= nums[i] <= 10⁴
//
// Related Topics 数组 分治 快速选择 排序 堆（优先队列） 👍 1358 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // nums.sort((a,b)=>b-a)
  // return nums[k-1]
  let heapSize=nums.length
  buildMaxHeap(nums,heapSize) // 构建好了一个大顶堆
  // 进行下沉 大顶堆是最大元素下沉到末尾
  for(let i=nums.length-1;i>=nums.length-k+1;i--){
    swap(nums,0,i)
    --heapSize // 下沉后的元素不参与到大顶堆的调整
    // 重新调整大顶堆
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0]
  // 自下而上构建一颗大顶堆
  function buildMaxHeap(nums,heapSize){
    for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
      maxHeapify(nums,i,heapSize)
    }
  }
  // 从左向右，自上而下的调整节点
  function maxHeapify(nums,i,heapSize){
    let l=i*2+1
    let r=i*2+2
    let largest=i
    if(l < heapSize && nums[l] > nums[largest]){
      largest=l
    }
    if(r < heapSize && nums[r] > nums[largest]){
      largest=r
    }
    if(largest!==i){
      swap(nums,i,largest) // 进行节点调整
      // 继续调整下面的非叶子节点
      maxHeapify(nums,largest,heapSize)
    }
  }
  function swap(a,  i,  j){
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
};
//leetcode submit region end(Prohibit modification and deletion)
