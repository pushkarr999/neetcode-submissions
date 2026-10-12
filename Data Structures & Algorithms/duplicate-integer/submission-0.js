class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const s = new Set();
        for(let i of nums){
            if(s.has(i)){
                return true;
            }else{
                s.add(i);
            }
        }
        return false;
    }
}
