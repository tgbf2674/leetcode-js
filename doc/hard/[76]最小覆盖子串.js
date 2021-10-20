//给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
//
//
//
// 注意：
//
//
// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。
//
//
//
//
// 示例 1：
//
//
//输入：s = "ADOBECODEBANC", t = "ABC"
//输出："BANC"
//
//
// 示例 2：
//
//
//输入：s = "a", t = "a"
//输出："a"
//
//
// 示例 3:
//
//
//输入: s = "a", t = "aa"
//输出: ""
//解释: t 中两个字符 'a' 均应包含在 s 的子串中，
//因此没有符合条件的子字符串，返回空字符串。
//
//
//
// 提示：
//
//
// 1 <= s.length, t.length <= 10⁵
// s 和 t 由英文字母组成
//
//
//
//进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？ Related Topics 哈希表 字符串 滑动窗口 👍 1381 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = {}
  let window = {}
  for (let a of t){
    need[a] = (need[a] || 0)+1
  }
  let l = 0,r = 0
  let valid = 0
  let start = 0,len = Number.MAX_VALUE
  while (r<s.length){
    let c = s[r]
    r++
    if(need[c]) {
      window[c] = (window[c] || 0) + 1
      if (window[c] === need[c]) {
        valid++
      }
    }
    while (valid === Object.keys(need).length){
      if(r-l<len) {
        start = l
        len = r - l
      }
      let d = s[l]
      l++
      if(need[d]) {
        if (window[d] === need[d]) {
          valid--
        }
        window[d]--
      }
    }
  }
  return len === Number.MAX_VALUE ? '' : s.substr(start,len)
}

//leetcode submit region end(Prohibit modification and deletion)

