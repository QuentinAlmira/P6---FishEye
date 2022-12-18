// ----------->Affichage des elements de la page index<-----------

// Création du Header

const content = document.querySelector("#Content");

const indexHeader = document.createElement("header");
content.appendChild(indexHeader);

const headerLink = document.createElement("a");
headerLink.setAttribute("href", "/index.html");
headerLink.classList.add("header__link");
headerLink.setAttribute("aria-label", "Recharger la page");
indexHeader.appendChild(headerLink);

const headerLinkLogo = document.createElement("img");
headerLinkLogo.setAttribute("src", "./assets/images/logo.png");
headerLinkLogo.setAttribute("alt", "Page d'acceuil Fisheye");
headerLinkLogo.classList.add("header__logo");
headerLink.appendChild(headerLinkLogo);

const headerTitle = document.createElement("h1");
headerTitle.classList.add("header__title");
headerTitle.textContent = "Nos photographes";
indexHeader.appendChild(headerTitle);

// Création du Main
const indexMain = document.createElement("main");
indexMain.classList.add("photographer_section");
indexMain.setAttribute("id", "main");
content.appendChild(indexMain);

/*************Recuperer les data photographes dans le json*************/

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

// ************Création des élements de la page index************
async function displayData(photographers) {
  const photographersSection = document.querySelector("#main");
  // Boucle pour afficher les portraits et informations des photographes
  photographers.forEach((photographer) => {
    const link = document.createElement("a");
    link.setAttribute("href", `/photographer.html?id=${photographer.id}`);
    link.classList.add("photographer_card");
    link.setAttribute("role", "link");
    link.setAttribute(
      "aria-label",
      `ouvrir la page du photographe ${photographer.name}`
    );

    const article = document.createElement("article");

    // Photographer Id Picture

    const pPicture = document.createElement("img");
    pPicture.setAttribute(
      "src",
      `./assets/photographersID/${photographer.portrait}`
    );
    pPicture.setAttribute(
      "alt",
      `portrait du photographe ${photographer.name} `
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
    ptagLine.classList.add("card__tagline");
    ptagLine.textContent = `${photographer.tagline}`;
    article.appendChild(ptagLine);

    // photographer price
    const pPrice = document.createElement("p");
    pPrice.classList.add("card__price");
    pPrice.textContent = `${photographer.price}€/jour`;
    article.appendChild(pPrice);

    link.appendChild(article);
    photographersSection.appendChild(link);
  });
}

// ************Afficher les datas************

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
