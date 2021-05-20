function fixStart( str ) {

 let firstChar = str.charAt(0);

 let output = '';

 for( let counter = 0; counter < str.length; counter++ ) {

  if( str[counter] === firstChar && counter !== 0) {
    output += '*';
  } else {
    output += str[counter];
  }

 }

 return output;


}

console.log(fixStart('babble') );

/* 
1 .grab the first character
2 . loop over the string and check to see if the first character existent anywhere else
3. Change them to * , for example turtle = tur*le
*/

// fixStart('babble');