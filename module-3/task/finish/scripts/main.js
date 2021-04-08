// Task 2
// This is a comment

// tASK 3
let productName = 'Bake beans';
let price = 0.89;
let quantity = 2;
let inStock = true;
let discountAmount = 0.20;

console.log( `task 3 : ${productName} ${price}` );

// TASK 4
function showProductName() {
  console.log( `task 4 : The products name is : ${productName}` );
}

showProductName();

// TASK 5
function totalPrice( productPrice, productQuantity ) {
  console.log( `Task 5 : The products total price is : ${productPrice * productQuantity}`);
}

totalPrice( price, quantity);

// TASK 6
function checkAvailability( productInStock ) {
  console.log( `Task 6 : The product is in stock: ${productInStock}`);
}


// const productAvailable = productInStock => console.log( `Task 6 : The product is in stock: ${productInStock}`);

checkAvailability( inStock );

// TASK 7

const productDiscount = () => {
  if ( quantity > 1 ) {
    let newPrice = ( price - discountAmount * quantity ) 
    console.log( `Task 7 : ${newPrice}` );
  } else {
    console.log( `Task 7 : The quantity is less that 1 ${price * quantity}` )
  }
}

productDiscount();

// TASK 8

const drinkOrder = ( drink, size ) => {
  switch( drink ) {
    case 'coke':
      console.log( drink );
      break;
    case 'lemonade':
      console.log( drink );
      break;
    case 'orangeade':
      console.log( drink );
      break;
    default:
      console.log( `${drink} is not available` );
      break;
  }
}
console.log(`Task 8 : 👇`)
drinkOrder( 'coke', 'small');

// TASK 9

const calculator = ( num1, num2, operator ) => {
  switch( operator ) {
    case '+':
      console.log( `${num1} ${operator} ${num2} = ${num1 + num2}`);
      break;
    case '-':
      console.log( `${num1} ${operator} ${num2} = ${num1 - num2}`);
      break;
    case '/':
      console.log( `${num1} ${operator} ${num2} = ${num1 / num2}`);
      break;
    case '*':
      console.log( `${num1} ${operator} ${num2} = ${num1 * num2}`);
      break;
    default:
      console.log( `${operator} is not a valid operator`);
  }
}

console.log( `Task 9 : 👇`)

calculator( 1, 2, '+');
calculator( 1, 2, '*');
calculator( 1, 2, '/');
calculator( 1, 2, '-');


// TASK 10

// Using the information at the start

let productAsAnArray = [ productName, price, quantity, inStock, discountAmount ];
console.log( `Task 10 : 👉 ${productAsAnArray.join(' | ')}` )

// TASK 11
let firstItem = productAsAnArray[0];
let lastItem = productAsAnArray[4];

console.log( `Task 11 : ${productAsAnArray[0]}`);
console.log( `Task 11 : ${productAsAnArray[4]}`);

// TASK 12
let productAsAnObject = {
    productName : 'Bake beans',
    price : 0.89,
    quantity : 2,
    inStock : true,
    discountAmount : 0.20
}

console.log( `👇 Task 12 :  Click on the word Object`);
console.dir( productAsAnObject );

// TASK 13
let firstProperty = productAsAnObject.productName;
let lastProperty = productAsAnObject.discountAmount;

console.log( `Task 13 : 👉  ${firstProperty}`);
console.log( `Task 13 : 👉  ${lastProperty}`);

// TASK 14

productAsAnObject.price = 1.10;
productAsAnObject.inStock = false;

console.log( `👉 Task 14 :  ${productAsAnObject.price}`);
console.log( `👉 Task 14 :  ${productAsAnObject.inStock}`);

// TASK 15
productAsAnObject.lowSalt = true;
console.log( `👉 Task 15 :  ${productAsAnObject.lowSalt}`);

// TASK 16
for( let multiply = 1; multiply <= 12; multiply++ ) {
  console.log( `👉 Task 16 : ${multiply} * 7 = ${multiply * 7}`);
}

// const timesTable = (num) => {
  
//   for( let multiply = 1; multiply <= 12; multiply++ ) {
//     console.log( `${multiply} * ${num} = ${multiply * num}`);
//   }
// }
// timesTable(7);

// TASK 17
function totalPriceOfShopping( arr ) {

  let totalPrice = 0;

  for ( let index = 0; index < arr.length; index++ ) {
    totalPrice = totalPrice + (arr[index].price * arr[index].quantity);
  }

  return totalPrice.toFixed(2);
}

console.log( `👉 Task 17 :${totalPriceOfShopping( shoppingBasket )}` );

// TASK 18
function discountToiletries( arr ) { 

  let totalPrice = 0;

  for ( let index = 0; index < arr.length; index++ ) {

        if ( arr[index].type === 'toiletries' ) {

          let discount = ( arr[index].price * 50 ) / 100; // BODMAS

          totalPrice = totalPrice + ( arr[index].price - discount ) * arr[index].quantity;

        } else {

          totalPrice = totalPrice + ( arr[index].price * arr[index].quantity )

        }

  }

  return totalPrice.toFixed(2);

}


console.log(`Task 18 : 👉  ${discountToiletries( shoppingBasket )}`);

// TASK 19

function howMany( arr, type ) {

  let itemsOfType = arr.filter( item => item.type === type);
      
  return itemsOfType.length;

}

console.log( `Task 19 : 👉  ${howMany( shoppingBasket, 'toiletries')}` );