// MOBILE

const hamburger = document.querySelector(".home_hero_mobile_hamburger_menu");
const menu = document.querySelector(".home_hero_mobile_menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  menu.classList.toggle("active");
  console.log("clicked");
});

// TABLET

const hamburger_tablet = document.querySelector(
  ".home_hero_tablet_hamburger_menu"
);
const menu_tablet = document.querySelector(".home_hero_tablet_menu");

hamburger_tablet.addEventListener("click", function () {
  hamburger_tablet.classList.toggle("isactive");
  menu_tablet.classList.toggle("active");
  console.log("clicked");
});
