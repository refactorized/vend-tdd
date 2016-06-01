var _ = require('lodash');
exports.machine = function(inventory){
  var inv = inventory || [];

  var vend = function(inObj){
    var codedItem = _.filter(inv, function(value){
      return value.code === inObj.code;
    })[0];
   
    if(!codedItem || codedItem.price > inObj.money){
      return {
      change: inObj.money
      };
    }

    return{
      item:codedItem.name,
      change: inObj.money-codedItem.price
    };
  };
    
  return {
      inv: inv,
      vend: vend
    };
  };
