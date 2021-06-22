const productName = 'Baked Beans';
let price = 1.50;
let quantity = 3;

let inStock = true;
let discountAmount = 0.20;

// console.log( productName );
// console.log( price );

function showProductName() {
  console.log( productName );
}

//showProductName(); // invoke a function - ( call the function )

/*function totalPrice( productPrice, productQuantity ) {
  console.log( productPrice * productQuantity );
}

totalPrice( price, quantity ); */

let totalPrice = ( productPrice, productQuantity ) => console.log( productPrice * productQuantity );

// totalPrice( price, quantity );

let checkAvailability = productInStock => console.log( productInStock );

// checkAvailability( inStock );



let num = 50;

if ( num != 50 ) {
  console.log('If is true');
} else {
  console.log('If is false');
}