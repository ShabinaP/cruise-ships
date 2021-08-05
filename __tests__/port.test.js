const Port = require('../src/Port.js')
const Ship = require('../src/cruise-ships.js')

describe("Port", () => {
    describe("Port can be instantiated", () => {
    let port;
    
    beforeEach(() => {
    port = new Port ("Dover");
    
    })
    
it("can be instantiated", () => {
expect(new Port()).toBeInstanceOf(Port)
    })});

it("has a name property", () => {
  Port.name = this.name;

expect(Port.name).toBeTruthy()
    })

it("can add a ship", () => {
  const port = new Port("Dover");
  const ship = jest.fn();
  port.addShip(ship)
expect(port.ships).toContain(ship)

})
it("can remove a ship", () => {
   const port = new Port ("Dover");
   const titanic =  jest.fn();
   const queenMary = jest.fn();

   port.addShip(titanic);
   port.addShip(queenMary)
   port.removeShip(queenMary)

expect(port.ships).toEqual([titanic])


})});
