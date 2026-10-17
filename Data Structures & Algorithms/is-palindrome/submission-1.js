class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // 00000 5/2 = 2
        s = [...s.toLowerCase()]
    .filter(c => (c >= "a" && c <= "z") || (c >= "0" && c <= "9"))
    .join("");

        // console.log(s)
        let len = s.length
        for(let i=0;i<len/2;i++){
            // console.log(s[i],s[len-i-1])
            if(s[i] != s[len - i - 1]){
                return false
            }
        }
        return true
    }
}
