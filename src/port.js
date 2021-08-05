
const Ship = require("./cruise-ships");
class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    };
   
  addShip(ship) {
    this.ships.push(ship)
   }

  removeShip(ship) {

  this.ships = this.ships.filter(shipDocked => shipDocked !== ship)
  
}};



module.exports = Port, Ship;












