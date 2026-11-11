class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let st = 0;
        let en = numbers.length - 1;
        while(st < en){
            if(numbers[st] + numbers[en] > target){
                en-=1;
            }
            else if(numbers[st] + numbers[en] < target){
                st+=1;
            }else{
                return [st+1,en+1];
            }
        }
        return [st+1,en+1];
    }
}
