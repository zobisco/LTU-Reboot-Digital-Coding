## Task 1

1. Connect your html to your javascript

## Task 2

1. Add a comment to you main.js

- `// Single line comment`
- `/* Multiple line comment */`

## Task 3

1. Create 5 variables called

   - productName
   - price
   - quantity
   - inStock
   - discountAmount

2. print to the screen the value of productName and price

## Task 4

1. Create a function called showProductName
2. Inside the function console.log out the productName variable
3. Call the function showProductName

## Task 5

1. Create a function called totalPrice
2. Add two ( 2 ) parameters to the function, one called : productPrice and the other called: productQuantity
3. Inside the function console.log out productPrice `*` productQuantity
4. Call the function totalPrice passing in the variables price and quantity

## Task 6

1. Create a function called checkAvailability
2. Add one ( 1 ) parameter to the function, one called : productInStock
3. Inside the function console.log out productInStock
4. Call the function checkAvailability passing in the variable inStock
5. Convert your function into an arrow function

## Task 7

1. Create a function called productDiscount
2. Next inside the function create a if else statement checking to see if the quantity is more than 1
3. If its true inside the if statement take away discountAmount from the price, don't forget the quantity
4. And console.log out the new price
5. If it wasn't true in the else statement console.log just the price `*` quantity
6. Finally call the function

## Task 8

1. Create a function called drinkOrder which takes in two ( 2 ) parameters, one called drink then other called size
2. Inside the function create a switch statement which takes in one parameter the drink
3. For each case check for the drink
4. Then in each case console.log the drink
5. Don't forget the break statement after each case
6. And also the default statement
7. Call the drinkOrder function with the drink and size as arguments

## Task 9

1. Create a function called calculator, which takes in 3 parameters, num1, num2, operator
2. Inside the function use a switch statement taking in the operator as a parameter
3. Create 4 cases and 1 default case
4. Each case should be for addition (+), subtraction (-),division (/) and multiplication (`*`)
5. Each case should console.log the result, for example num1 + num2, num1 / num2, etc
6. Call the function

- calculator( 1, 2, '+');
- calculator( 1, 2, '/');

## Task 10

1. Create an array and each item will be the variables we created earlier :

   - productName
   - price
   - quantity
   - inStock
   - discountAmount

## Task 11

1. Using the array you just created select the first and last items using their index numbers

   - let secondItem = productAsAnArray[1];

## Task 12

1.  Create an object and with the properties

    - productName
    - price
    - quantity
    - inStock
    - discountApplied

    let objectName = {
    property : value
    }

## Task 13

1. select the productName from the object and assign it to a variable

## Task 14

1. select the price from the object and give it a new value

## Task 15

1. create a new property for the object without editing the original object

## Task 16

1. Use a for loop and console.log out the 7 times table
2. Create a function and place the fore loop inside it
3. Call the function

## Task 17

1. Create a function called totalPriceOfShopping that takes one (1) parameter, name the parameter arr - short for array
2. Inside the function create a variable called totalPrice and assign it the value of 0
3. Next create a for loop, this will loop over each object ( product )
4. Inside the loop write totalPrice = totalPrice +
5. Inside the for loop access both the price and quantity and multiply them with each other to get the price of that product
6. Place the result of step 5 after the + in step 4, e.g totalPrice = totalPrice + price `*` quantity
7. outside of the for loop but still inside the function return totalPrice
8. Outside of the function call the function with shoppingBasket as its argument, don't forget to console.log the result
   - console.log( totalPriceOfShopping( shoppingBasket ) );
   * Your output should be: 74.90

## Task 18

1. Create a function called discountToiletries that takes one (1) parameter, name the parameter arr - short for array
2. Inside the function create a variable called totalPrice and assign it the value of 0
3. Next create a for loop, this will loop over each object ( product )
4. Use an if else statement to check if the product's type is === 'toiletries'
5. If it is then remove 50% from its price and add it to the totalPrice
6. Else just work out the price and add it to the totalPrice
7. outside of the for loop but still inside the function return totalPrice
8. Outside of the function call the function with shoppingBasket as its argument, don't forget to console.log the result
   - console.log( discountToiletries( shoppingBasket ) );
   * Your output should be: 68.22

## Task 19

1. create a function to find how many items there are in any given type
