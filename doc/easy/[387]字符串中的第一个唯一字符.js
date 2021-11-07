//给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
//
//
//
// 示例：
//
// s = "leetcode"
//返回 0
//
//s = "loveleetcode"
//返回 2
//
//
//
//
// 提示：你可以假定该字符串只包含小写字母。
// Related Topics 队列 哈希表 字符串 计数 👍 458 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const position = new Map();
  const n = s.length;
  for (let [i, ch] of Array.from(s).entries()) {
    if (position.has(ch)) {
      position.set(ch, -1);
    } else {
      position.set(ch, i);
    }
  }
  let first = n;
  for (let pos of position.values()) {
    if (pos !== -1 && pos < first) {
      first = pos;
    }
  }
  if (first === n) {
    first = -1;
  }
  return first;
};
//leetcode submit region end(Prohibit modification and deletion)
