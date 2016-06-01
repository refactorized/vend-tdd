#Vending Machine Exercise

## Specification

### API
Require call returns an object with a `machine` function that creates an object with an `inv` property, for the vending machine inventory, and a `vend` method, given an inventory object.
  
```javascript
var vending = require('my-file-under-test');
var vmachine = vending(inventory);
console.log(vmachine); // { inv: [], vend: [function] }
```

### Inventory Data Format Example
``` javascript
var testInv = [
  {
    code: 'A1',
    name: 'Funions',
    price: 1.50
  }
  , {
    code: 'A2',
    name: 'Twinkie',
    price: 1.25
  }
];
```

### Calling vend()

supply object:

```javascript
vend({
	code: 'A1',
	money: 1.5
	});
```

### Vend Output

recieve this

```javascript
{
	item: 'String with item Name',
	change: 0
}
```

## Behaviour Specification

``` 
Feature: Vending Machine

  Scenario: Normal Operation
    Given Vending Machine is Stocked with
    items and enough change
    
    When I request a valid Item
    And I supply the correct money
    Then Machine should vend item 
    And Machine should not return change
```

