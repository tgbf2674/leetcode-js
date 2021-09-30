//给你一个字符串 s，找到 s 中最长的回文子串。
//
//
//
// 示例 1：
//
//
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
//
//
// 示例 2：
//
//
//输入：s = "cbbd"
//输出："bb"
//
//
// 示例 3：
//
//
//输入：s = "a"
//输出："a"
//
//
// 示例 4：
//
//
//输入：s = "ac"
//输出："a"
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成
//
// Related Topics 字符串 动态规划 👍 4159 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length<2)return s
  let res = ''
  const helper = (m,n)=>{
    while(m>=0 && n<s.length&& s[m]===s[n]){
        m--
        n++
    }
    if(n-m-1>res.length){
      res = s.slice(m+1,n)
    }
  }
  for (let i = 0;i<s.length;i++){
    helper(i,i)
    helper(i,i+1)
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)
