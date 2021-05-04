const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Giant Lizard', "Pigeon Eggs", 10)
    dinosaur2 = new Dinosaur("Cluckosaurus", "KFC", 20)
    dinosaur3 = new Dinosaur("Spikysaurus", "Cacti", 15)
    dinosaur4 = new Dinosaur("Raaaawr", "Muffins", 17)
    park = new Park("Queen's Park", 3.99, [dinosaur1, dinosaur2, dinosaur3, dinosaur4])
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Queen's Park")
  });

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
