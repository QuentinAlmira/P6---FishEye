const modalbg = document.querySelector("#contact_modal");

// launch modal event
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
const modalCross = document.querySelector(".close--white");

modalCross.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}
