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
