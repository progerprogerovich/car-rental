const button = document.querySelector(".top-nav__button");
const linkPartners = document.querySelector("#form-partners");
const modal = document.querySelectorAll(".modal");
const buttonClose = document.querySelectorAll(".modal__close");
const modalBg = document.querySelectorAll(".modal-bg");
const buttonOrder = document.querySelectorAll(".card__order");

const openModal = (index) => {
  modalBg[index].style.display = "block";
};

const closeModal = (index) => {
  modalBg[index].style.display = "none";
};

const stopPropagation = (e) => {
  e.stopPropagation();
};

button.onclick = () => openModal(0);
linkPartners.onclick = () => openModal(1);

for (let i = 0; i < modalBg.length; i++) {
  buttonClose[i].onclick = () => closeModal(i);
  modalBg[i].onclick = () => closeModal(i);
  modal[i].onclick = stopPropagation;
}

for (let i = 0; i < buttonOrder.length; i++) {
  buttonOrder[i].onclick = () => (modalBg[0].style.display = "block");
}
