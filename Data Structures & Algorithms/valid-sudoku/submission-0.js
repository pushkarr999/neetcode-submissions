class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let bl = 0;
        let sec = 0;
        while(bl<3){
            while(sec < 3){
                let arr = new Array(9).fill(0);
                for(let j=3*sec;j<3*sec+3;j++){
                    for(let i=0;i<3;i++){
                        console.log((i%(3+bl))+3*bl,j)
                        let num = board[(i%(3+bl))+3*bl][j];
                        if(arr[num-1] > 0){
                            return false
                        }
                        else{
                            arr[num-1]+=1
                        }
                    }
                }
                console.log("eob")
                sec+=1;
            }
            bl+=1
        }
        for(let x=0;x<9;x++){
            let arr = new Array(9).fill(0);
            for(let y=0;y<9;y++){
                let num = board[x][y];
                if(arr[num-1] > 0){
                    return false
                }
                else{
                    arr[num-1]+=1
                }
            }
        }
        for(let y=0;y<9;y++){
            let arr = new Array(9).fill(0);
            for(let x=0;x<9;x++){
                let num = board[x][y];
                if(arr[num-1] > 0){
                    return false
                }
                else{
                    arr[num-1]+=1
                }
            }
        }
        return true
        
    }
}
