//现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中
//prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。
//
//
// 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
//
//
// 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。
//
//
//
// 示例 1：
//
//
//输入：numCourses = 2, prerequisites = [[1,0]]
//输出：[0,1]
//解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
//
//
// 示例 2：
//
//
//输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
//输出：[0,2,1,3]
//解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
//因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
//
// 示例 3：
//
//
//输入：numCourses = 1, prerequisites = []
//输出：[0]
//
//
//
//提示：
//
//
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// 所有[ai, bi] 匹配 互不相同
//
//
//
//
// 拓展：
//
//
// 这个问题相当于查找一个循环是否存在于有向图中。如果存在循环，则不存在拓扑排序，因此不可能选取所有课程进行学习。
// 通过 DFS 进行拓扑排序 - 一个关于Coursera的精彩视频教程（21分钟），介绍拓扑排序的基本概念。
//
// 拓扑排序也可以通过 BFS 完成。
//
//
// Related Topics 深度优先搜索 广度优先搜索 图 拓扑排序 👍 499 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0)
  let map = {}
  for (let i = 0;i<prerequisites.length;i++){
    inDegree[prerequisites[i][0]]++
    if(map[prerequisites[i][1]]){
      map[prerequisites[i][1]].push(prerequisites[i][0])
    }else {
      map[prerequisites[i][1]] =[prerequisites[i][0]]
    }
  }
  let res = []
  let queue = []
  for (let i = 0;i<numCourses;i++){
    if (inDegree[i] === 0){
      queue.push(i)
    }
  }
  while (queue.length){
    let selected = queue.shift()
    res.push(selected)
    let toEnQueue = map[selected]
    if(toEnQueue && toEnQueue.length){
      for (let i = 0;i<toEnQueue.length;i++){
       inDegree[toEnQueue[i]]--
       if(inDegree[toEnQueue[i]]===0){
         queue.push(toEnQueue[i])
       }
      }
    }
  }
  return res.length === numCourses ? res : []
};
//leetcode submit region end(Prohibit modification and deletion)
