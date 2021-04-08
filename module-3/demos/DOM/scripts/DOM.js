console.log('Welcome to the console 👋');

console.log('Creating a node in the DOM...press  the button "Add a paragraph node" ');


let output = document.querySelector('#output');
let button = document.querySelector('button.add-node');

let addNode = () => {

  /* Creating a Node in the DOM */

  setTimeout( createElement, 2000);
  setTimeout( createTextNode, 5000);
  setTimeout( appendText, 8000);
  setTimeout( appendParagraph, 10000);
}

let createElement = () => {
    paragraph = document.createElement('p');
    console.log(`I am 👇 the first step to creating a paragraph node`);
    console.log(paragraph);
}

let createTextNode = () => {
    paragraphText = document.createTextNode(`I am a a paragraph created in the DOM`);
    console.log(`I am 👇 the next step to creating a paragraph node`);
    console.log( paragraphText );
}
      
let appendText = () => {
    console.log(`The textNode is then appended to the paragraph node`);
    paragraph.appendChild( paragraphText );
    output.style.border = '4px solid black';
    output.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';
    output.style.textAlign = 'center';
}
      
let appendParagraph = () => {
  console.log(`The paragraph node is then appended to the output div, ( which has a border of 4px solid black )`);
  output.appendChild( paragraph );
}
      

button.addEventListener('click', addNode );





    

