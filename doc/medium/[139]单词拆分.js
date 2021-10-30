//给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
//
// 说明：
//
//
// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
//
//
// 示例 1：
//
// 输入: s = "leetcode", wordDict = ["leet", "code"]
//输出: true
//解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
//
//
// 示例 2：
//
// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
//输出: true
//解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//     注意你可以重复使用字典中的单词。
//
//
// 示例 3：
//
// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
//输出: false
//
// Related Topics 字典树 记忆化搜索 哈希表 字符串 动态规划 👍 1222 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */



var wordBreak = function (s, wordDict) {
  // dfs + 记忆搜索
  // const len = s.length
  // const wordSet = new Set(wordDict)
  // const memo = new Array(len)
  // const canBreak = (start)=>{
  //   if(start === len)return true
  //   if(memo[start] !== undefined)return memo[start]
  //   for (let i = start+1;i<=len;i++){
  //     let prefix = s.slice(start,i)
  //     if(wordSet.has(prefix) && canBreak(i)){
  //       memo[start] = true
  //       return true
  //     }
  //   }
  //   memo[start] = false
  //   return false
  // }
  // return canBreak(0)

//  动态规划
//   const wordSet = new Set(wordDict)
//   const len = s.length
//   const dp = new Array(len+1).fill(false)
//   dp[0] = true
//   for (let i = 1;i<=len;i++){
//     for (let j = i-1;j>=0;j--){
//       let suffix = s.slice(j,i)
//       if(wordSet.has(suffix) && dp[j]){
//         dp[i] = true
//         break
//       }
//     }
//   }
//   return dp[len]

//  动态规划优化
  const wordSet = new Set(wordDict)
  const len = s.length
  const dp = new Array(len+1).fill(false)
  dp[0]=true
  for (let i = 1;i<=len ; i++){
    for (let j = i-1;j>= 0 ;j--){
      if(dp[i])break
      if(!dp[j])continue
      let suffix = s.slice(j,i)
      if(wordSet.has(suffix) && dp[j]){
        dp[i] = true
        break
      }
    }
  }
  return dp[len]
}
//leetcode submit region end(Prohibit modification and deletion)
