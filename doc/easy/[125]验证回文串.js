//给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
//
// 说明：本题中，我们将空字符串定义为有效的回文串。
//
//
//
// 示例 1:
//
//
//输入: "A man, a plan, a canal: Panama"
//输出: true
//解释："amanaplanacanalpanama" 是回文串
//
//
// 示例 2:
//
//
//输入: "race a car"
//输出: false
//解释："raceacar" 不是回文串
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 2 * 10⁵
// 字符串 s 由 ASCII 字符组成
//
// Related Topics 双指针 字符串 👍 426 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const isValid = c=>{
    return (c>= 'a' && c<= 'z') || (c>='A' && c<='Z') || (c>= '0' && c<='9')
  }
  s = s.toUpperCase()
  let l = 0,r = s.length-1
  while (r>l){
    if(!isValid(s[l])){
      l++
      continue
    }
    if(!isValid(s[r])){
      r--
      continue
    }
    if(s[l] !== s[r])return false
    l++
    r--
  }
  return true
};
//leetcode submit region end(Prohibit modification and deletion)



