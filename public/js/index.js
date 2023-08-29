const mobileMenuBtn = document.querySelector(".nav__expand-btn");
const themeBtn = document.querySelector("#btn-theme-selector");
const body = document.querySelector("body");

mobileMenuBtn.addEventListener("click", () => setExpanded(".nav__menu"));
themeBtn.addEventListener("click", () => setExpanded(".nav__theme-dropdown"));

const setExpanded = (selector) => {
  el = document.querySelector(selector);
  const isExpanded = el.getAttribute("aria-expanded") === "true";
  el.setAttribute("aria-expanded", isExpanded ? "false" : "true");
};

const radioButtons = document.querySelectorAll('input[name="theme"]');
for (button of radioButtons) {
  button.addEventListener("change", (e) => {
    body.className = e.target.value;
  })
}
