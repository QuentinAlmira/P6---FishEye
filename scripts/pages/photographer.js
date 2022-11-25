import { displayHeader } from "../factories/photographerFactory.js";
import { CreatPhotographerGallery } from "../factories/photographerFactory.js";
import { sortingMenu } from "../factories/SortingMenu.js";
import { sortByName } from "../factories/SortingMenu.js";
import { sortByDate } from "../factories/SortingMenu.js";
import { sortByPopularity } from "../factories/SortingMenu.js";

// ***********************************************-Photographers-*******************************************************************

// Filtrer chaque photographer par ID

async function filterPhotographer(photographers) {
  let photographer = photographers.filter(
    (photographer) => photographer.id.toString() === id
  );
  return photographer[0];
}

// Afficher les datas Photographer
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  let photographer = await filterPhotographer(photographers);
  displayHeader(photographer);
}
init();

// **************-Media-***************

async function filterMedia(media) {
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
