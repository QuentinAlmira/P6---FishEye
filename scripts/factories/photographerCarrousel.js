/****************Carousel */

async function CreatCarrousel(media) {
  let photo = media.filter((photo) => photo.photographerId.toString() === id);

  const slider = document.createElement("div");
  slider.classList.add("slider");
  Carrousel.appendChild(slider);

  photo.forEach((img) => {
    const pPicture = document.createElement("img");
    pPicture.setAttribute(
      "src",
      `./assets/Portfolio/${img.photographerId}/${img.image}`
    );
    pPicture.classList.add("img__slider");
    slider.appendChild(pPicture);
  });
}

// remove active img

function removeActiveimage(img__slider) {
  for (let i = 0; i < img__slider.length; i++) {
    img__slider[i].classList.remove("active");
  }
}
async function RunCarrousel(position) {
  let img__slider = document.getElementsByClassName("img__slider");
  let etape = 0;

  img__slider[position].classList.add("active");

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

  // set up button previous

  let precedent = document.querySelector(".precedent");

  precedent.addEventListener("click", function() {
    etape--;
    if (etape < 0) {
      etape = img__slider.length - 1;
    }

    removeActiveimage();
    img__slider[etape].classList.add("active");
  });
}

// Afficher le Carrousel
const Carrousel = document.querySelector("#Carrousel");

async function displayCarrousel() {
  Carrousel.style.display = "block";
  photographershead.style.display = "none";
}
