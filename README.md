#Vending Machine TDD Exercise

## Running tests
To run against vend-test.js run `mocha` but you can specify any test file by first seting the `fut` shell environement varibale like so:

```
$ fut=./vend2.js mocha
```
which will execute the mocha test within an evnvironment that has `fut` specified.

we could also do `$ export fut=./vend2.js` then all subsequent `$ mocha` calls would run with that variable set, until the end of the shell session

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
    
    When I request an invalid Item
    And I supply any money
    Then Machine should vend undefined / nothing 
    And Machine should return all money
    
    When I request a valid Item
    And I supply the too much money
    Then Machine should vend item 
    And Machine should return correct change
    
    When I request a valid Item
    And I supply insufficient money
    Then Machine should vend undefined / nothing 
    And Machine should return all money
```

