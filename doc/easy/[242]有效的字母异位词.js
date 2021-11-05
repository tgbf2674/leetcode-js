//给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
//
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
//
//
//
// 示例 1:
//
//
//输入: s = "anagram", t = "nagaram"
//输出: true
//
//
// 示例 2:
//
//
//输入: s = "rat", t = "car"
//输出: false
//
//
//
// 提示:
//
//
// 1 <= s.length, t.length <= 5 * 10⁴
// s 和 t 仅包含小写字母
//
//
//
//
// 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
// Related Topics 哈希表 字符串 排序 👍 445 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 排序后变为字符串比较
  // return s.split('').sort().join('') === t.split('').sort().join('')

//  hash表
  const hash = {}
  for (const c of s){
    if(hash[c] === undefined){
      hash[c] = 1
    }else {
      hash[c]++
    }
  }
  for (const c of t){
    if(hash[c] === undefined || hash[c] === 0){
      return false
    }
    hash[c]--
  }
  for (const key in hash){
    if(hash[key] !== 0){
      return false
    }
  }
  return true
};
//leetcode submit region end(Prohibit modification and deletion)
