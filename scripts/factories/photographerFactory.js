// ----------->Creation des elements de la page photographer<-----------

var selectedPhotographer = null;

// ************Photographer information card************
export async function displayHeader(photographer) {
  selectedPhotographer = photographer;
  const photographershead = document.querySelector("#photographer-page");

  // Création des éléments du header
  const pheader = document.createElement("section");

  photographershead.appendChild(pheader);
  pheader.classList.add("photographer-page__header");

  const pHeaderLeft = document.createElement("div");
  pHeaderLeft.classList.add("photographer-page__header-left");
  pheader.appendChild(pHeaderLeft);

  const pHeaderLeftinfo = document.createElement("div");
  pHeaderLeftinfo.classList.add("photographer-page__header-left__info");
  pHeaderLeft.appendChild(pHeaderLeftinfo);

  const cardName = document.createElement("h2");
  cardName.classList.add("card__name");
  cardName.setAttribute("id", "name");
  pHeaderLeftinfo.appendChild(cardName);
  cardName.textContent = `${photographer.name}`;

  const cardLocation = document.createElement("p");
  cardLocation.classList.add("card__location");
  pHeaderLeftinfo.appendChild(cardLocation);
  cardLocation.textContent = `${photographer.city}`;

  const cardTagline = document.createElement("p");
  cardTagline.classList.add("card__tagline");
  pHeaderLeftinfo.appendChild(cardTagline);
  cardTagline.textContent = `${photographer.tagline}`;

  const pContact = document.createElement("button");
  pContact.classList.add("modalButton");
  pheader.appendChild(pContact);
  pContact.textContent = "Contactez-moi";
  pContact.setAttribute("aria-label", "Ouvrir la modal de contact");

  //Ouverture de la modal contact
  pContact.addEventListener("click", function(event) {
    event.stopPropagation();
    event.preventDefault();

    launchModal("contact", photographer, null);
  });

  // Photographer Id picture
  const pID = document.createElement("div");
  pID.classList.add("photographer-page__header-right");
  pheader.appendChild(pID);

  const idPicture = document.createElement("img");
  idPicture.setAttribute(
    "src",
    `./assets/photographersID/${photographer.portrait}`
  );
  idPicture.setAttribute("alt", `Portrait de ${photographer.name}`);
  pID.appendChild(idPicture);
}

