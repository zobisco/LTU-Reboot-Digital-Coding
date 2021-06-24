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

function productDiscount() {

  if( quantity > 2 ) {
     let newPrice = ( price * quantity ) - discountAmount; // BODMAS
     console.log( newPrice );
  } else {
    console.log( price * quantity);
  }

}

// productDiscount();

// let colour = 'pink';
// let sky = 'blue';

// if( colour === 'grey' && sky === 'blue') {
//   console.log('Correct');
// } else if( colour === 'orange') {
//   console.log('Correct');
// } else if( colour === 'blue') {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// switch (colour) {
//   case 'grey':
//     console.log('Correct');
//     break;
//   case 'orange':
//     console.log('Correct');
//     break;
//   case 'blue':
//     console.log('Correct');
//     break;
//   default:
//     console.log('Incorrect');
//     break;
// }

function drinkOrder( drink, size ) {

  switch( drink ) {
    case 'cola' :
      console.log(drink, size);
      break;
    case 'lemonade' :
      console.log(drink, size);
      break;
    case 'orangeade' :
      console.log(drink, size);
      break;
    default:
      // console.log("We don't currently have a " + size + " " + drink + " , apologies");
      console.log(`We don't currently have a ${size} ${drink}, apologies`);
      break;
  }

}
// drinkOrder('cola', 'X-Large');
// drinkOrder('lemonade', 'Medium');
// drinkOrder('orangeade', 'Small');

function calculator( num1, num2, operator ) {

  switch( operator ) {
    case '+' :
      console.log( `${num1} + ${num2} = ${num1 + num2} ` );
      // console.log( num1 + " + " + num2 + " = " + ( num1 + num2) );
      break;
    case '-' :
      console.log( `${num1} - ${num2} = ${num1 - num2} ` );
      break;
    case '*' :
      console.log( `${num1} * ${num2} = ${num1 * num2} ` );
      break;
    case '/' :
      console.log( `${num1} / ${num2} = ${num1 / num2} ` );
      break;
    default :
      console.log(`${operator} does not exist`);
      break;
  }

}


// calculator( 1, 1, '+');
// calculator( 10, 2, '-');
// calculator( 5, 5, '*');
// calculator( 25, 5, '/');

// let product = [
//   productName,
//   price,
//   quantity,
//   inStock,
//   discountAmount
// ];

// let firstItem = product[0];
// let secondItem = product[1];
// let lastItem = product[4];



let product = {
  productName : 'Apples',
  price: 1.29,
  quantity: 6,
  inStock: true,
  discountAmount: 0.35,
  coloursAvailable : ['Green', 'Red', 'Yellow', 'Pink'],
};

product.price = 2.09;

product.shape = 'sphere';

// console.log( product ) 