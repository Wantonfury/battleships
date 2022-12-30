class Player {
    #active = false;
    
    get active() {
        return this.#active;
    }
    
    set active(value) {
        this.#active = value;
    }
    
    attack(gameboard, targetX, targetY) {
        if (this.alreadyAttacked(gameboard, targetX, targetY)) return false;
        
        gameboard.receiveAttack(targetX, targetY);
        return true;
    }
    
    randomAttack(gameboard) {
        let targetX = Math.floor(Math.random() * 10);
        let targetY = Math.floor(Math.random() * 10);
        
        while (this.alreadyAttacked(gameboard, targetX, targetY)) {
            targetX = Math.floor(Math.random() * 10);
            targetY = Math.floor(Math.random() * 10);
        }
        
        gameboard.receiveAttack(targetX, targetY);
    }
    
    alreadyAttacked(gameboard, row, column) {
        if (gameboard.board[row][column] === gameboard.tileTypes.empty ||
            gameboard.board[row][column] === gameboard.tileTypes.ship) return false;
        return true;
    }
}

export default Player;