/****************Carousel */

// export function CreatCarrousel(photos) {
//   const Carrousel = document.querySelector("#Carrousel");

//   const slider = document.createElement("div");
//   slider.classList.add("slider");
//   Carrousel.appendChild(slider);

//   photos.forEach((img) => {
//     const pPicture = document.createElement("img");
//     pPicture.setAttribute(
//       "src",
//       `./assets/Portfolio/${img.photographerId}/${img.image}`
//     );
//     pPicture.classList.add("img__slider");
//     slider.appendChild(pPicture);
//    });

// ---------------------------------------------------------------------------------------------
//   document.querySelectorAll(".pictureCard").forEach((element) => {
//     element.addEventListener("click", function(event) {
//       event.stopPropagation();
//       event.preventDefault();

//       let picturepos = element.dataset.pos;

//       let img__slider = document.getElementsByClassName("img__slider");
//       let etape = 0;

//       img__slider[picturepos].classList.add("active");
//     });
//   });
// }

// Controle du Slider
// set up button next
// let suivant = document.querySelector(".suivant");
// suivant.addEventListener("click", function() {
//   etape++;
//   if (etape >= img__slider.length) {
//     etape = 0;
//   }

//   for (let i = 0; i < img__slider.length; i++) {
//     img__slider[i].classList.remove("active");
//   }

//   img__slider[etape].classList.add("active");
// });

// // set up button previous

// let precedent = document.querySelector(".precedent");
// precedent.addEventListener("click", function() {
//   etape--;
//   if (etape < 0) {
//     etape = img__slider.length - 1;
//   }

//   for (let i = 0; i < img__slider.length; i++) {
//     img__slider[i].classList.remove("active");
//   }

//   img__slider[etape].classList.add("active");
// });
