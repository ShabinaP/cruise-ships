const Ship = require('../src/cruise-ships.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary')

describe("Ship", () => {
    describe("with ports and an itinerary", () => {
       let ship;
       let dover;
       let calais;
       let itinerary;
      
        beforeEach(()=> {
        dover = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: "Dover",
            ships: []
        };

        calais = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: "Calais",
            ships: []
        }
        itinerary = new Itinerary([dover, calais])
        ship = new Ship (itinerary)
    
       })
     it("can be instantiated", () => {
     
        expect(ship).toBeInstanceOf(Ship)
                });
            it("has a starting port", () => {
        
            expect(ship.currentPort).toBe(dover)
            });
            
            it("can set sail", () => {
           
                ship.setSail()
                expect(ship.currentPort).toBeFalsy()
                expect(dover.removeShip).toHaveBeenCalledWith(ship)
                
            });
            
            it("can dock at a different port", () => {
        
                ship.setSail()
                ship.dock(calais);
            expect(ship.currentPort).toBe(calais)
            expect(calais.addShip).toHaveBeenCalledWith(ship)
            })
            
            it("can/t set sail further that its itinerary", () => {
            
                ship.setSail()
                ship.dock()
            expect(() => ship.setSail()).toThrowError('End of itinerary reached')
            })
            
            it("gets added to port on instantiation", () => {
              
            expect(dover.addShip).toHaveBeenCalledWith(ship)
            })
            });
        
    })
   

