class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let s = new Map();
        for(let i=0;i<nums.length;i++){
            if(s.has(nums[i])){
                s.set(nums[i], s.get(nums[i]) + 1);
            }else{
                s.set(nums[i], 1);
            }
        }
        let nm = new Map([...s.entries()].sort((a,b) => b[1] - a[1]));
        let ans = [];
        let i =0;
        for(let key of nm.keys()){
            i++;
            if(i>k)break;
            ans.push(key);
        }
        return ans;
    }
}
