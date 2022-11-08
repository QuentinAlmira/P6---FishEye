// -----------------------  // Afficher les datas
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  let photographer = await filterPhotographer(photographers);
  displayData(photographer);
}
init();

// -----------------------  // Creation des éléments du Header

const photographershead = document.querySelector("#content");

async function displayData(photographer) {
  const pheader = document.createElement("section");

  // photographer informations

  photographershead.appendChild(pheader);
  pheader.classList.add("photographer-page__header");

  const pHeaderLeft = document.createElement("div");
  pHeaderLeft.classList.add("photographer-page__header-left");
  pheader.appendChild(pHeaderLeft);

  const pHeaderLeftinfo = document.createElement("div");
  pHeaderLeftinfo.classList.add("photographer-page__header-left__info");
  pHeaderLeft.appendChild(pHeaderLeftinfo);

  const cardName = document.createElement("h2");
  cardName.classList.add("card__name");
  pHeaderLeftinfo.appendChild(cardName);
  cardName.textContent = `${photographer.name}`;

  const cardLocation = document.createElement("p");
  cardLocation.classList.add("card__location");
  pHeaderLeftinfo.appendChild(cardLocation);
  cardLocation.textContent = "London, UK";

  const cardTagline = document.createElement("p");
  cardTagline.classList.add("card__tagline");
  pHeaderLeftinfo.appendChild(cardTagline);
  cardTagline.textContent = "Voir le beau dans le quotidien";

  // photographer contact button

  const pContact = document.createElement("button");
  pContact.classList.add("modalButton");
  pheader.appendChild(pContact);
  pContact.textContent = "Contactez-moi";
  //activer l'action open lors du click
  pContact.addEventListener("click", launchModal);

  //   // photographer Id picture

  const pID = document.createElement("div");
  pID.classList.add("photographer-page__header-right");
  pheader.appendChild(pID);

  const idPicture = document.createElement("img");
  idPicture.setAttribute(
    "src",
    `./assets/photographersID/${photographer.portrait}`
  );
  pID.appendChild(idPicture);
}

// -----------------------  // Filtrer par ID

async function filterPhotographer(photographers) {
  let photographer = photographers.filter(
    (photographer) => photographer.id.toString() === id
  );
  return photographer[0];
}

// --------------------------------Medias--------------------------------

async function lunch() {
  const { media } = await getMedia();
  displayMedia(media);
  CreatCarrousel(media);
  RunCarrousel();
}

lunch();

// -----------------------  // Creation des éléments de la gallery
async function displayMedia(media) {
  let photo = media.filter((photo) => photo.photographerId.toString() === id);

  const photographersGallery = document.querySelector("#content");
  const pGallery = document.createElement("section");
  photographersGallery.appendChild(pGallery);
  pGallery.classList.add("photographer-Gallery");

  const pPortfolio = document.createElement("div");
  pGallery.appendChild(pPortfolio);
  pPortfolio.classList.add("photographer-Portfolio");

  photo.forEach((img) => {
    if (img.image !== undefined) {
      const pPicture = document.createElement("img");
      pPicture.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.image}`
      );

      pPortfolio.appendChild(pPicture);
    } else {
      const video = document.createElement("video");
      const sourceVideo = document.createElement("source");

      sourceVideo.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.video}`
      );
      sourceVideo.setAttribute("type", "video/mp4");
      video.setAttribute("width", "300px");
      video.setAttribute("autoplay", true);
      video.appendChild(sourceVideo);
      pPortfolio.appendChild(video);

      /****************Carousel */

      // Ouverture du Carrousel

      pPortfolio.addEventListener("click", displayCarrousel);
      const Carrousel = document.querySelector("#Carrousel");

      function displayCarrousel() {
        Carrousel.style.display = "block";
        pPortfolio.style.display = "none";
      }
    }
  });
}

// ------------------------------------------------------------------------------

async function CreatCarrousel(media) {
  let photo = media.filter((photo) => photo.photographerId.toString() === id);

  const nbPhoto = photo.length;

  photo.forEach((img) => {
    const pPicture = document.createElement("img");
    pPicture.setAttribute(
      "src",
      `./assets/Portfolio/${img.photographerId}/${img.image}`
    );
    pPicture.classList.add("img__slider");
    Carrousel.appendChild(pPicture);
  });
}

async function RunCarrousel() {
  let img__slider = document.getElementsByClassName("img__slider");

  let nbr__img = img__slider.length;

  let etape = 0;

  img__slider[0].classList.add("active");

  // remove active img

  function removeActiveimage() {
    for (let i = 0; i < nbr__img; i++) {
      img__slider[i].classList.remove("active");
    }
  }

  let suivant = document.querySelector(".suivant");

  suivant.addEventListener("click", function() {
    etape++;
    if (etape >= nbr__img) {
      etape = 0;
    }
    removeActiveimage();
    img__slider[etape].classList.add("active");
  });

  let precedent = document.querySelector(".precedent");

  precedent.addEventListener("click", function() {
    etape--;
    if (etape < 0) {
      etape = nbr__img - 1;
    }

    removeActiveimage();
    img__slider[etape].classList.add("active");
  });
}