// ************Gallery************
export async function CreatPhotographerGallery(photos) {
  const photographershead = document.querySelector("#photographer-page");

  if (document.querySelector(".photographer-Gallery") != null)
    document.querySelector(".photographer-Gallery").remove();

  const pGallery = document.createElement("section");
  photographershead.appendChild(pGallery);
  pGallery.classList.add("photographer-Gallery");

  const pPortfolio = document.createElement("div");
  pGallery.appendChild(pPortfolio);
  pPortfolio.classList.add("photographer-Portfolio");

  let pos = 0;
  let totalLikes = 0;

  photos.forEach((img) => {
    // Boucle pour creer les elements de la gallerie
    const pictureCard = document.createElement("div");
    pictureCard.classList.add("pictureCard");
    pPortfolio.appendChild(pictureCard);

    const pictureCardContent = document.createElement("div");
    pictureCardContent.classList.add("pictureCard_content");
    pictureCardContent.setAttribute("data-pos", pos);
    pictureCard.appendChild(pictureCardContent);

    // Insertion des photos dans la gallerie du photographe en fonction de leur format images/videos
    if (img.image !== undefined) {
      const pPicture = document.createElement("img");
      pPicture.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.image}`
      );
      pPicture.setAttribute("alt", `${img.description}`);
      pPicture.setAttribute("aria-label", "Ouvrir le carrousel media");
      pictureCardContent.appendChild(pPicture);
    } else {
      const video = document.createElement("video");
      const sourceVideo = document.createElement("source");

      sourceVideo.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.video}`
      );
      sourceVideo.setAttribute("type", "video/mp4");
      video.setAttribute("width", "300px");
      video.setAttribute("height", "100%");
      video.setAttribute("autoplay", true);
      video.setAttribute("loop", true);
      video.appendChild(sourceVideo);
      pictureCardContent.appendChild(video);
    }

    // Ouverture de la modal carrousel :
    pictureCardContent.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();

      launchModal("carrousel", photos, pictureCardContent.dataset.pos);
    });

    // Affichage du nom de chaque photo
    const pictureCardInfo = document.createElement("div");
    pictureCardInfo.classList.add("pictureCard_info");
    pictureCard.appendChild(pictureCardInfo);

    const pictureName = document.createElement("div");
    pictureName.classList.add("picture_name");
    pictureName.textContent = `${img.title}`;
    pictureCardInfo.appendChild(pictureName);

    // Création des likes et de leur compteur

    const picturePopularity = document.createElement("div");
    picturePopularity.classList.add("picture_popularity");
    pictureCardInfo.appendChild(picturePopularity);

    const likes = document.createElement("div");
    likes.classList.add("picture_like");

    let curentLikes = img.likes;
    likes.textContent = `${curentLikes}`;
    likes.setAttribute("aria-label", `Nombre de like ${curentLikes}`);
    picturePopularity.appendChild(likes);

    const buttonLike = document.createElement("button");
    buttonLike.classList.add("like_button");
    buttonLike.setAttribute("aria-label", "aimer ce contenu");
    picturePopularity.appendChild(buttonLike);

    const heart = document.createElement("i");
    heart.classList.add("fa-regular");
    heart.classList.add("fa-heart");
    buttonLike.appendChild(heart);

    document.getElementById("name").textContent;

    // Managment du compteur de likes
    heart.addEventListener("click", function(event) {
      if (heart.className.includes("fa-regular")) {
        heart.classList.remove("fa-regular");
        heart.classList.add("fa-solid");
        curentLikes++;
        totalLikes++;
      } else {
        heart.classList.remove("fa-solid");
        heart.classList.add("fa-regular");
        curentLikes--;
        totalLikes--;
      }

      likes.textContent = curentLikes;
      likes.setAttribute("aria-label", `${curentLikes}`);
      document.getElementById("total_likes").textContent = totalLikes;
    });

    totalLikes += curentLikes;
    pos++;
  });
  //Affichage de la frame statique Like/Prix
  CreatPhotographerCounter(totalLikes, selectedPhotographer.price);
}

// Création de la frame statique Like/Prix
function CreatPhotographerCounter(totalLikes, prix) {
  const photographershead = document.querySelector("#photographer-page");

  if (document.querySelector(".total_likes") != null)
    document.querySelector(".total_likes").remove();

  const boxLikesPrices = document.createElement("div");
  boxLikesPrices.classList.add("box_like_price");
  boxLikesPrices.setAttribute("id", "box_like_price");
  photographershead.appendChild(boxLikesPrices);

  const likesContainer = document.createElement("div");
  likesContainer.classList.add("likes_container");
  boxLikesPrices.appendChild(likesContainer);

  const LikesCounter = document.createElement("div");
  LikesCounter.classList.add("total_likes");
  LikesCounter.setAttribute("id", "total_likes");
  likesContainer.appendChild(LikesCounter);
  LikesCounter.textContent = `${totalLikes}`;

  const heartTotal = document.createElement("i");
  heartTotal.classList.add("fa-heart");
  heartTotal.classList.add("fa-solid");
  heartTotal.classList.add("total");
  likesContainer.appendChild(heartTotal);

  const totalPrice = document.createElement("div");
  totalPrice.classList.add("total_price");
  totalPrice.textContent = `${prix}/jour`;
  boxLikesPrices.appendChild(totalPrice);
}

// fonction factory

// class content {
//   selectOutput() {
//     const test = document.querySelector("#content");
//     let divtest = document.createElement("div");
//     test.appendChild(divtest);
//   }
// }

// class image extends content {
//   selectOutput() {
//     const pPicture = document.createElement("img");
//     pPicture.setAttribute(
//       "src",
//       `./assets/Portfolio/${img.photographerId}/${img.image}`
//     );
//   }
// }

// class video extends content {
//   selectOutput() {
//     console.log("whoaf");
//   }
// }

// function factory(type) {
//   switch (type) {
//     case "image":
//       return new image();

//     case "video":
//       return new video();
//   }
// }

// const Pics = factory("image");
// Pics.selectOutput();
