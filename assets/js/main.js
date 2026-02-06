// Active navbar highlighting (safe)
(function () {
  const links = document.querySelectorAll(".nav-link");
  if (!links.length) return;

  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (currentPath.endsWith(linkPath)) {
      link.classList.add("active");
    }
  });
})();
