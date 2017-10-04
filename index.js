Game = {};
Game.objects = [];
Game.version = "v0.0.0ppa";

Game.tick = function() {}

class PhysicsObject {
  constructor(domElem,mass,position) {
    this.domElem = domElem;
    this.mass = mass;
    this.position = position;
    this.murderKreshan = function() {
      console.log("IT IS DONE COMRADE!!!! THE TRAITOR KRESHAWN IS DEAD!!!");
    }
  }
}
