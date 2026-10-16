class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // ---------- 1. Check every row ----------
        for (let r = 0; r < 9; r++) {
            const seen = new Set();            // digits found in this row so far
            for (let c = 0; c < 9; c++) {
                const num = board[r][c];
                if (num === ".") continue;     // empty cell, nothing to check
                if (seen.has(num)) return false; // digit repeated in this row
                seen.add(num);
            }
        }

        // ---------- 2. Check every column ----------
        for (let c = 0; c < 9; c++) {
            const seen = new Set();            // digits found in this column so far
            for (let r = 0; r < 9; r++) {      // move down the column
                const num = board[r][c];
                if (num === ".") continue;
                if (seen.has(num)) return false;
                seen.add(num);
            }
        }

        // ---------- 3. Check every 3x3 block ----------
        // The board is a 3x3 grid of blocks:
        //
        //            bc=0    bc=1    bc=2
        //   br=0   [0..2]  [0..2]  [0..2]   <- rows 0-2
        //   br=1   [3..5]  [3..5]  [3..5]   <- rows 3-5
        //   br=2   [6..8]  [6..8]  [6..8]   <- rows 6-8
        //           cols    cols    cols
        //           0-2     3-5     6-8
        //
        // Block (br, bc) starts at row 3*br and column 3*bc,
        // and covers 3 rows and 3 columns from there.

        for (let br = 0; br < 3; br++) {          // which block row: top, middle, bottom
            for (let bc = 0; bc < 3; bc++) {      // which block column: left, middle, right
                const seen = new Set();           // fresh set for each block

                const startRow = 3 * br;          // first row of this block
                const startCol = 3 * bc;          // first column of this block

                // Walk the 9 cells inside this block
                for (let r = startRow; r < startRow + 3; r++) {
                    for (let c = startCol; c < startCol + 3; c++) {
                        const num = board[r][c];
                        if (num === ".") continue;
                        if (seen.has(num)) return false; // digit repeated in this block
                        seen.add(num);
                    }
                }
            }
        }

        // No duplicates found in any row, column or block
        return true;
    }
}