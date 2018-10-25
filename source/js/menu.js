var toggle = document.querySelector(".page-header__menu-toggle");
var none = document.querySelector(".site-list");

none.classList.add("site-list--close");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggle.classList.toggle("page-header__menu-toggle--close");
  none.classList.toggle("site-list--close");
});
