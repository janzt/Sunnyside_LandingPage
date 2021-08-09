const btnHamburger = document.getElementById("btn-hamburger");

btnHamburger.addEventListener("click", function () {
  const estado = document.querySelector(".menu-bar").style.display;
  if (estado == "none") {
    document.querySelector(".menu-bar").style.display = "flex";
  } else {
    document.querySelector(".menu-bar").style.display = "none";
  }
});
