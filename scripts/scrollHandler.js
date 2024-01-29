const scrollLinks = document.querySelectorAll('a[href*="#"]');

for (let scrollLink of scrollLinks) {
  scrollLink.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = scrollLink.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
