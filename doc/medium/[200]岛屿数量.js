//给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
//
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
//
// 此外，你可以假设该网格的四条边均被水包围。
//
//
//
// 示例 1：
//
//
//输入：grid = [
//  ["1","1","1","1","0"],
//  ["1","1","0","1","0"],
//  ["1","1","0","0","0"],
//  ["0","0","0","0","0"]
//]
//输出：1
//
//
// 示例 2：
//
//
//输入：grid = [
//  ["1","1","0","0","0"],
//  ["1","1","0","0","0"],
//  ["0","0","1","0","0"],
//  ["0","0","0","1","1"]
//]
//输出：3
//
//
//
//
// 提示：
//
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'
//
// Related Topics 深度优先搜索 广度优先搜索 并查集 数组 矩阵 👍 1391 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  // dfs思路
  // let count = 0
  // const dfs = (i,j,grid)=>{
  //   if(i<0||i>=grid.length||j<0||j>=grid[0].length||grid[i][j] === '0')return
  //     grid[i][j] = '0'
  //     dfs(i,j+1,grid)
  //     dfs(i,j-1,grid)
  //     dfs(i+1,j,grid)
  //     dfs(i-1,j,grid)
  // }
  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid[0].length; j++) {
  //     if (grid[i][j] === '1') {
  //       count++
  //       dfs(i, j, grid)
  //     }
  //   }
  // }
  // return count、

//  bfs思路
  let count = 0
  let queue = []
  const bfs = (queue,grid)=>{
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]]
    while(queue.length){
      const cur = queue.shift()
      for (const dir of dirs) {
        const x = cur[0]+dir[0]
        const y = cur[1] +dir[1]
        if(x<0||x>=grid.length || y<0|| y>=grid[0].length || grid[x][y] === '0')continue
        grid[x][y] = '0'
        queue.push([x,y])
      }
    }
  }
  for (let i = 0;i<grid.length;i++){
    for (let j = 0;j<grid[0].length;j++){
      if(grid[i][j] === '1'){
        grid[i][j] = '0'
        queue.push([i,j])
        count++
        bfs(queue,grid)
      }
    }
  }
  return count
}

//leetcode submit region end(Prohibit modification and deletion)
