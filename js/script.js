window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".project-card");
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("show");
    }
  });
});
