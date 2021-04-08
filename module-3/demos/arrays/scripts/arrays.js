let colours = [ 'white', 'black', 'orange', 'green' ]; // An array literal

let moreColours = new Array('purple', 'red', 'maroon'); // An array constructor

// Values in arrays are accessed as they are in a numbered list

// It is important to know that the numbering of this list starts at zero ( not one ).

// So to grab the second item in the colours array would be colours[1]

let message = document.getElementById('message');
    message.textContent = `You have selected : `;

let el = document.getElementById('colours');
    el.textContent = colours[0];


// To know how many items are in an array we use the length property : colours.length

// To change an element in an array we can reassign an element, like so

// colours[3] = 'pink' now pink has replaced 'orange in our array
