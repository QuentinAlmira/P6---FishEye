const tableau = [1, 5, 9, 8];

let elementRechercher = tableau.find((num) => num === 6);
console.log(
  " find retourne l'element s'il est disponible sinon null ou undefined :" +
    elementRechercher
);

let positionElement = tableau.indexOf(9);
console.log(positionElement);

function createElement() {
  const Container = document.querySelector(".ancre");

  let element1 = document.createElement("div");

  Container.appendChild(element1);
}

const testName = document.querySelector(".sortingByName");

testName.addEventListener("click", test);

function test() {
  console.log("salut");
}

// ----------------------------------------

/****************Carousel */

export function CreatCarrousel(photos) {
  console.log("salut");
  const Carrousel = document.querySelector("#Carrousel");
  // let photo = media.filter((photo) => photo.photographerId.toString() === id);

  const slider = document.createElement("div");
  slider.classList.add("slider");
  Carrousel.appendChild(slider);

  photos.forEach((img) => {
    const pPicture = document.createElement("img");
    pPicture.setAttribute(
      "src",
      `./assets/Portfolio/${img.photographerId}/${img.image}`
    );
    pPicture.classList.add("img__slider");
    slider.appendChild(pPicture);

    let img__slider = document.getElementsByClassName("img__slider");
    let etape = 0;

    img__slider[0].classList.add("active");
  });
}

// remove active img

export function removeActiveimage(img__slider) {
  for (let i = 0; i < img__slider.length; i++) {
    img__slider[i].classList.remove("active");
    console.log("hello");
  }
}
export function RunCarrousel() {
  console.log("ola");
  // set up button next
  let suivant = document.querySelector(".suivant");
  suivant.addEventListener("click", function() {
    etape++;
    if (etape >= img__slider.length) {
      etape = 0;
    }
    removeActiveimage();
    img__slider[etape].classList.add("active");
  });
  // // set up button previous
  // let precedent = document.querySelector(".precedent");
  // precedent.addEventListener("click", function() {
  //   etape--;
  //   if (etape < 0) {
  //     etape = img__slider.length - 1;
  //   }
  //   removeActiveimage();
  //   img__slider[etape].classList.add("active");
  // });
}
