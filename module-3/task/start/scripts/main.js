// This is a single line comment

/*
this is
a
multiple line
comment
*/

const productName = 'Baked beans'; // string
let price = 0.89; // number - float
let quantity = 2; // number Integer
let inStock = true; // Boolean
let discountAmount = 0.20; // number - float

// console.log( productName, price );

function showProductName() {
  console.log(productName);
}

//showProductName();

function totalPrice( productPrice,productQuantity ) {

 console.log(productPrice * productQuantity) ;

}

// totalPrice(price, quantity);

// function checkAvailability( productInStock ) {
//   console.log( productInStock );
// }

let checkAvailability = productInStock => console.log( productInStock );

// checkAvailability( inStock );

function productDiscount() {

  if ( quantity > 1 ) { // if this is true
    let newPrice = (price - discountAmount * quantity);
    console.log( newPrice );
  } else { // if this is false
    console.log( price * quantity );
  }

}

// productDiscount();

/*
 check drink
  coke
  lemonade
  orangeade
  default, what if none of those drinks are selected

  what if the drink is in capitals?
  lowercase() = lowercase
*/


function drinkOrder( drink, size ) {

  let drinkLow = drink.toLowerCase();

  switch( drinkLow ) {
    case 'coke' :
      console.log( drinkLow, size ); // coke
      break;
    case 'lemonade' :
      console.log( drinkLow, size ) // lemonade
      break;
    case 'orangeade' :
      console.log( drinkLow, size ) // orangeade
      break;
    default:
      console.log( drinkLow, 'is not available');
      break;
  }

}

// drinkOrder('OrangeAde', 'extra large');


/*

operators
+ - / * 


*/

/*
function calculator( num1, num2, operator ) {

  switch ( operator ) {
    case '+':
      //console.log( num1 + ' + ' + num2 + ' = ' + (num1+num2) );
      console.log( `${num1} ${operator} ${num2} = ${num1 + num2}` );
      break;
    case '-':
      console.log( `${num1} ${operator} ${num2} = ${num1 - num2}` );
      break;
    case '/':
      console.log( `${num1} ${operator} ${num2} = ${num1 / num2}` );
      break;
    case '*':
      console.log( `${num1} ${operator} ${num2} = ${num1 * num2}` );
      break;
    case '%':
      console.log( `${num1} ${operator} ${num2} = ${num1 % num2}` );
      break;
    default:
      console.log( `${operator} doesn't exist`);
      break;

  } // end of switch statement

} // end of calculator function

calculator( 5, 5, '+'); // Addition
calculator( 5, 5, '-'); // Subtraction
calculator( 5, 5, '/'); // Division
calculator( 5, 5, '*'); // multiplication
calculator( 5, 4, '%'); // Modulus
calculator( 5, 4, '!'); // Error
*/

let productAsAnArray = [ 
  productName, 
  price, 
  quantity, 
  inStock, 
  discountAmount 
];

//console.log( productAsAnArray );

let firstItem = productAsAnArray[0]; // the array name followed by [] and then the index number inside the square brackets - arrayName[0]

let lastItem = productAsAnArray[4];

//console.log( firstItem );
//console.log( lastItem );

let productAsAnObject = {
  productName: 'Baked beans',
  price: 0.89,
  quantity: 2,
  inStock: true,
  discountAmount : 0.20
};

// let productName2 = productAsAnObject.productName;

// let productPrice = productAsAnObject['price'];

// console.log( `Product name : ${productName2},  Price: ${productPrice}` );

// productAsAnObject.price = 1.25;

// productAsAnObject.inStock = false;

// productAsAnObject.loyaltyCard = false;

// console.log( productAsAnObject.loyaltyCard );

// delete productAsAnObject.loyaltyCard;

// console.log( productAsAnObject.loyaltyCard );


// let numbers = [1,2,3,4,5,6,7,8,9,10,11];

//console.log(numbers.length );

// for(let counter = 0; counter < numbers.length; counter++ ) {
//   console.log( numbers[counter] );
// }

/*
7 times table
7 * 1
7 * 2 etc
7 * 12
for loop
  counter = 1
  counter <= 12
  counter++
*/

// for(let counter = 1; counter <= 12; counter++ ) {
//   let result = 7 * counter;
//   console.log( `7 * ${counter} = ${result}` );
// }


function multiplyBy( num ) {

  for(let counter = 1; counter <= 12; counter++ ) {
    let result = num * counter;
    console.log( `${num} * ${counter} = ${result}` );
  }

}

multiplyBy( 10 );