const navButtonDefault = document.getElementById("nav-default");
const navButtonClose = document.getElementById("nav-close");
const sidebar = document.querySelector(".sidebar");

navButtonDefault.addEventListener("click", () => {
  navButtonDefault.classList.add("hidden");
  navButtonClose.classList.remove("hidden");
  sidebar.classList.remove("hidden");
});

navButtonClose.addEventListener("click", () => {
  navButtonClose.classList.add("hidden");
  navButtonDefault.classList.remove("hidden");
  sidebar.classList.add("hidden");
});
