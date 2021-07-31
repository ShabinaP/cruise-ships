const Ship = require('../src/cruise-ships.js')
const Port = require('../src/port.js')

describe("constructor", () => {
    it("can be instantiated", () => {
const ship = new Ship("Dover")
    expect(new Ship()).toBeInstanceOf(Object)
    });
it("has a starting port", () => {
    const port = new Port ("Dover")
    const ship = new Ship(port)
    
expect(port).toBe(ship.currentPort)
});
it("can set sail", () => {
    const port = new Port ("Dover")
    const ship = new Ship(port)
    ship.setSail()
    expect(Ship.currentPort).toBeFalsy()});

it("can dock at a different port", () => {
    const dover = new Port("Dover")
    const ship = new Ship(dover)
    const calais = new Port("Calais");
    ship.dock(calais);
expect(ship.currentPort).toBe(calais)
})
});

