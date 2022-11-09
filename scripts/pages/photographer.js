// -----------------------  // Afficher les datas
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  let photographer = await filterPhotographer(photographers);
  displayData(photographer);
}
init();

// -----------------------  // Creation des éléments du Header

const photographershead = document.querySelector("#photographer-page");

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
  cardLocation.textContent = `${photographer.city}`;

  const cardTagline = document.createElement("p");
  cardTagline.classList.add("card__tagline");
  pHeaderLeftinfo.appendChild(cardTagline);
  cardTagline.textContent = `${photographer.tagline}`;

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
  // filtrer les photo en fonction de l'id du photographe
  let photo = media.filter((photo) => photo.photographerId.toString() === id);

  const pGallery = document.createElement("section");
  photographershead.appendChild(pGallery);
  pGallery.classList.add("photographer-Gallery");

  const sorting = document.createElement("div");
  sorting.classList.add("sorting");
  pGallery.appendChild(sorting);

  const sortingByName = document.createElement("button");
  sortingByName.classList.add("sortingByName");
  sorting.appendChild(sortingByName);
  sortingByName.textContent = "Name";

  const sortingByDate = document.createElement("button");
  sortingByDate.classList.add("sortingByDate");
  sorting.appendChild(sortingByDate);
  sortingByDate.textContent = "Date";

  const pPortfolio = document.createElement("div");
  pGallery.appendChild(pPortfolio);
  pPortfolio.classList.add("photographer-Portfolio");

  // -----------------------------------------Filtres Photo---------------------------------

  // filtrer par Nom
  function sortByName() {
    photo.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
  }
  sortingByName.addEventListener("click", sortByName);

  console.log(photo);

  // filter par Date

  function sortByDate() {
    photo.sort(function(a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  }

  sortingByDate.addEventListener("click", sortByDate);

  // Boucler les images du photographe
  photo.forEach((img) => {
    const pictureCard = document.createElement("div");
    pictureCard.classList.add("pictureCard");
    pPortfolio.appendChild(pictureCard);

    if (img.image !== undefined) {
      const pPicture = document.createElement("img");
      pPicture.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.image}`
      );

      pictureCard.appendChild(pPicture);
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
      pictureCard.appendChild(video);
    }

    // Display picture name

    const pictureName = document.createElement("div");

    pictureName.textContent = `${img.title}`;
    pictureCard.appendChild(pictureName);

    // ouverture du carrousel
    pPortfolio.addEventListener("click", displayCarrousel);
  });
}

// ------------------------------------------------------------------------------

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

  // set up button next

  let suivant = document.querySelector(".suivant");

  suivant.addEventListener("click", function() {
    etape++;
    if (etape >= nbr__img) {
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
      etape = nbr__img - 1;
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
