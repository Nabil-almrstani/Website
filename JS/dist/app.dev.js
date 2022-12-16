"use strict";

window.addEventListener("scroll", function () {
  var header = document.getElementsByClassName("nav")[0];
  header.classList.toggle('sticky', window.scrollY >= 10);
});