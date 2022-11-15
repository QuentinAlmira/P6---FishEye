import { displayHeader } from "../factories/photographerFactory.js";
import { CreatPhotographerGallery } from "../factories/photographerFactory.js";
// import { SortingMenu } from "../factories/SortingMenu.js";

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

// filtrer les photos par nom
async function sortByName(photos) {
  photos.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  CreatPhotographerGallery(photos);
}

// filtrer les photos par date
function sortByDate(photos) {
  photos.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  CreatPhotographerGallery(photos);
}

// Afficher les datas media
async function lunch() {
  const { media } = await getMedia();
  let photos = await filterMedia(media);

  CreatPhotographerGallery(photos);

  const nameSort = document.querySelector(".sortingByName");
  nameSort.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    sortByName(photos);
  });

  const dateSort = document.querySelector(".sortingByDate");
  dateSort.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    sortByDate(photos);
    console.log(photos);
  });
}

lunch();
