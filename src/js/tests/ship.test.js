import Ship from '../factories/ship';

test("Test length", () => {
    const ship = new Ship(5);
    expect(ship.getLength()).toBe(5);
});

test("Ship isSunk", () => {
    const ship = new Ship(2);
    expect(ship.isSunk()).toBe(false);
    
    ship.hit(0);
    expect(ship.isSunk()).toBe(false);
    
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
});