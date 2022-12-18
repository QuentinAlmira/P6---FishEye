// ----------->APi's pour récuperer les datas du Json<-----------

/************* Recuperer l'id du photographer depuis l'URL *************/
const lien = window.location.search;
const urlParams = new URLSearchParams(lien);
const id = urlParams.get("id");

/*************Recuperer les data Photographer dans le json*************/
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

/*************Recuperer les data Media dans le json*************/
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
