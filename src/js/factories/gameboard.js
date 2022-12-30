import Ship from "./ship";

class Gameboard {
    #boardSize = 10;
    #board;
    
    static shipTypes = {
        carrier: 5,
        battleship: 4,
        destroyer: 3,
        submarine: 3,
        patrolBoat: 2
    }
    
    static tileTypes = {
        empty: 0,
        missed: 1,
        ship: 2,
        hit: 3
    }
    
    static tileColors = ['white', 'grey', 'white', 'red'];
    
    #ships = [];
    
    constructor() {
        this.#board = new Array(this.#boardSize);
        for (let i = 0; i < this.#boardSize; ++i) {
            this.#board[i] = new Array(this.#boardSize);
        }
        
        for (let i = 0; i < this.#boardSize; ++i) {
            for (let j = 0; j < this.#boardSize; ++j) {
                this.#board[i][j] = Gameboard.tileTypes.empty;
            }
        }
    }
    
    get tileColors() {
        return Gameboard.tileColors;
    }
    
    get tileTypes() {
        return Gameboard.tileTypes;
    }
    
    get shipTypes() {
        return Gameboard.shipTypes;
    }
    
    get board() {
        return this.#board;
    }
    
    get boardSize() {
        return this.#boardSize;
    }
    
    #fitsOnBoard(length, direction) {
        if (length <= this.#boardSize - direction && direction >= 0) return true;
        return false;
    }
    
    isPlacementPossible(length, row, column, isVertical) {
        if (isVertical && this.#fitsOnBoard(length, row)) {
            let fits = true;
            
            const j = column;
            for (let i = row; i < length + row; ++i) {
                if (this.#board[i][j] === Gameboard.tileTypes.ship) fits = false;
            }
            return fits;
        } else if (!isVertical && this.#fitsOnBoard(length, column)) {
            let fits = true;
            
            const i = row;
            for (let j = column; j < length + column; ++j) {
                if (this.#board[i][j] === Gameboard.tileTypes.ship) fits = false;
            }
            return fits;
        }
        
        return false;
    }
    
    addShip(length, row, column, isVertical) {
        if (!this.isPlacementPossible(length, row, column, isVertical)) return false;
        
        // Add ship
        this.#ships.push(new Ship(length));
        if (isVertical) {
            const j = column;
            for (let i = row; i < length + row; ++i)
                this.#board[i][j] = Gameboard.tileTypes.ship;
        } else {
            const i = row;
            for (let j = column; j < length + column; ++j)
                this.#board[i][j] = Gameboard.tileTypes.ship;
        }
        
        return true;
    }
    
    allSunk() {
        let sunk = true;
        
        for (let i = 0; i < this.#boardSize; ++i) {
            for (let j = 0; j < this.#boardSize; ++j) {
                if (this.#board[i][j] === Gameboard.tileTypes.ship) sunk = false;
            }
        }
        
        return sunk;
    }
    
    receiveAttack(row, column) {
        if (this.#board[row][column] === Gameboard.tileTypes.ship) {
            this.#board[row][column] = Gameboard.tileTypes.hit;
            return true;
        }
        
        this.#board[row][column] = Gameboard.tileTypes.missed;
        return false;
    }
    
    reset() {
        this.#ships = [];
        
        for (let i = 0; i < this.#boardSize; ++i) {
            for (let j = 0; j < this.#boardSize; ++j) {
                this.#board[i][j] = Gameboard.tileTypes.empty;
            }
        }
    }
    
    print() {
        for (let i = 0; i < this.#boardSize; ++i) {
            let arr = '';
            
            for (let j = 0; j < this.#boardSize; ++j) {
                arr += ([this.#board[i][j]]) + ' ';
            }
            console.log(arr);
        }
    }
}

export default Gameboard;