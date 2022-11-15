const tableau = [1, 5, 9, 8];

let elementRechercher = tableau.find((num) => num === 6);
console.log(
  " find retourne l'element s'il est disponible sinon null ou undefined :" +
    elementRechercher
);

let positionElement = tableau.indexOf(9);
console.log(positionElement);

function createElement() {
  const Container = document.querySelector(".ancre");

  let element1 = document.createElement("div");

  Container.appendChild(element1);
}

const testName = document.querySelector(".sortingByName");

testName.addEventListener("click", test);

function test() {
  console.log("salut");
}
