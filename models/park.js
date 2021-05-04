const Park = function (name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
};

Park.prototype.addDino = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
    const index = this.dinosaurCollection.indexOf(dinosaur)
    if (index > -1) {
        this.dinosaurCollection.splice(index, 1);
      };
};

module.exports = Park;