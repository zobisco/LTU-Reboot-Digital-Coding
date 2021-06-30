## Adding functionality to our photography landing page

## Part 1

1. Create a javaScript file in the scripts folder called filter.js
2. Connect filter.js to your index.html document
3. In filter.js select all the buttons using the DOM
4. Next select all the divs with the class of image using the DOM

## Part 2

1. Create a function called toggleImages with one ( 1 ) parameter called dataClass

## Part 3

Next up is adding event listeners to our buttons, from this we can get some information from each button that is pressed

1. The easiest way to do this is to loop over the buttons array we already have and add an event listener as each button is looped over.

2. Use a for loop to loop over the buttons and add an event listener to each one as shown below

<script>
      for(let index = 0; index < buttons.length; index++) {
          buttons[index].addEventListener('click', function() {
            console.log(button[index]);
          })
      }
</script>

## Part 4

1. Inside toggleImages function create an if / else statement

2. In the condition for the if statement check to see if the dataClass === 'all'

3. If that is true then loop over the allImages array and show all the images

4. And for the else statement, loop over the allImages array and inside that add an if / else statement

5. In that if statement you should show the image, and in the else statement you should hidden the image

- Below is what you should have :

<script>
function toggleImages( dataClass ) {

  if ( dataClass === 'all' ) {
      allImages.forEach( image => image.style.display = 'flex');
  } else {
      allImages.forEach( image => {
          if ( image.dataset.class === dataClass ) {
                image.style.display = 'flex';
          } else {
                image.style.display = 'none'
          }
      })
  }

}
</script>

## Part 5

1. Lets refactor / tidy up this code for the button event listeners and call our toogleImages function inside it

<script>
      for(let index = 0; index <script buttons.length; index++) {
          buttons[index].addEventListener('click', function() {
            console.log(button[index]);
          })
      }
</script>

2. Lets refactor / tidy up this code for the toggleImages function

<script>
function toggleImages( dataClass ) {

  if ( dataClass === 'all' ) {
      allImages.forEach( image => image.style.display = 'flex');
  } else {
      allImages.forEach( image => {
          if ( image.dataset.class === dataClass ) {
                image.style.display = 'flex';
          } else {
                image.style.display = 'none'
          }
      })
  }

}
</script>

## Part 6

1. Create a function called toggleActiveClass with one ( 1 ) parameter called active just before toggleImages.

- Our new function is going to add over remove the class active when a button is pressed, so we/ the user knowns what has been selected

2. Next call our toggleActiveClass in our buttons event listener as we did with our toggleImages function.
