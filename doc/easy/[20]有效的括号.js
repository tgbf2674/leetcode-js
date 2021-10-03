//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
//
//
// 示例 1：
//
//
//输入：s = "()"
//输出：true
//
//
// 示例 2：
//
//
//输入：s = "()[]{}"
//输出：true
//
//
// 示例 3：
//
//
//输入：s = "(]"
//输出：false
//
//
// 示例 4：
//
//
//输入：s = "([)]"
//输出：false
//
//
// 示例 5：
//
//
//输入：s = "{[]}"
//输出：true
//
//
//
// 提示：
//
//
// 1 <= s.length <= 10⁴
// s 仅由括号 '()[]{}' 组成
//
// Related Topics 栈 字符串 👍 2680 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  if(s.length%2 === 1)return false
  for (let item of s){
    switch (item){
      case "{":
      case "[":
      case "(":
        stack.push(item)
        break
      case "]":
        if(stack.pop()!== "[")return false
        break
      case "}":
        if(stack.pop()!== "{")return false
        break
      case ")":
        if(stack.pop()!== "(")return false
        break
    }
  }
  return !stack.length
};
//leetcode submit region end(Prohibit modification and deletion)
