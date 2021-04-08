let colours = {
    colour1 : 'Orange',
    colour2: 'Green',
    colour3: 'Maroon'
}; // An object literal

let moreColours = new Object(); // An object constructor
    moreColours.colour1 = 'purple';
    moreColours.colour2 = 'red';
    moreColours.colour3 = 'maroon';

// Values in an object are accessed like this: colours.colour1

// So to grab the second item in the colours object would be : colours.colours2 or colours['colour2]

let message = document.getElementById('result');
    message.textContent = `You have selected : `;

let el = document.getElementById('colours');
    el.textContent = colours.colour3;

console.log( `You have selected : ${colours.colour3} from the object colours` );
console.log( `You have selected : ${moreColours.colour2} from the object moreColours` );


// To know how many items are in an array we use the length property : colours.length

// To change an element in an array we can reassign an element, like so

// colours[3] = 'pink' now pink has replaced 'orange in our array
