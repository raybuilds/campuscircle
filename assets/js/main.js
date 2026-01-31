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