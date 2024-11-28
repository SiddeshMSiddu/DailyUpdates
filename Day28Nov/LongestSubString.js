function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        left = Math.max(left, map.get(s[i]) + 1);
      }
      map.set(s[i], i);
      maxLength = Math.max(maxLength, i - left + 1);
    }
  
    return maxLength;
  }
  
  console.log(lengthOfLongestSubstring("abcabcbb"));  
  console.log(lengthOfLongestSubstring("bbbbb"));    
  console.log(lengthOfLongestSubstring("pwwkew"));    
  