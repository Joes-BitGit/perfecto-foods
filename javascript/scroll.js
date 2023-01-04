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

  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "center",
  });
}

// var target = document.querySelector("#features");

// document.addEventListener("scroll", () => {
//   if (window.scrollY >= target.getBoundingClientRect().top) {
//     console.log("make the navbar smaller");
//   }
// });
