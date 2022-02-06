// Back to the top button 
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > document.body.scrollHeight / 2.5) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// Owl Carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    920: {
      items: 3
    }
  }
})