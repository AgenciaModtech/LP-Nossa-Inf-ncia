function heightAdjuster() {
  const introContent = document.querySelectorAll("[data-content]");
  const orangeShape = document.querySelectorAll("[data-bg]");
  orangeShape.forEach((element, index) => {
    introContent[index].style.height = element.offsetHeight + 10 + "px";
  });
}

heightAdjuster();
window.addEventListener("resize", heightAdjuster);

const swiper = new Swiper(".info-cards__swipper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
