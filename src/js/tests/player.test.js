import Player from "../factories/player";
import Gameboard from "../factories/gameboard";

test("if attack", () => {
    const player = new Player();
    const board = new Gameboard();
    expect(board.addShip(board.shipTypes.patrolBoat, 7, 1, false)).toBe(true);
    
    player.attack(board, 7, 1);
    player.attack(board, 7, 2);
    
    expect(board.allSunk()).toBeTruthy();
});

test("if random attack", () => {
    const AI = new Player();
    const board = new Gameboard();
    expect(board.addShip(board.shipTypes.carrier, 3, 0, false)).toBe(true);
    expect(board.addShip(board.shipTypes.submarine, 1, 8, true)).toBe(true);
    expect(board.addShip(board.shipTypes.destroyer, 7, 8, true)).toBe(true);
    expect(board.addShip(board.shipTypes.patrolBoat, 7, 1, false)).toBe(true);
    expect(board.addShip(board.shipTypes.battleship, 5, 5, true)).toBe(true);
    
    while (!board.allSunk()) {
        AI.randomAttack(board);
    }
    expect(board.allSunk()).toBeTruthy();
});