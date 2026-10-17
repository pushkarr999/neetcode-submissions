class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length ==0) return 0
        let obj = {};
        for(let n of nums){
            obj[n] = 1;
        }
        // console.log(obj)
        let loc = 1;
        let ans = 1;
        for(let key of Object.entries(obj)){
            console.log(key[0])
            if(obj[(Number(key[0])) - 1]){
                
            }else{
               let k = Number(key[0])
                while(obj[Number(k)+1]){
                    loc += 1;
                    k+=1;
                }
                ans = Math.max(loc,ans);
                loc=1
            }

        }
        return ans
    }
}
