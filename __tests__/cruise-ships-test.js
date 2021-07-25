const Ship = require('../src/cruise-ships.js')

describe("constructor", () => {
    it("can be instantiated", () => {
const ship = new Ship("Dover")
        expect(new Ship()).toBeInstanceOf(Object)
    });
it("has a starting port", () => {
    const ship = new Ship("Dover")
    expect(ship.startingPort).toBe("Dover")
});
});

describe("setSail method", () => {
    const ship = new Ship("Dover")
    ship.setSail()
it("can set sail", () => {
    expect(Ship.startingPort).toBeFalsy()
});
});