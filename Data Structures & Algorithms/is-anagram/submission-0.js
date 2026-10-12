class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arr = new Array(26).fill(0);
        for(let char of s){
            arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for(let char of t){
            arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
        for(let a of arr){
            if(a!=0){
                return false;
            }
        }
        return true;
    }
}
