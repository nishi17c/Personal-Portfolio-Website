document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector('h1');
  const arch = document.querySelector('.arch');

  // Initial slide-up effect
  setTimeout(() => {
    arch.style.transform = "translateY(0)";
    arch.style.opacity = "1";
  }, 500);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    name.style.transform = `translateY(-${scrollY * 0.5}px)`;
    arch.style.transform = `translateY(-${scrollY * 0.4}px)`; // 10:8 ratio (0.4/0.5)
  });
});
