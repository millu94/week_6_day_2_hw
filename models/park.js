const Park = function (name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
};

Park.prototype.addDino = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
    this.dinosaurCollection.splice(dinosaur);
};

module.exports = Park;