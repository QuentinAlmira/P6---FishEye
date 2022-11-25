export async function displayHeader(photographer) {
  const photographershead = document.querySelector("#photographer-page");

  const pheader = document.createElement("section");

  // photographer informations

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
  pHeaderLeftinfo.appendChild(cardName);
  cardName.textContent = `${photographer.name}`;

  console.log(photographer.name);

  const cardLocation = document.createElement("p");
  cardLocation.classList.add("card__location");
  pHeaderLeftinfo.appendChild(cardLocation);
  cardLocation.textContent = `${photographer.city}`;

  const cardTagline = document.createElement("p");
  cardTagline.classList.add("card__tagline");
  pHeaderLeftinfo.appendChild(cardTagline);
  cardTagline.textContent = `${photographer.tagline}`;

  // photographer contact button

  const pContact = document.createElement("button");
  pContact.classList.add("modalButton");
  pheader.appendChild(pContact);
  pContact.textContent = "Contactez-moi";
  //activer l'action open lors du click
  pContact.addEventListener("click", launchModal);

  //   // photographer Id picture

  const pID = document.createElement("div");
  pID.classList.add("photographer-page__header-right");
  pheader.appendChild(pID);

  const idPicture = document.createElement("img");
  idPicture.setAttribute(
    "src",
    `./assets/photographersID/${photographer.portrait}`
  );
  pID.appendChild(idPicture);
}

// -------------------------------------Gallery------------------------------------------------------

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

  photos.forEach((img) => {
    const pictureCard = document.createElement("div");
    pictureCard.classList.add("pictureCard");
    // pictureCard.setAttribute("data-pos", pos);
    pPortfolio.appendChild(pictureCard);

    const pictureCardContent = document.createElement("div");
    pictureCardContent.classList.add("pictureCard_content");
    pictureCardContent.setAttribute("data-pos", pos);
    pictureCard.appendChild(pictureCardContent);

    if (img.image !== undefined) {
      const pPicture = document.createElement("img");
      pPicture.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.image}`
      );
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
      video.setAttribute("autoplay", true);
      video.appendChild(sourceVideo);
      pictureCardContent.appendChild(video);
    }

    // Display picture name

    const pictureCardInfo = document.createElement("div");
    pictureCardInfo.classList.add("pictureCard_info");
    pictureCard.appendChild(pictureCardInfo);

    const pictureName = document.createElement("div");

    pictureName.textContent = `${img.title}`;
    pictureCardInfo.appendChild(pictureName);

    const likes = document.createElement("div");

    likes.textContent = `${img.likes}`;
    pictureCardInfo.appendChild(likes);

    const heart = document.createElement("i");

    heart.classList.add("fa-regular");
    heart.classList.add("fa-heart");
    pictureCardInfo.appendChild(heart);

    let curentLikes = img.likes;

    heart.addEventListener("click", function() {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid");
      ++img.likes;
    });

    pos++;
  });

  // *********************************Carrousel  *********************************

  document.querySelectorAll(".pictureCard_content").forEach((element) => {
    element.addEventListener("click", function(event) {
      event.stopPropagation();
      event.preventDefault();

      // ouvrir la caroussel avec la position disponible sur la carte

      content.style.display = "none";

      const Carrousel = document.querySelector("#Carrousel");

      const selected_menu = document.createElement("div");
      selected_menu.classList.add("selected_menu");
      Carrousel.appendChild(selected_menu);

      const precedent = document.createElement("div");
      precedent.classList.add("precedent");
      precedent.textContent = "<";
      selected_menu.appendChild(precedent);

      const suivant = document.createElement("div");
      suivant.classList.add("suivant");
      suivant.textContent = ">";
      selected_menu.appendChild(suivant);

      if (document.querySelector(".slider") != null)
        document.querySelector(".slider").remove();

      let picturepos = element.dataset.pos;

      const slider = document.createElement("div");
      slider.classList.add("slider");
      Carrousel.appendChild(slider);

      photos.forEach((img) => {
        const pPicture = document.createElement("img");
        pPicture.setAttribute(
          "src",
          `./assets/Portfolio/${img.photographerId}/${img.image}`
        );
        pPicture.classList.add("img__slider");
        slider.appendChild(pPicture);
      });

      console.log(picturepos);

      let img__slider = document.getElementsByClassName("img__slider");
      let etape = 0;

      img__slider[picturepos].classList.add("active");

      // -------------Controle du Slider------------
      // set up button next

      suivant.addEventListener("click", function() {
        etape++;
        if (etape >= img__slider.length) {
          etape = 0;
        }

        for (let i = 0; i < img__slider.length; i++) {
          img__slider[i].classList.remove("active");
        }

        img__slider[etape].classList.add("active");
      });

      // // set up button previous

      precedent.addEventListener("click", function() {
        etape--;
        if (etape < 0) {
          etape = img__slider.length - 1;
        }

        for (let i = 0; i < img__slider.length; i++) {
          img__slider[i].classList.remove("active");
        }

        img__slider[etape].classList.add("active");
      });
    });
  });
}
