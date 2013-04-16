function DomainWorld(callback) {
  callback();
}

DomainWorld.prototype.shootAtPosition = function (position, callback) {
  this.lastShotResult = "miss";
  callback();
}

DomainWorld.prototype.didMiss = function () {
  return this.lastShotResult === "miss";
};

module.exports = { DomainWorld: DomainWorld };
