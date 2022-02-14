
function ChessBoard(x, y) {
    this.x = x;
    this.y = y;
    
    this.getBoard = () => {
        let x = this.x
        let y = this.y

        let c2 = "#"
        let c1 = "@"

        let res = ''
        for (let i = 0; i < y; i++) {
            for (let j= 0; j < x; j++) {
                res += ((i + j) % 2 == 0 ? c2 : c1) + " "
            }
            res += '\n'
        }

        return res
    }; 

    return this
}

let newBoard = ChessBoard(8,8)
console.log(newBoard.getBoard());