// Scroll animation
document.querySelectorAll(".links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Email validation
document.addEventListener("DOMContentLoaded", function () {
  const subscribeButton = document.getElementById("subscribe");
  const emailInput = document.getElementById("email");

  subscribeButton.addEventListener("click", function () {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      alert("Thank you for subscribing!");
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
});

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
});

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      indicators[i].classList.toggle("active", i === index);
    });

    const offset = -index * 100;
    document.querySelector(
      ".carousel-images"
    ).style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  setInterval(nextSlide, 5000);
});
