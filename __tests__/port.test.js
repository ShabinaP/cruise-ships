const Port = require('../src/Port.js')

describe("Port", () => {
    it("can be instantiated", () => {

const newPort = new Port("Liverpool")
expect(new Port()).toBeInstanceOf(Object)
});
it("has a name property", () => {
    Port.name = this.name;

expect(Port.name).toBeTruthy()
    })});
