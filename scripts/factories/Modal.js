function createContentCaroussel(photos, pos) {
  const carrousel = document.createElement("div");
  carrousel.setAttribute("id", "Carrousel");
  carrousel.classList.add("Carrousel");

  const selected_menu = document.createElement("div");
  selected_menu.classList.add("selected_menu");
  carrousel.appendChild(selected_menu);

  const precedent = document.createElement("div");
  precedent.classList.add("precedent");
  precedent.textContent = "<";
  precedent.setAttribute("aria-label", "media precedent");
  selected_menu.appendChild(precedent);

  const suivant = document.createElement("div");
  suivant.classList.add("suivant");
  suivant.textContent = ">";
  suivant.setAttribute("aria-label", "media suivant");
  selected_menu.appendChild(suivant);

  if (document.querySelector(".slider") != null)
    document.querySelector(".slider").remove();

  const slider = document.createElement("div");
  slider.classList.add("slider");
  carrousel.appendChild(slider);

  const pictureContainer = document.createElement("div");
  pictureContainer.classList.add("slider_picture_container");
  slider.appendChild(pictureContainer);

  const pictureNameContainer = document.createElement("div");
  pictureNameContainer.classList.add("slider_picture_name_container");
  slider.appendChild(pictureNameContainer);

  // Boucler les images pour les afficher dans le carrousel
  photos.forEach((img) => {
    if (img.image !== undefined) {
      const pPicture = document.createElement("img");
      pPicture.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.image}`
      );
      pPicture.classList.add("img__slider");
      pPicture.setAttribute("alt", `${img.description}`);
      pictureContainer.appendChild(pPicture);
    } else {
      const video = document.createElement("video");
      video.classList.add("img__slider");
      const sourceVideo = document.createElement("source");

      sourceVideo.setAttribute(
        "src",
        `./assets/Portfolio/${img.photographerId}/${img.video}`
      );
      sourceVideo.setAttribute("type", "video/mp4");
      video.setAttribute("autoplay", true);
      video.setAttribute("loop", true);
      video.appendChild(sourceVideo);
      pictureContainer.appendChild(video);
    }

    // Afficher le nom correspondant aux photos/videos
    const pictureName = document.createElement("div");
    pictureName.classList.add("slider_picture_name");
    pictureName.textContent = img.title;
    pictureNameContainer.appendChild(pictureName);
  });

  return carrousel;
}

function actionCaroussel(pos) {
  const precedent = document.querySelector(".precedent");
  const suivant = document.querySelector(".suivant");

  let img__slider = document.getElementsByClassName("img__slider");
  let img__name = document.getElementsByClassName("slider_picture_name");
  let etape = pos;

  img__slider[pos].classList.add("active");

  img__name[pos].classList.add("active");

  // -------------Controle du Slider------------
  // set up button next

  suivant.addEventListener("click", function() {
    etape++;

    if (etape >= img__slider.length) {
      etape = 0;
    }

    for (let i = 0; i < img__slider.length; i++) {
      img__slider[i].classList.remove("active");
      img__name[i].classList.remove("active");
    }

    img__slider[etape].classList.add("active");
    img__name[etape].classList.add("active");
  });
  // // set up button previous

  precedent.addEventListener("click", function() {
    etape--;
    if (etape < 0) {
      etape = img__slider.length - 1;
    }

    for (let i = 0; i < img__slider.length; i++) {
      img__slider[i].classList.remove("active");
      img__name[i].classList.remove("active");
    }

    img__slider[etape].classList.add("active");
    img__name[etape].classList.add("active");
  });
}

function createContentContact() {
  // Création des composants de la modal contact
  const modalContactFrame = document.createElement("div");
  modalContactFrame.classList.add("modal_contact_frame");

  const mForm = document.createElement("form");
  mForm.setAttribute("id", "form");
  mForm.setAttribute("method", "get");
  mForm.classList.add("modal__form__form-content");
  mForm.setAttribute("aria-label", "formulaire de contact");
  modalContactFrame.appendChild(mForm);

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal_header");
  mForm.appendChild(modalHeader);

  const modalHeaderContact = document.createElement("div");
  modalHeaderContact.classList.add("modal_header_contact");
  modalHeaderContact.textContent = "Contactez-moi";
  modalHeader.appendChild(modalHeaderContact);

  const modalHeaderName = document.createElement("div");
  modalHeaderName.classList.add("modal_header_name");
  modalHeaderName.textContent = document.getElementById("name").textContent;
  modalHeader.appendChild(modalHeaderName);

  const firstNameLabel = document.createElement("label");
  firstNameLabel.classList.add("modal__form__form-content__label");
  firstNameLabel.setAttribute("for", "firstNameInput");
  firstNameLabel.textContent = "Prénom";
  mForm.appendChild(firstNameLabel);

  const firstNameInput = document.createElement("input");
  firstNameInput.classList.add("firsNameInput");
  firstNameInput.setAttribute("type", "text");
  firstNameInput.setAttribute("id", "firstNameInput");
  firstNameInput.setAttribute("name", "prénom");
  mForm.appendChild(firstNameInput);

  const lastNameLabel = document.createElement("label");
  lastNameLabel.classList.add("modal__form__form-content__label");
  lastNameLabel.setAttribute("for", "lastNameInput");
  lastNameLabel.textContent = "Nom";
  mForm.appendChild(lastNameLabel);

  const lastNameInput = document.createElement("input");
  lastNameInput.classList.add("modal__form__form-content__input");
  lastNameInput.setAttribute("id", "lastNameInput");
  lastNameInput.setAttribute("type", "text");
  lastNameInput.setAttribute("name", "Nom");
  mForm.appendChild(lastNameInput);

  const emailLabel = document.createElement("label");
  emailLabel.classList.add("modal__form__form-content__label");
  emailLabel.setAttribute("id", "email");
  emailLabel.setAttribute("for", "emailInput");
  emailLabel.textContent = "Email";
  mForm.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.classList.add("modal__form__form-content__input");
  emailInput.setAttribute("id", "emailInput");
  emailInput.setAttribute("type", "mail");
  emailInput.setAttribute("name", "email");
  mForm.appendChild(emailInput);

  const messageLabel = document.createElement("label");
  messageLabel.classList.add("modal__form__form-content__label");
  messageLabel.setAttribute("id", "message");
  messageLabel.setAttribute("for", "messageInput");
  messageLabel.textContent = "Votre message";
  mForm.appendChild(messageLabel);

  const mTextArea = document.createElement("textArea");
  mTextArea.classList.add("modal__form__form-content__input--message");
  mTextArea.setAttribute("id", "messageInput");
  mTextArea.setAttribute("name", "message");
  mTextArea.setAttribute("type", "text");
  mForm.appendChild(mTextArea);

  const mButton = document.createElement("button");
  mButton.setAttribute("id", "submitContact");
  mButton.setAttribute("aria-label", "Envoyer");
  mButton.textContent = "Envoyer";
  mForm.appendChild(mButton);

  // Recuperer les informations saisies dans la modal contact
  mButton.addEventListener("click", function(event) {
    event.stopPropagation();
    event.preventDefault();

    closeModal();

    console.log("Prénom : " + firstNameInput.value);
    console.log("Nom : " + lastNameInput.value);
    console.log("Email : " + emailInput.value);
    console.log("Message : " + mTextArea.value);
  });

  return mForm;
}

// launch modal event
function launchModal(typeModal, photos, pos) {
  // modal frame---------------------
  const content = document.querySelector("#content");
  const modal = document.createElement("section");
  modal.setAttribute("id", "modal_frame");
  modal.classList.add("modal_frame");
  modal.setAttribute("role", "dialog");
  content.appendChild(modal);

  modalCloseButton = document.createElement("button");
  modalCloseButton.classList.add("close--cross");
  modalCloseButton.textContent = "X";
  modalCloseButton.setAttribute("aria-label", "fermeture de la modal");
  modal.appendChild(modalCloseButton);

  modalContent = document.createElement("div");
  modalContent.setAttribute("id", "contentModal");
  modal.appendChild(modalContent);

  const main = document.querySelector("#main");

  // insertion du contenu contact ou carrousel
  let modalbg = null;

  if (typeModal === "contact") {
    const pageHeader = document.querySelector(".header__link__page");
    modalCloseButton.classList.add("contact");
    modalbg = createContentContact();
    main.style.opacity = "0.2";
    pageHeader.style.opacity = "0.2";
  } else {
    const pageHeader = document.querySelector(".header__link__page");
    modalbg = createContentCaroussel(photos, pos);
    main.style.display = "none";
    pageHeader.style.display = "none";
  }

  modalContent.appendChild(modalbg);

  if (typeModal == "carrousel") actionCaroussel(pos);

  modalCloseButton.addEventListener("click", closeModal);
}

// Fermeture de la modal
function closeModal() {
  const modalFrame = document.querySelector(".modal_frame");
  const pageHeader = document.querySelector(".header__link__page");
  modalFrame.remove();

  main.style.opacity = "1";
  pageHeader.style.opacity = "1";

  main.style.display = "flex";
  pageHeader.style.display = "flex";
}
