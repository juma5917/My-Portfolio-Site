'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    color: { value: "#6c757d" },
    shape: { type: "triangle" },
    opacity: { value: 0.5 },
    size: { value: 5 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6c757d",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 4 },
  },
});
particlesJS("particles-js2", {
  particles: {
    number: { value: 50 },
    color: { value: "#6c757d" },
    shape: { type: "triangle" },
    opacity: { value: 0.5 },
    size: { value: 5 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6c757d",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 4 },
  },
});
particlesJS("particles-js3", {
  particles: {
    number: { value: 100 },
    color: { value: "#6c757d" },
    shape: { type: "triangle" },
    opacity: { value: 0.5 },
    size: { value: 5 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6c757d",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 4 },
  },
});