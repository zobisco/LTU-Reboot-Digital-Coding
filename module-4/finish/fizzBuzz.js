// FOR LOOP
// Set counter to 1
// Break when counter reaches 100
// Increment counter by 1
for ( let i = 1; i <= 100; i++ ) {
  // IF number MOD 15 === 0
    // print 'FizzBuzz'
  if ( i % 15 === 0 ) {
    console.log( 'FizzBuzz');
    // IF number MOD 15 === 0
    // print 'FizzBuzz'
  } else if ( i % 3 === 0 ) {
    // ELSE IF number MOD 3 === 0
    // print 'Fizz'
    console.log('Fizz');
  } else if ( i % 5 === 0 ) {
    // ELSE IF number MOD 5 === 0
    // print 'Buzz'
    console.log('Buzz');
  } else {
    // ELSE
    // print number
    console.log( i );
  }
}
  
  
  