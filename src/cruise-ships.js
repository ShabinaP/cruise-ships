class Ship {
    startingPort;
    

    constructor(startingPort) {
        this.startingPort = startingPort;
        
    }

    setSail() {
        this.startingPort = false;
    }
}

module.exports = Ship;