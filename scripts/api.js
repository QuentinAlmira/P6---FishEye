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

/*Recuperer les data Media dans le json*/
async function getMedia() {
  let media = [];

  await fetch("photographers.json")
    .then((response) => response.json())
    .then((data) => {
      media = data.media;
    })
    .catch((error) => {
      alert(
        "Une erreur est survenue, veuillez contacter l'administrateur du site !! "
      );
      console.log(error);
    });
  return { media: [...media] };
}

// filtrer les Media par photographers
