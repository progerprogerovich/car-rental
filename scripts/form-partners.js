function validateFormPartners() {
  let name2 = document.getElementById("name_surname_").value;
  let phone2 = document.getElementById("phone").value;
  let marka2 = document.getElementById("marka").value;
  let model2 = document.getElementById("model").value;
  let year2 = document.getElementById("year").value;
  let mileage2 = document.getElementById("mileage").value;

  if (
    name2.trim() === "" ||
    phone2.trim() === "" ||
    marka2.trim() === "" ||
    model2.trim() === "" ||
    year2.trim() === "" ||
    mileage2.trim() === ""
  ) {
    alert("Заполните все обязательные поля");
    return false;
  }

  // Если все проверки прошли успешно, можно отправить форму
  return true;
}
