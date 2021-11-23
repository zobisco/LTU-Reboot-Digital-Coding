// Task 1

/* Connect your html to your javascript */

// Task 2
// This is a single line comment

/*--------
This is a multi-line comment
--------*/

// Task 3

let productName = 'Heinz Baked Beans';
let price = '10.00';
let quantity = 3;
let inStock = true;
let discountAmount = 0;

// console.log(productName);
// console.log(price);
// console.log(quantity);
// console.log(inStock);
// console.log(discountAmount);

// Task 4

function showProductName(){  // parameters when you declare a function
    console.log(productName);
}

showProductName();  // argument when you call the function (this function has neither)

// Task 5

function totalPrice(productPrice=0, productQuantity=1){
    productPrice = parseFloat(productPrice);
    productQuantity = parseFloat(productQuantity);
    let totalPrice = productPrice * productQuantity;
    return "The total price is " + totalPrice;
}

// console.log(totalPrice(10, 3));

console.log(totalPrice(price, quantity));

// Task 6

var square = (number=0) => number * number;

let squared = square(3)
console.log(squared);

function checkAvailability(productInStock){
    console.log(productInStock);
}

checkAvailability(inStock);

var isProductInStock = (productInStock=0) => console.log(inStock);

isProductInStock(inStock);

// Task 7

function productDiscount(){
    let sum;
    if(quantity > 1){
        sum = price * quantity;
        let discount = discountAmount * quantity;
        sum -= discount;
    } else {
        sum = price * quantity;
    }
    console.log("The sum is " + sum);
}

productDiscount();

function calculateDiscount(){
    let sum = price * quantity;
    if(quantity>1){
        let discount = discountAmount * quantity;
        sum -= discount;
    }
    console.log("The sum is " + sum)
}

// Task 8

// Task 9

calculator = (num1, num2, operator) => {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            return result;
            break;
        case '-':
            result = num1 - num2;
            return result;
            break;
        case '*':
            result = num1 * num2;
            return result;
            break;
        default:
            return 'The operator you chose is invalid!';
            break;
    }

}

console.log(calculator(1, 1, '?'));


// Task 10

let strProductName = 'Baked Beans';
let intPrice = 2;
let intQuantity = 10;
let blnInStock = true;
let intDiscountAmount = 0;

const arrProduct = [
    strProductName,
    intPrice,
    intQuantity,
    blnInStock,
    intDiscountAmount];

arrProduct[0] = 'Heinz Beans';
console.log(arrProduct);

// Task 11

let firstIndex = arrProduct[0];
let lastIndex = arrProduct[arrProduct.length - 1];

console.log(`The discount of ${firstIndex} is ${lastIndex}.`)

// Task 12

const objNewProduct = {
    'productName': strProductName,
    'price': intPrice,
    'quantity': intQuantity,
    'inStock': blnInStock,
    'discountAmount': intDiscountAmount,
};

console.log(objNewProduct);

const objFruit = {
    productName: 'Apples',
    price: 1.60,
    quantity: 6,
    inStock: true,
    discountAmount: 0.20,
};

console.log(objFruit);
console.log(objFruit.price + 2);  // dot notation
console.log(objFruit['price'] - 1.6);  // square bracket notation

// Task 13

let intFruit = objFruit.productName; //

console.log(intFruit);

// Task 14

console.log(`Price before: ${objFruit.price}`);  // dot notation

objFruit.price = 2.00;  // modifying the object

console.log(`Price after: ${objFruit.price}`)

// Task 15

objFruit.colour = 'green';  // adding to the object using dot notation
objFruit['smell'] = 'fragrant';  // adding to the object using bracket notation

console.log(objFruit);

console.dir(objFruit);

// Task 16

function outputTimesTable(number) {
    for (let counter = 1; counter <= 12; counter++) {  // start, condition, step
        // set counter as a variable, continue to loop until counter is less than or equal to 12,
        // add 1 to counter after each iteration
        let intSum = counter * number
        let strMessage = counter + '*' + number + '=' + intSum;
        console.log(strMessage);
    }
}

for(multiplier=1; multiplier<=12; multiplier++){
    outputTimesTable(multiplier);
}
