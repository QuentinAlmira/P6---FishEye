/*Recuperer les data photographes dans le json*/

async function getPhotographers() {
  let photographers = [];

  await fetch("photographers.json")
    .then((response) => response.json())
    .then((data) => {
      photographers = data.photographers;
    })
    .catch((error) => {
      alert(
        "Une erreur est survenue, veuillez contacter l'administrateur du site !! "
      );
      console.log(error);
    });
  return { photographers: [...photographers] };
}

/*----------------------------*/

// Afficher les datas
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  PhotographerHeader(photographers);
}

init();

async function PhotographerHeader(photographers) {
  photographers.forEach((photographer, index) => {
    console.log(photographer);
  });
}

// async function photographersPage(photographers) {
//   const photographersPage = document.querySelector("#photographer-page");

//   // ********************photographer header******************
//   const pheader = document.createElement("section");
//   photographersPage.appendChild(pheader);
//   pheader.classList.add("photographer-page__header");

//   const pHeaderLeft = document.createElement("div");
//   pHeaderLeft.classList.add("photographer-page__header-left");
//   pheader.appendChild(pHeaderLeft);

//   const pHeaderLeftinfo = document.createElement("div");
//   pHeaderLeftinfo.classList.add("photographer-page__header-left__info");
//   pHeaderLeft.appendChild(pHeaderLeftinfo);

//   const cardName = document.createElement("h2");
//   cardName.classList.add("card__name");
//   pHeaderLeftinfo.appendChild(cardName);
//   cardName.textContent = `${photographers.name}`;

//   const cardLocation = document.createElement("p");
//   cardLocation.classList.add("card__location");
//   pHeaderLeftinfo.appendChild(cardLocation);
//   cardLocation.textContent = "London, UK";

//   const cardTagline = document.createElement("p");
//   cardTagline.classList.add("card__tagline");
//   pHeaderLeftinfo.appendChild(cardTagline);
//   cardTagline.textContent = "Voir le beau dans le quotidien";

//   // photographer contact button

//   const pContact = document.createElement("button");
//   pContact.classList.add("photographer-page__header-left__contact");
//   pheader.appendChild(pContact);
//   pContact.textContent = "Contactez-moi";

//   // photographer Id picture

//   const pID = document.createElement("div");
//   pID.classList.add("photographer-page__header-right");
//   pheader.appendChild(pID);

//   const idPicture = document.createElement("img");
//   idPicture.setAttribute("src", "./assets/photographersID/MimiKeel.jpg");
//   pID.appendChild(idPicture);

//   // ********************photographer Gallery******************

//   const photographerGallery = document.createElement("section");
//   photographerGallery.classList.add("photographer-page__select-option");
//   photographersPage.appendChild(photographerGallery);

//   const pGallerySort = document.createElement("label");
//   pGallerySort.setAttribute("id", "listboxlabel");
//   pGallerySort.textContent = "Trier par";
//   photographerGallery.appendChild(pGallerySort);

//   const pGallerySelect = document.createElement("div");
//   pGallerySelect.classList.add("custom-select-wrapper");
//   photographerGallery.appendChild(pGallerySelect);

//   const pGalleryFilter = document.createElement("button");
//   pGalleryFilter.classList.add("custom-select");
//   pGallerySelect.appendChild(pGalleryFilter);
// }
