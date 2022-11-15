const beforeList = document.querySelector(".list__content--before");
const afterList = document.querySelector(".list__content--after");

const displayArray = (items, after, key) => {
  let list = after ? afterList : beforeList;
  if (key) {
    list.innerHTML = items.map((item) => item.name).join("<br/>");
  } else {
    list.innerHTML = items.join("<br/>");
  }
};

/*
 ** Array d'objets
 */

const fruits = [
  {
    name: "Orange 🍊",
    position: 3,
    perime: "2022-01-01",
  },
  {
    name: "Pomme 🍎",
    position: 1,
    perime: "2021-01-01",
  },
  {
    name: "Fraise 🍓",
    position: 2,
    perime: "2021-02-01",
  },
  {
    name: "Pastèque 🍉",
    position: 4,
    perime: "2021-03-01",
  },
  {
    name: "Banane 🍌",
    position: 6,
    perime: "2021-04-01",
  },
  {
    name: "Citron 🍋",
    position: 5,
    perime: "2021-05-01",
  },
];

displayArray(fruits, false, "name");

/*
 ** TRI PAR NOM
 */

console.log(img);

fruits.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

/*
 ** TRI PAR DATE
 */

fruits.sort(function(a, b) {
  return new Date(a.perime) - new Date(b.perime);
});

/*
 ** TRI PAR POSITION
 */

fruits.sort(function(a, b) {
  return a.position - b.position;
});

displayArray(fruits, true, "name");

async function filter(media) {
  let photo = media.filter((photo) => photo.photographerId.toString() === id);

  console.log(photo);
}
