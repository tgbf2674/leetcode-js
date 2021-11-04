//给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
//
// 整数除法仅保留整数部分。
//
//
//
//
//
// 示例 1：
//
//
//输入：s = "3+2*2"
//输出：7
//
//
// 示例 2：
//
//
//输入：s = " 3/2 "
//输出：1
//
//
// 示例 3：
//
//
//输入：s = " 3+5 / 2 "
//输出：5
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 3 * 10⁵
// s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
// s 表示一个 有效表达式
// 表达式中的所有整数都是非负整数，且在范围 [0, 2³¹ - 1] 内
// 题目数据保证答案是一个 32-bit 整数
//
//
//
// Related Topics 栈 数学 字符串 👍 486 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let num = []
  s = s + '+'
  let prevOp = '+'
  let cur = 0
  for (let i = 0;i<s.length;i++){
    if(s[i]>='0'&&s[i]<='9'){
      cur = cur *10 + s[i].charCodeAt(0)-'0'.charCodeAt(0)
    }else if(s[i]=== ' '){
      continue
    }else {
      if (prevOp === '+') {
        num.push(cur)
      } else if (prevOp === '-') {
        num.push(-1 * cur)
      } else if (prevOp === '*') {
        num[num.length - 1] *= cur
      } else if (prevOp === '/') {
        num[num.length - 1] = (num[num.length - 1]/cur) |0
      }
      prevOp = s[i]
      cur = 0
    }
  }
  return num.reduce((a,b)=> a+b)
};
//leetcode submit region end(Prohibit modification and deletion)

