// ----------->Creation des elements du trie par Nom/Date/popularité<-----------
import { CreatPhotographerGallery } from "../factories/photographerFactory.js";

export function sortingMenu(photos) {
  // Création des éléments du menu de tri
  const photographershead = document.querySelector("#photographer-page");

  const menuSort = document.createElement("div");
  menuSort.classList.add("menu_sort");
  photographershead.appendChild(menuSort);

  // titre du menu

  const menuSortTitle = document.createElement("span");
  menuSortTitle.classList.add("menuSort_title");
  menuSortTitle.textContent = "Trier par ";
  menuSort.appendChild(menuSortTitle);

  // Boutton choix trie

  const menuSortButton = document.createElement("button");
  menuSortButton.setAttribute("id", "menu");
  menuSortButton.setAttribute("aria-controls", "options du filtres");
  menuSortButton.setAttribute("aria-expanded", "false");
  menuSort.appendChild(menuSortButton);

  // Menu selectioné

  const currentChoice = document.createElement("div");
  currentChoice.classList.add("menu_current_choice");
  menuSortButton.appendChild(currentChoice);
  currentChoice.textContent = "Popularité";
  currentChoice.addEventListener("click", function() {
    otherChoice.style.display = "block";
  });

  const otherChoice = document.createElement("div");
  otherChoice.classList.add("menu_other_choice");
  menuSortButton.appendChild(otherChoice);

  // popularité

  const menuSort1 = document.createElement("div");
  otherChoice.appendChild(menuSort1);
  menuSort1.classList.add("choice");
  menuSort1.classList.add("chevron");
  menuSort1.textContent = "Popularité";

  menuSort1.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    sortByPopularity(photos);

    currentChoice.textContent = "Popularité";
    otherChoice.style.display = "none";
  });

  // name

  const menuSort2 = document.createElement("div");
  otherChoice.appendChild(menuSort2);
  menuSort2.classList.add("choice");
  menuSort2.classList.add("no-chevron");
  menuSort2.textContent = "Name";
  // Afficher la gallerie du photographe / Trier par nom
  menuSort2.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    sortByName(photos);
    currentChoice.textContent = "Name";
    otherChoice.style.display = "none";
  });

  // Date
  const menuSort3 = document.createElement("div");
  menuSort3.classList.add("choice");
  menuSort3.classList.add("no-chevron");
  otherChoice.appendChild(menuSort3);
  menuSort3.textContent = "Date";
  // Afficher la gallerie du photographe / Trier par date
  menuSort3.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    sortByDate(photos);
    currentChoice.textContent = "Date";
    otherChoice.style.display = "none";
  });
}

//************ Filtres de la gallerie photos************

export function sortByName(photos) {
  photos.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  CreatPhotographerGallery(photos);
}

// filtrer les photos par date
export function sortByDate(photos) {
  photos.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  CreatPhotographerGallery(photos);
}

// filtrer les photos par popolarity
export function sortByPopularity(photos) {
  photos.sort(function(a, b) {
    return b.likes - a.likes;
  });
  CreatPhotographerGallery(photos);
}
