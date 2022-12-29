function scrollToHome() {
  let e = document.getElementById("header");
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
function scrollToSection(section) {
  let e = document.getElementById(section);
  // This ends the block to the window
  // bottom and also aligns the view to the center
  console.log(section);
  console.log(e);
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "center",
  });
}
