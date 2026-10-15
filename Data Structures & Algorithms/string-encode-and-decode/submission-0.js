class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // console.log(strs)
        let s = '';
        for(let i=0;i<strs.length;i++){
            let subs = strs[i];
            for(const c of subs){
                s += c.charCodeAt(0) + '#'
            }
            s+= '/'
        }
        return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = str.split("/");
        let ans = [];
        for(let word of arr){
            let letters = word.split("#");
            letters.pop()
            let wr = '';
            for(let i=0;i<letters.length;i++){
                let val = Number(letters[i]);
                wr += String.fromCharCode(val)
            }
            ans.push(wr)
        }
        ans.pop()
        // console.log(ans)
        return ans
    }
}
