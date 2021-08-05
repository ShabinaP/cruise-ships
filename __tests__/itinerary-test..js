const Itinerary = require('../src/itinerary')
const Port = require('../src/port')

describe("constructor", () => {
   it("can be instantiated", () => {
const itinerary = new Itinerary("ports")
    expect(new Itinerary()).toBeInstanceOf(Itinerary)
})
it("can have ports", () => {
const dover = new Port(jest.fn())
const calais = new Port(jest.fn())
const itinerary = new Itinerary ([dover, calais])
  expect(itinerary.ports).toEqual([dover, calais])
})


});