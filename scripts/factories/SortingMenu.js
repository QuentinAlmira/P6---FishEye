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

  const menuSortButton = document.createElement("div");
  menuSortButton.setAttribute("id", "menu");
  menuSortButton.setAttribute("aria-controls", "options du filtres");
  menuSortButton.setAttribute("aria-expanded", "false");
  menuSort.appendChild(menuSortButton);

  // Menu selectioné

  const currentChoice = document.createElement("button");
  currentChoice.classList.add("menu_current_choice");
  menuSortButton.appendChild(currentChoice);
  currentChoice.textContent = "Popularité";

  const otherChoice = document.createElement("div");
  otherChoice.classList.add("menu_other_choice");
  menuSortButton.appendChild(otherChoice);

  // popularité

  const menuSort1 = document.createElement("button");
  otherChoice.appendChild(menuSort1);
  menuSort1.classList.add("choice");
  menuSort1.classList.add("chevron");
  menuSort1.setAttribute("aria-label", "trier par popularité");
  menuSort1.textContent = "Popularité";

  currentChoice.addEventListener("click", function() {
    otherChoice.style.display = "block";
    menuSortButton.setAttribute("aria-expanded", "true");
  });

  menuSort1.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    sortByPopularity(photos);
    menuSortButton.focus();
    currentChoice.textContent = "Popularité";
    otherChoice.style.display = "none";
    menuSortButton.setAttribute("aria-expanded", "false");
  });

  // name

  const menuSort2 = document.createElement("button");
  otherChoice.appendChild(menuSort2);
  menuSort2.classList.add("choice");
  menuSort2.classList.add("no-chevron");
  menuSort2.setAttribute("aria-label", "trier par nom");
  menuSort2.textContent = "Nom";
  // Afficher la gallerie du photographe / Trier par nom
  menuSort2.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    sortByName(photos);
    menuSortButton.focus();
    currentChoice.textContent = "Nom";
    otherChoice.style.display = "none";
    menuSortButton.setAttribute("aria-expanded", "false");
  });

  // Date
  const menuSort3 = document.createElement("button");
  menuSort3.classList.add("choice");
  menuSort3.classList.add("no-chevron");
  otherChoice.appendChild(menuSort3);
  menuSort3.setAttribute("aria-label", "trier par date");
  menuSort3.textContent = "Date";

  // Afficher la gallerie du photographe / Trier par date
  menuSort3.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    sortByDate(photos);
    menuSortButton.focus();
    currentChoice.textContent = "Date";
    otherChoice.style.display = "none";
    menuSortButton.setAttribute("aria-expanded", "false");
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
