//给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的
//句子。
//
// 说明：
//
//
// 分隔时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
//
//
// 示例 1：
//
// 输入:
//s = "catsanddog"
//wordDict = ["cat", "cats", "and", "sand", "dog"]
//输出:
//[
//  "cats and dog",
//  "cat sand dog"
//]
//
//
// 示例 2：
//
// 输入:
//s = "pineapplepenapple"
//wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
//输出:
//[
//  "pine apple pen apple",
//  "pineapple pen apple",
//  "pine applepen apple"
//]
//解释: 注意你可以重复使用字典中的单词。
//
//
// 示例 3：
//
// 输入:
//s = "catsandog"
//wordDict = ["cats", "dog", "sand", "and", "cat"]
//输出:
//[]
//
// Related Topics 字典树 记忆化搜索 哈希表 字符串 动态规划 回溯 👍 521 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length
  let wordSet = new Set(wordDict)
  let memo = new Array(len)
  const dfs = (start)=>{
    if(memo[start])return memo[start]
    if(start>len-1)return [[]]
    let res = []
    for (let i = start+1;i<=len;i++){
      const word = s.slice(start,i)
      if(wordSet.has(word)){
        const restRes = dfs(i)
        for (const restWord of restRes) {
          res.push([word].concat(restWord))
        }
      }
    }
    memo[start]=res
    return res
  }
  return dfs(0).map(word =>{
    return word.join(' ')
  })
};
//leetcode submit region end(Prohibit modification and deletion)
