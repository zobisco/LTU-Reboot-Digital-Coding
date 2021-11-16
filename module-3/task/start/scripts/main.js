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

let newProductName = 'Baked Beans';
let newPrice = '£2.00';
let newQuantity = 10;
let isInStock = true;
let newDiscountAmount = 0;

const product = [newProductName, newPrice, newQuantity, isInStock, newDiscountAmount];

product[0] = 'Heinz Beans';

// Task 11

let firstIndex = product[0];
let lastIndex = product[product.length - 1];

console.log(`The discount of ${firstIndex} is ${lastIndex}.`)

// Task 12

const newProduct = {
    productName: 'Apples',
    price: 1.60,
    quantity: 6,
    inStock: true,
    discountAmount: 0.20,
};

console.log(newProduct.price);  // dot notation
console.log(newProduct['price']);  // square bracket notation

// Task 13

let fruit = newProduct.productName; //

console.log(fruit);

// Task 14

console.log(`Price before: ${newProduct.price}`);  // dot notation

newProduct.price = 2.00;  // modifying the object

console.log(`Price after: ${newProduct.price}`)

// Task 15

newProduct.colour = 'green';  // adding to the object

console.dir(newProduct);

// Task 16

function sevenTimesTable() {
    for (let num = 1; num <= 12; num++) {  // start, condition, step
        console.log(7 * num)
    }
}

sevenTimesTable();
