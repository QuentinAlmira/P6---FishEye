//Filtrage et affichage du contenu de la page Photographers

// Fonctions importées :
import { displayHeader } from "../factories/photographerFactory.js";
import { CreatPhotographerGallery } from "../factories/photographerFactory.js";
import { sortingMenu } from "../factories/SortingMenu.js";

// **************Photographers***************

// Création du header
const content = document.querySelector("#content");

const photographerHeader = document.createElement("header");
content.appendChild(photographerHeader);

const headerLink = document.createElement("a");
headerLink.setAttribute("href", "/index.html");
headerLink.classList.add("header__link__page");
headerLink.setAttribute("aria-labelledby", "Retour à la page d'acceuil");
photographerHeader.appendChild(headerLink);

const headerLinkLogo = document.createElement("img");
headerLinkLogo.setAttribute("src", "./assets/images/logo.png");
headerLinkLogo.setAttribute("alt", "Logo de FishEye");
headerLinkLogo.classList.add("header__logo");
headerLink.appendChild(headerLinkLogo);

// Création du Main
const photographerMain = document.createElement("main");
photographerMain.classList.add("photographer_main");
photographerMain.setAttribute("id", "main");
photographerMain.setAttribute("aria-hidden", "false");
content.appendChild(photographerMain);

const photographerPage = document.createElement("div");
photographerPage.classList.add("photographer-page");
photographerPage.setAttribute("id", "photographer-page");
photographerMain.appendChild(photographerPage);

// Filtrer chaque photographer par ID
async function filterPhotographer(photographers) {
  let photographer = photographers.filter(
    (photographer) => photographer.id.toString() === id
  );
  return photographer[0];
}

// Afficher les datas Photographer dependants
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  let photographer = await filterPhotographer(photographers);
  displayHeader(photographer);
}
init();

// **************Media***************

// Filtrer chaque medias par ID
export async function filterMedia(media) {
  let photo = media.filter((photo) => photo.photographerId.toString() === id);
  return photo;
}

// Afficher les datas medias dependants
async function lunch() {
  const { media } = await getMedia();
  let photos = await filterMedia(media);
  // Afficher le menu de tri
  sortingMenu(photos);
  // Afficher la gallerie du photographe
  CreatPhotographerGallery(photos);
}

lunch();
