const btn = document.querySelector(".nav__expand-btn");
const menu = document.querySelector(".nav__menu");

btn.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", isExpanded ? "false" : "true");
  if (isExpanded) {
    menu.classList.replace("nav__menu--expanded", "nav__menu")
  } else {
    menu.classList.replace("nav__menu", "nav__menu--expanded")
  }
});
