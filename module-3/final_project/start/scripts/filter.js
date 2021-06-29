let buttons = document.querySelectorAll('button');

let allImages = document.querySelectorAll('.image img');

// allImages.forEach( image => console.log(image)  );

function toggleImages( dataClass ) {

}


let main = document.querySelector('main');

let newDiv = document.createElement('div');
    newDiv.style.border = '1px solid green';

let newDivText = document.createTextNode('New Div');

newDiv.appendChild(newDivText);

main.appendChild(newDiv);