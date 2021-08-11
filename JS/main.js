const btnHamburger = document.getElementById("btn-hamburger");

btnHamburger.addEventListener("click", function () {
  const estado = document.querySelector(".menu");
  if (estado.classList.contains("menu-bar-hide")) {
    document.querySelector(".menu").classList.add("menu-bar");
    document.querySelector(".menu").classList.remove("menu-bar-hide");
  } else {
    document.querySelector(".menu").classList.remove("menu-bar");
    document.querySelector(".menu").classList.add("menu-bar-hide");
  }
});
