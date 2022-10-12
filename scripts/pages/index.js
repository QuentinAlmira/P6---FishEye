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

async function displayData(photographers) {
  const photographersSection = document.querySelector("#main");

  photographers.forEach((photographer) => {
    console.log(photographer);

    const article = document.createElement("article");

    // Photographer Id Picture

    const pPicture = document.createElement("img");
    pPicture.setAttribute(
      "src",
      `./assets/photographersID/${photographer.portrait}`
    );
    article.appendChild(pPicture);

    // Photographer name
    const pName = document.createElement("h2");
    pName.textContent = `${photographer.name}`;
    article.appendChild(pName);

    // photographer city
    const pCity = document.createElement("p");
    pCity.textContent = `${photographer.city}, ${photographer.country}`;
    pCity.classList.add("card__location");
    article.appendChild(pCity);

    // photographer tagline
    const ptagLine = document.createElement("p");
    ptagLine.textContent = `${photographer.tagline}`;
    article.appendChild(ptagLine);

    // photographer price
    const pPrice = document.createElement("p");
    pPrice.textContent = `${photographer.price}€`;
    article.appendChild(pPrice);

    // Article closing
    photographersSection.appendChild(article);

    /*const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
    createPhotographerCard(element);*/
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

/*Commennt crer les variables?*/
/*
function createPhotographerCard(photographer) {
  this.$wrapperCard = document.createElement("li");


/*Comment récuperer juste les données de photographes?*/
/*Comment utiliser les data du JSON photographes??*/
/*getter??*/
/*string??*/
