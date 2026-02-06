(function () {
  const path = window.location.pathname;

  let currentMode = "Common";
  if (path.includes("hostel")) currentMode = "Hostel";
  if (path.includes("pg")) currentMode = "PG";

  const modeLabel = document.querySelector(".current-mode");
  if (modeLabel) {
    modeLabel.textContent = currentMode;
  }

  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    if (path.endsWith(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
})();
