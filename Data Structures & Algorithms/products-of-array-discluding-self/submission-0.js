class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let cto = 0
        let rp = 1
        for(let i=0;i<nums.length;i++){
            if(nums[i] == 0){
                cto+=1;
                if(cto>1){
                    return new Array(nums.length).fill(0)
                }
            }else{
                rp = rp*nums[i]
            }
        }
        for(let i=0;i<nums.length;i++){
            if(nums[i] == 0){
                nums[i] = rp
            }else{
                nums[i] = rp/nums[i]
                if(cto==1){
                    nums[i] = 0
                }
            }
        }
        return nums
    }
}
