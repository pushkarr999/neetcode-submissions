class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const s = new Map();

        for (let i = 0; i < nums.length; i++) {
            s.set(nums[i], i);
        }

        for (let i = 0; i < nums.length; i++) {
            const f = target - nums[i];

            if (s.has(f) && s.get(f) !== i) {
                return [i, s.get(f)];
            }
        }

        return [];
    }
}
