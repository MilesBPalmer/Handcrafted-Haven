"use strict";

// When image comes into the view port(screen) it triggers a animation and changes when the elements scroll in and out of view

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".featured-img");
hiddenElements.forEach((el) => observer.observe(el));

// Makes user scroll to the top smoothing with a click on the button
const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
