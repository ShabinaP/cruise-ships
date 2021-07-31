const Port = require("./port");

class Ship {

    constructor(Port) {
        this.currentPort = Port;
         }

    setSail() {
        this.currentPort = false;
    }

    dock(port) {
        this.currentPort = port
    }
}

module.exports = Ship, Port
