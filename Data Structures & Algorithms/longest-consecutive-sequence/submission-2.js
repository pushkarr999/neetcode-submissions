class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0
        nums = [...new Set(nums)].sort((a,b) => a - b)
        console.log(nums)
        let ans = 1;
        let loc = 1;
        for(let i=1;i<nums.length;i++){
            if(nums[i] - nums[i-1] == 1){
                loc+=1;
                ans = Math.max(loc,ans)
            }else{
                loc = 1;
            }
        }
        return ans
    }
}
