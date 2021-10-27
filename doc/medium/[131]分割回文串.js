//给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
//
// 回文串 是正着读和反着读都一样的字符串。
//
//
//
// 示例 1：
//
//
//输入：s = "aab"
//输出：[["a","a","b"],["aa","b"]]
//
//
// 示例 2：
//
//
//输入：s = "a"
//输出：[["a"]]
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 16
// s 仅由小写英文字母组成
//
// Related Topics 字符串 动态规划 回溯 👍 864 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  // 方案一： dfs
  // let res = []
  // const dfs = (temp,start)=>{
  //   if(start === s.length){
  //     res.push(temp.slice())
  //     return
  //   }
  //   for (let i = start;i<s.length;i++){
  //     if(isPali(s,start,i)) {
  //       temp.push(s.substring(start, i+1))
  //       dfs(temp,i+1)
  //       temp.pop()
  //     }
  //   }
  // }
  // dfs([],0)
  // return res

//  方案二： dfs + 记忆化（不重复计算回文序列）--效率低
  let res = []
  const memo = new Array(s.length)
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(s.length)
  }
  const dfs = (temp, start) => {
    if (start === s.length) {
      res.push(temp.slice())
      return
    }
    for (let i = start; i < s.length; i++) {
      if (memo[start][i] === false) {
        continue
      }
      if (memo[start][i] || isPali(s, start, i, memo)) {
        temp.push(s.substring(start, i + 1))
        dfs(temp, i + 1)
        temp.pop()
      }
    }
  }
  dfs([],0)
  return res
}
const isPali = (s,l,r,memo)=>{
  while (l<r){
    if(s[l]!== s[r]){
      memo[l][r] = false
      return false
    }
    l++
    r--
  }
  memo[l][r] = true
  return true
}
// 方案一：
// const isPali = (s,l,r)=>{
//   while (r>l){
//     if(s[l]!== s[r]){
//       return false
//     }
//     l++
//     r--
//   }
//   return true
// }


//leetcode submit region end(Prohibit modification and deletion)

