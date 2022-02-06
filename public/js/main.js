const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > document.body.scrollHeight / 2.5) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})