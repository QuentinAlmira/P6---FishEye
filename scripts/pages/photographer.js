/* charger l'id depuis l'URL */
const lien = window.location.search;
console.log(lien);
const urlParams = new URLSearchParams(lien);
console.log(urlParams);
const id = urlParams.get("id");
console.log(id);

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
  let photographer = await filterPhotographer(photographers);
  displayData(photographer);
}
init();

const photographershead = document.querySelector("#content");

async function displayData(photographer) {
  console.log(photographer.name);
}

async function filterPhotographer(photographers) {
  let photographer = photographers.filter(
    (photographer) => photographer.id.toString() === id
  );
  return photographer[0];
}
