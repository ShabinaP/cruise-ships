const Port = require('../src/Port.js')
const Ship = require('../src/cruise-ships.js')

describe("Port", () => {
    
it("can be instantiated", () => {

const newPort = new Port("Liverpool")
expect(new Port()).toBeInstanceOf(Object)
});
it("has a name property", () => {
    Port.name = this.name;

expect(Port.name).toBeTruthy()
    })

it("can add a ship", () => {
const port = new Port("Dover");
const ship = {};

port.addShip(ship)
expect(port.ships).toContain(ship)

})
it("can remove a ship", () => {
    const port = new Port ("Dover");
    const titanic =  {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary)
    port.removeShip(queenMary)

expect(port.ships).toEqual([titanic])


})});
