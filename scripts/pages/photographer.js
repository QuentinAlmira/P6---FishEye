// -----------------------  // Afficher les datas
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  let photographer = await filterPhotographer(photographers);
  displayData(photographer);
  console.log(photographer);
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
  pContact.classList.add("photographer-page__header-left__contact");
  pheader.appendChild(pContact);
  pContact.textContent = "Contactez-moi";

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
}

lunch();

// -----------------------  // Creation des éléments de la gallery
async function displayMedia(media) {
  let photo = media.filter((photo) => photo.photographerId.toString() === id);
  console.log(photo);

  const photographersGallery = document.querySelector("#content");
  const pGallery = document.createElement("section");
  photographersGallery.appendChild(pGallery);
  pGallery.classList.add("photographer-Gallery");

  photo.forEach((img) => {
    const pPicture = document.createElement("img");
    pPicture.setAttribute(
      "src",
      `./assets/Portfolio/${img.photographerId}/${img.image}`
    );
    pGallery.appendChild(pPicture);
  });
}
