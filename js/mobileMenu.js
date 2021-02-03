const hamburger = document.querySelector(".hamburger_menu");
const menu = document.querySelector(".main_nav_container_right");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  menu.classList.toggle("active");
  console.log("clicked");
});
