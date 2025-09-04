
const toggleButton = document.getElementById("menu-btn");
const menuList = document.getElementById("nav-links");
const toggleIcon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", () => {
  menuList.classList.toggle("open");

  if (menuList.classList.contains("open")) {
    toggleIcon.className = "ri-close-line";
  } else {
    toggleIcon.className = "ri-menu-line";
  }
});


menuList.addEventListener("click", () => {
  menuList.classList.remove("open");
  toggleIcon.className = "ri-menu-line";
});


const srOptions = {
  origin: "bottom",
  distance: "70px", 
  duration: 1200,   
  easing: "ease-out", 
};

ScrollReveal().reveal(".header__image img", { ...srOptions, origin: "right" });
ScrollReveal().reveal(".header__content p", { ...srOptions, delay: 300 });
ScrollReveal().reveal(".header__content h1", { ...srOptions, delay: 600 });
ScrollReveal().reveal(".header__btns", { ...srOptions, delay: 900 });

ScrollReveal().reveal(".destination__card", { ...srOptions, interval: 300 });
ScrollReveal().reveal(".showcase__image img", { ...srOptions, origin: "left" });
ScrollReveal().reveal(".showcase__content h4", { ...srOptions, delay: 400 });
ScrollReveal().reveal(".showcase__content p", { ...srOptions, delay: 700 });
ScrollReveal().reveal(".showcase__btn", { ...srOptions, delay: 1000 });
ScrollReveal().reveal(".banner__card", { ...srOptions, interval: 400 });
ScrollReveal().reveal(".discover__card", { ...srOptions, interval: 400 });


const swiper = new Swiper(".swiper", {
  slidesPerView: 1, 
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
