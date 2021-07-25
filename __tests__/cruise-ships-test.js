const Ship = require('../src/cruise-ships.js')

describe("constructor", () => {
    it("can be instantiated", () => {
const bigShip = new Ship("Dover")
        expect(new Ship()).toBeInstanceOf(Object)
    });
it("has a starting port", () => {
    const bigShip = new Ship("Dover")
    expect(bigShip.startingPort).toBe("Dover")
});
});