class Render {
    #gameboard = {
        left: null,
        right: null
    }
    
    #tileColors = ['white', 'green', 'white', 'red'];
    
    constructor(gameboardLeft, gameboardRight, cbLeft, cbRight) {
        this.#createGameboard(gameboardLeft, 'left', cbLeft);
        this.#createGameboard(gameboardRight, 'right', cbRight);
    }
    
    #createGameboard(gameboard, side, cb) {
        const gameboardDiv = document.querySelector('#gameboard-' + side);
        const size = gameboard.boardSize();
        
        this.#gameboard[side] = new Array(size);
        for (let i = 0; i < size; ++i)
            this.#gameboard[side][i] = new Array(size);
        
        for (let i = 0; i < size; ++i) {
            for (let j = 0; j < size; ++j) {
                this.#gameboard[side][i][j] = document.createElement('button');
                this.#gameboard[side][i][j].classList.add('tile');
                this.#gameboard[side][i][j].textContent = '';
                this.#gameboard[side][i][j].addEventListener('click', cb);
                
                gameboardDiv.appendChild(this.#gameboard[side][i][j]);
            }
        }
    }
    
    #renderGameboard(gameboard, side) {
        const gameboardDiv = document.querySelector('#gameboard-' + side);
        const size = gameboard.boardSize();
        
        for (let i = 0; i < size; ++i) {
            for (let j = 0; j < size; ++j) {
                this.#gameboard[side][i][j].style.backgroundColor = this.#tileColors[gameboard.board[i][j]];
            }
        }
    }
    
    renderGameboards(gameboardLeft, gameboardRight) {
        this.#renderGameboard(gameboardLeft, 'left');
        this.#renderGameboard(gameboardRight, 'right');
    }
}

export default Render;