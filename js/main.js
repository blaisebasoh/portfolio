document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const bio = document.getElementById("bio");
  const emailBtn = document.getElementById("copyEmail");
  const feedback = document.getElementById("copyFeedback");
  const emailAddress = "basohblaise23@gmail.com";

  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  // icons
  const sunIcon = "☼";
  const moonIcon = "☽";

  // theme initializing
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = sunIcon;
  } else {
    if (themeToggle) themeToggle.textContent = moonIcon;
  }

  // theme toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      themeToggle.style.transform = "rotate(180deg)";

      setTimeout(() => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");

        themeToggle.textContent = isDark ? sunIcon : moonIcon;
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeToggle.style.transform = "rotate(0deg)";
      }, 250);
    });
  }

  // static bio
  if (bio)
    bio.textContent =
      "Game Developer, Software Engineer, Artist, Renewable Energy Engineer";

  // email copy functionality
  if (emailBtn) {
    emailBtn.textContent = "basohblaise23[at]gmail[dot]com";
    emailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(emailAddress).then(() => {
        if (feedback) {
          feedback.style.display = "block";
          setTimeout(() => (feedback.style.display = "none"), 2000);
        }
      });
    });
  }

  // external links handling
  document.querySelectorAll(".repo").forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // super important top secret.
  console.log("Hello visitor!. Thanks for passing by!");
});
