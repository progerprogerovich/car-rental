document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav__wrapper").classList.toggle("open");
  document.querySelector("body").classList.toggle("lock");
});
