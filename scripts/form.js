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

function validateForm() {
  let name = document.getElementById("surname_name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let marka = document.getElementById("marka").value;
  let model = document.getElementById("model").value;
  let year = document.getElementById("year").value;
  let mileage = document.getElementById("mileage").value;

  // Простая проверка наличия значений
  if (
    name.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    marka.trim() === "" ||
    model.trim() === "" ||
    year.trim() === "" ||
    mileage.trim() === ""
  ) {
    alert("Заполните все обязательные поля");
    return false;
  }

  // Проверка формата email с использованием регулярного выражения
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Введите корректный email");
    return false;
  }

  // Дополнительные проверки, если необходимо

  // Если все проверки прошли успешно, можно отправить форму
  return true;
}
