const swiper = new Swiper(".info-cards__swipper", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function heightAdjuster() {
  const introContent = document.querySelectorAll("[data-content]");
  const orangeShape = document.querySelectorAll("[data-bg]");
  orangeShape.forEach((element, index) => {
    introContent[index].style.height = element.offsetHeight + 10 + "px";
  });
}

heightAdjuster();
window.addEventListener("resize", heightAdjuster);
