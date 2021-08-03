
const Ship = require("./cruise-ships");
class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    };
addShip(ship) {
    this.ships.push(ship)
    if(this.ships.indexOf(ship) !== -1){
        this.ships.push(ship)
     }
    }

removeShip(ship) {
  this.ships.pop(ship)
  this.ships.pop(ship)

if(this.ships.length !== 0) {
   this.ships.pop(ship) 
}}};


module.exports = Port, Ship;














  // const index = this.ships.indexOf(ship)
  // if(index > 0) {
   //    this.ships.splice(index, 1)
  // }
      
   
  
//}

//this.ships.push(ship)
//        if(this.ships.indexOf(ship) !== -1){
 //           this.ships.push(ship)
 //       }

 // this.ships.pop(ship)

//if(this.ships.length !== 0) {
  //  this.ships.pop(ship) 