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
  console.log(photographers);
  return { photographers: [...photographers] };
}

/*----------------------------*/

async function displayData(photographers) {
  const photographersSection = document.querySelector("#main");

  photographers.forEach((photographer) => {
    const link = document.createElement("a");
    link.setAttribute("href", `/photographer.html?id=${photographer.id}`);

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

    link.appendChild(article);
    // Article closing
    photographersSection.appendChild(link);
  });
}

// Afficher les data

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
