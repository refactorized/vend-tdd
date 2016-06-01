var vending = require('./vend-test.js');
var assert = require('chai').assert;
var mocha = require('mocha');

var inventory = [
{
  code: 'A1',
  name: 'Funions',
  price: 1.50
},
{
  code: 'A2',
  name: 'Twinkie',
  price: 1.25
}
];


describe('Vending Machine', function(){
  describe('Normal Operation', function(){
    
    describe('Valid Code, Correct Money', function(){
      var machine = vending.machine(inventory);
      var vended = machine.vend({code:'A1', money: 1.50});
      it('should return expected item', function(){
        assert.equal('Funions',vended.item);
      });
      it('should return zero change', function(){
        assert.equal(0, vended.change);
      });
    });

    describe('Invalid, Any money', function(){
      var machine = vending.machine(inventory);
      var vended = machine.vend({code:'BOGUS', money: 1.50});
      it('should return undefined item', function(){
        assert.equal(undefined, vended.item);
      });
      it('should return all money', function(){
        assert.equal(1.50, vended.change);
      });
    });
    
    describe('Valid Code, too much money', function(){
      var machine = vending.machine(inventory);
      var vended = machine.vend({code:'A1', money: 2.50});
      it('should return expected item', function(){
        assert.equal('Funions',vended.item);
      });
      it('should return zero change', function(){
        assert.equal(1.00, vended.change);
      });
    });

    describe('Valid Code, insufficient money', function(){
      var machine = vending.machine(inventory);
      var vended = machine.vend({code:'A1', money: 1.10});
      it('should return undefined item', function(){
        assert.equal(undefined,vended.item);
      });
      it('should return all money', function(){
        assert.equal(1.1, vended.change);
      });
    });
  });
});
