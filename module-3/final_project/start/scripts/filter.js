const buttons = document.querySelectorAll('button');

let allImages = document.querySelectorAll('.image');

const toggleImages = ( dataClass ) => {
  // Ternary 
  dataClass === "all" 
    ? allImages.forEach( image => image.style.display = 'flex')
    : allImages.forEach( image => {
        image.dataset.class === dataClass
          ? image.style.display = 'flex'
          : image.style.display = 'none';
    })

} // end of toggleImages function

const toggleActiveClass = ( active ) => {
  buttons.forEach( button => button.classList.remove("active")); // loop over the buttons and remove the active class from all the buttons
  active.classList.add("active");
}

buttons.forEach( button => {
  button.addEventListener('click', ()=>{
    toggleImages( button.dataset.class );
    toggleActiveClass( button );
  })
});