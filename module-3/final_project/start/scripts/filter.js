let buttons = document.querySelectorAll('button');

let allImages = document.querySelectorAll('.image');

// allImages.forEach( image => console.log(image)  );

const toggleImages = ( dataClass ) => {

    if( dataClass === 'all') { // if the button click has a data-class of all
        // cycle through all the images and show them
        allImages.forEach( image => image.style.display = 'flex');

    } else {
        // if the button click has a data-class that isn't all
        allImages.forEach( image => {
            // cycle through the images and check to see if the button pressed has the same data-class as any of the images
            if( image.dataset.class === dataClass ) {
                image.style.display = 'flex';
            } else {
                // if they don't match hide the images
                image.style.display = 'none';
            }

        });


    }

}

const toggleActiveClass = ( active ) => {
    buttons.forEach( button => button.classList.remove('active') );
    active.classList.add('active');
}


buttons.forEach( button => button.addEventListener('click', ()=> {
    toggleImages(button.dataset.class);
    toggleActiveClass( button );
}));