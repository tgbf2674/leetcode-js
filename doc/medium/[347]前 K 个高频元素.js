//给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
//
//
//
// 示例 1:
//
//
//输入: nums = [1,1,1,2,2,3], k = 2
//输出: [1,2]
//
//
// 示例 2:
//
//
//输入: nums = [1], k = 1
//输出: [1]
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 10⁵
// k 的取值范围是 [1, 数组中不相同的元素的个数]
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
//
//
//
//
// 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
// Related Topics 数组 哈希表 分治 桶排序 计数 快速选择 排序 堆（优先队列） 👍 902 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // map+数组
  let map = new Map(), arr = [...new Set(nums)]
  nums.map((num) => {
    if(map.has(num)) map.set(num, map.get(num)+1)
    else map.set(num, 1)
  })

  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);

  //最小堆
  // let map =new Map()
  // let uniqueNums = []
  // for (let i =0;i<nums.length;i++){
  //   if(map.has(nums[i])){
  //     map.set(nums[i],map.get(nums[i])+1)
  //   }else {
  //     map.set(nums[i],1)
  //     uniqueNums.push(nums[i])
  //   }
  // }
  // const heap = []
  // const swap = (i,j)=>{
  //   const temp = heap[i]
  //   heap[i]= heap[j]
  //   heap[j] = temp
  // }
  // const bubbleUp=(index)=>{
  //   while (index>0){
  //     const parent = (index-1)/2
  //     if(map[heap[parent]]>map[heap[index]]){
  //       swap(parent,index)
  //       index = parent
  //     }else{
  //       break
  //     }
  //   }
  // }
  // const bubbleDown=(index)=>{
  //   while (2*index+1<heap.length){
  //     let child= 2*index+1
  //     if(child+1<heap.length&& map[heap[child+1]]<map[heap[child]]){
  //       child++
  //     }
  //     if(map[heap[index]]>map[heap[child]]){
  //       swap(index,child)
  //       index= child
  //     }else {
  //       break
  //     }
  //   }
  // }
  // for (const num of uniqueNums) {
  //   if (heap.length < k) { // heap数组的长度还不够k
  //     heap.push(num);      // 推入heap数组
  //     bubbleUp(heap.length - 1); // 执行上浮，频率小的上浮上去
  //   } else if (map[num] > map[heap[0]]) { // 如果当前数字的频次比堆顶数字的频率要大
  //     heap[0] = num; // 堆顶的数字要更换
  //     bubbleDown(0); // 然后要做下沉，下沉到合适的位置
  //   }
  // }
  // return heap.sort((a, b) => { // 最终它前面是频次少的，最后返回是要逆序回来
  //   return map[b] - map[a];
  // });
};
//leetcode submit region end(Prohibit modification and deletion)
