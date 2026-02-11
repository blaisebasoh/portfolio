const bio = document.getElementById("bio");
const emailBtn = document.getElementById("copyEmail");
const feedback = document.getElementById("copyFeedback");
const emailAddress = "basohblaise23@gmail.com";

// TextContent is safer than innerHTML for plain text
bio.textContent = "Software Developer | Artist";

emailBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(emailAddress)
    .then(() => {
      feedback.style.display = "inline";
      setTimeout(() => (feedback.style.display = "none"), 1000);
    })
    .catch((err) => console.error("Clipboard error:", err));
});
