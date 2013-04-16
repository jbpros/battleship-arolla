module.exports = function () {
  this.World = require("../support/world").DomainWorld;

  this.Given(/^my opponent has no ships on a specific position$/, function(callback) {
    this.position = "some position";
    callback();
  });

  this.When(/^I shoot a torpedo at that position$/, function(callback) {
    this.shootAtPosition(this.position, callback);
  });

  this.Then(/^I missed$/, function(callback) {
    var missed = this.didMiss();
    var err    = missed ? null : new Error("I was expected to have missed");
    callback(err);
  });

};
