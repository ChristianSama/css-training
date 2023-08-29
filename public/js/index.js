const btn = document.querySelector(".nav__expand-btn");
const menu = document.querySelector(".nav__menu");

btn.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", isExpanded ? "false" : "true");
});
