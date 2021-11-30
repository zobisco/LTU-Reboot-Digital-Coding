let buttons = document.querySelectorAll('.animalFilter');
let images = document.querySelectorAll('.imageFilter');

console.log(buttons);
console.log(images);

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        console.log(button);
        console.log(button.value);
        // filter(button.value);
        // console.log(event.target);
        let clickedItem = event.target;
        let animal = clickedItem.getAttribute('animal');
        console.log(animal);
        images.forEach(function(currentImage){
            // console.log(image);
            // hide everything
            currentImage.parentElement.classList.add('hide');
            if(currentImage.classList.contains(animal) || animal == 'all'){
                // show current image
                // console.log(currentImage);
                if(currentImage.parentElement.classList.contains('hide')){
                    currentImage.parentElement.classList.remove('hide');
                }
            }
        });
    });
});