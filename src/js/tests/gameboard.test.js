import Gameboard from "../factories/gameboard";

describe("Test the gameboard", () => {
    test("Create ship at coords", () => {
        const board = new Gameboard();
        expect(board.addShip(board.shipTypes.patrolBoat, 2, 2, false)).toBe(true);
    });
    
    test("if ship gets hit accurately", () => {
        const board = new Gameboard();
        board.addShip(board.shipTypes.patrolBoat, 2, 3, false);
        board.receiveAttack(2, 3);
        expect(board.board[2][3]).toBe(board.tileTypes.hit);
    });
    
    test("if misses get recorded", () => {
        const board = new Gameboard();
        board.addShip(board.shipTypes.patrolBoat, 2, 3, false);
        board.receiveAttack(4, 5);
        expect(board.board[4][5]).toBe(board.tileTypes.missed);
    });
    
    test("if all ships have sunk", () => {
        const board = new Gameboard();
        expect(board.addShip(board.shipTypes.carrier, 3, 0, false)).toBe(true);
        expect(board.addShip(board.shipTypes.submarine, 1, 8, true)).toBe(true);
        expect(board.addShip(board.shipTypes.destroyer, 7, 8, true)).toBe(true);
        expect(board.addShip(board.shipTypes.patrolBoat, 7, 1, false)).toBe(true);
        expect(board.addShip(board.shipTypes.battleship, 5, 5, true)).toBe(true);
        
        for (let i = 3, j = 0; j < board.shipTypes.carrier; ++j)
            expect(board.receiveAttack(i, j)).toBeTruthy();
        
        for (let i = 1, j = 8; i < board.shipTypes.submarine + 1; ++i)
            expect(board.receiveAttack(i, j)).toBeTruthy();
        
        for (let i = 7, j = 8; i < board.shipTypes.destroyer + 7; ++i)
            expect(board.receiveAttack(i, j)).toBeTruthy();
            
        for (let i = 7, j = 1; j < board.shipTypes.patrolBoat + 1; ++j)
            expect(board.receiveAttack(i, j)).toBeTruthy();
            
        for (let i = 5, j = 5; i < board.shipTypes.battleship + 5; ++i)
            expect(board.receiveAttack(i, j)).toBeTruthy();
        
        expect(board.allSunk()).toBeTruthy();
    });
});