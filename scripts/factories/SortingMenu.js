// export function SortingMenu() {
//   const MenuSort = document.querySelector("#menuSort");

//   const sorting = document.createElement("div");
//   sorting.classList.add("sorting");
//   MenuSort.appendChild(sorting);

//   const sortingByName = document.createElement("button");
//   sortingByName.classList.add("sortingByName");
//   sorting.appendChild(sortingByName);
//   sortingByName.textContent = "Name";

//   const sortingByDate = document.createElement("button");
//   sortingByDate.classList.add("sortingByDate");
//   sorting.appendChild(sortingByDate);
//   sortingByDate.textContent = "Date";
// }

// Filtres

function sortByName(photo) {
  photo.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  displayMedia(photo);
}

function sortByDate() {
  photo.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });
}

const nameS = document.querySelectorAll(".sortingByName");
const dateS = document.querySelectorAll(".sortingByDate");

function FilterPhoto() {
  nameS.addEventListener("click", sortByName);
}

// trier par date

function sortByDate() {
  let dateFilter = photo.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  return dateFilter;
}

async function sortByDate(photo) {
  let dateFilter = photo.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  CreatPhotographerGallery(dateFilter);
}

// trier par nom

async function sortByName(photo) {
  let nameFilter = photo.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  return nameFilter;
}
