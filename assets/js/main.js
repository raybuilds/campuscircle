// Active navbar highlighting
(function () {
  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (currentPath.endsWith(linkPath)) {
      link.classList.add("active");
    }
  });
})();

// Fade-in on scroll
const sections = document.querySelectorAll("section");
sections.forEach(sec => sec.classList.add("fade-in"));

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 80) {
      sec.classList.add("visible");
    }
  });
});
