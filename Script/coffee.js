// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// HEADER BACKGROUND CHANGE ON SCROLL
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "#0d0d0d";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
  } else {
    header.style.background = "#161515";
    header.style.boxShadow = "none";
  }
});

// ===============================
// SIMPLE SMOOTH BUTTON EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transition = "0.3s";
  });
});
