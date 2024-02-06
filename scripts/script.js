function heightAdjuster() {
  const introContent = document.querySelectorAll("[data-content]");
  const orangeShape = document.querySelectorAll("[data-bg]");

  orangeShape.forEach((element, index) => {
    introContent[index].style.height = element.offsetHeight + 10 + "px";
  });
}

heightAdjuster();
window.addEventListener("resize", heightAdjuster);
