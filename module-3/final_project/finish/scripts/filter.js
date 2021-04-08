let buttons = document.querySelectorAll("div.button-container button");

let allImages = document.querySelectorAll("main div.image");

const toggleImages = (dataClass) => {
  dataClass === "all"
    ? allImages.forEach((image) => {
        image.style.display = "flex";
      })
    : allImages.forEach((image) => {
        image.dataset.class === dataClass
          ? (image.style.display = "block")
          : (image.style.display = "none");
      });
};

// const toggleImages = (dataClass) => {
//   if (dataClass === "all") {
//     allImages.forEach((image) => (image.style.display = "flex"));
//   } else {
//     allImages.forEach((image) => {
//       if (image.dataset.class === dataClass) {
//         image.style.display = "flex";
//       } else {
//         image.style.display = "none";
//       }
//     });
//   }
// };

const toggleActiveClass = (active) => {
  buttons.forEach((button) => button.classList.remove("active"));
  active.classList.add("active");
};

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    toggleImages(button.dataset.class);
    toggleActiveClass(button);
  })
);

// for(let index = 0; index < buttons.length; index++) {
//   buttons[index].addEventListener('click', function() {
//     toggleImages(buttons[index].dataset.class );
//     toggleActiveClass( buttons[index] );
//   })

// }
