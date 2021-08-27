// Business Logic

function Pizza() {
  this.size = size;
  this.toppings = toppings;
}

// options we will need for pizza orders -- size, toppings, total price

Pizza.prototype.size = function() {
  let sizePrice = 0

  if (this.size === 'small') {
    sizePrice = 8;
  } else if (this.size === 'medium') {
    sizePrice = 10;
  } else if (this.size === 'large') {
    sizePrice = 12;
  }
  this.sizePrice = sizePrice;
}

Pizza.prototype.toppings = function() {
  let toppingsPrice = 0

  if (this.toppings === 4) {
    this.toppingsPrice += 4;
  } else if (this.toppings === 3) {
    this.toppingsPrice += 3;
  } else if (this.toppings === 2) {
    this.toppingsPrice += 2;
  } else if (this.toppings === 1) {
    this.toppingsPrice += 1;
  }
  this.toppingsPrice = toppingsPrice;
}

Pizza.prototype.calculatePrice = function(size, toppings) {
  let pizzaPrice = size + toppings
}