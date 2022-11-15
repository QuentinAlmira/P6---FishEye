export async function displayHeader(photographer) {
  const photographershead = document.querySelector("#photographer-page");

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

// -------------------------------------Gallery------------------------------------------------------

export async function CreatPhotographerGallery(photos) {
  // ---------------------------------------

  const photographershead = document.querySelector("#photographer-page");

  if (document.querySelector(".photographer-Gallery") != null)
    document.querySelector(".photographer-Gallery").remove();

  const pGallery = document.createElement("section");
  photographershead.appendChild(pGallery);
  pGallery.classList.add("photographer-Gallery");

  const pPortfolio = document.createElement("div");
  pGallery.appendChild(pPortfolio);
  pPortfolio.classList.add("photographer-Portfolio");

  let pos = 0;

  photos.forEach((img) => {
    const pictureCard = document.createElement("div");
    pictureCard.classList.add("pictureCard");
    pictureCard.setAttribute("data-pos", pos);
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

    pos++;
  });

  document.querySelectorAll(".pictureCard").forEach((element) => {
    element.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      // ouvrir la caroussel avec la position disponible sur la carte
      console.log(element.dataset.pos);
    });
  });
}
