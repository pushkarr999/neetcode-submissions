class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};
        for(let i=0;i<strs.length;i++){
            const h = new Array(26).fill(0);
            for(let j=0;j<strs[i].length;j++){
                h[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            let st = '';
            for(let k=0;k<26;k++){
                st+=h[k] + '#'; //delimeter added to avoid adjacent counting of frequency
            }
            if(obj[st]){
                obj[st].push(strs[i]);
            }else{
                obj[st] = [strs[i]];
            }
        }
        return Object.values(obj);
    }
}
