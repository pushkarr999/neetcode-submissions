class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    const set = new Set(nums);
    let ans = 0;

    for (const n of set) {
        if (set.has(n - 1)) continue;   // not the start of a sequence

        let len = 1;
        while (set.has(n + len)) len++; // count upward from the start
        ans = Math.max(ans, len);
    }
    return ans;
}
}
