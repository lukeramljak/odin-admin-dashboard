const navButtonDefault = document.getElementById("nav-default");
const navButtonClose = document.getElementById("nav-close");
const sidebar = document.querySelector(".sidebar");

navButtonDefault.addEventListener("click", () => {
  navButtonDefault.style.display = "none";
  navButtonClose.style.display = "block";
  sidebar.style.display = "flex";
});

navButtonClose.addEventListener("click", () => {
  navButtonClose.style.display = "none";
  navButtonDefault.style.display = "block";
  sidebar.style.display = "none";
});
