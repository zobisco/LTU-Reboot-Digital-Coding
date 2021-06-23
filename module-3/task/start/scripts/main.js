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

let temperature = 30;
let season = 'Summer';

if( temperature < 30 || season === 'Spring') {
  console.log('You should where just a t-shirt and shorts');
} else if(season !== 'Spring') {
  console.log('Its not spring');
} else {
  console.log('You should where trousers and a jumper');
}