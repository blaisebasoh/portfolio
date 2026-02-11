const bio = document.getElementById("bio");

bio.innerHTML = "Software Developer | Artist";

//TODO: Make text copy to clipboard on mouse click
function copyText() {
  var text = (_contact = document.getElementById("_contact"));

  text.sele;

  navigator.clipboard.writeText(text.value);
  alert("Copied: " + _contact.value);
}
