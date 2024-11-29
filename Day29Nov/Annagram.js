function areAnagrams(word1, word2) {

    if (word1.length !== word2.length) {
        return false;
    }
    let charCount1 = {};
    let charCount2 = {};

    for (let i = 0; i < word1.length; i++) {
        let char = word1[i];
        if (!charCount1[char]) {
            charCount1[char] = 0;
        }
        charCount1[char]++;
    }

    for (let i = 0; i < word2.length; i++) {
        let char = word2[i];
        if (!charCount2[char]) {
            charCount2[char] = 0;
        }
        charCount2[char]++;
    }

    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}
console.log(areAnagrams("hello", "heolo"))
console.log(areAnagrams("abcde", "acbed"))
