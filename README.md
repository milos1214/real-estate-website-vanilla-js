# Real Estate Landing Page

A professional and visually appealing landing page for real estate services. This project showcases a modern, clean design suitable for real estate agencies, property management businesses, or independent realtors. It highlights essential features like services, a gallery of properties, team members, and social media integration.

[![Explore This Project](https://img.shields.io/badge/Explore%20This%20Project-black?style=for-the-badge)](https://milos1214.github.io/real-estate-website-vanilla-js/)

## 🎨 Design

### 1. **Hero Section**
   - A welcoming banner with an inspirational tagline: "Find Your Dream Place."
   - High-quality background imagery for an immersive experience.

<br>

<img src="./md images/Hero.png" alt="Hero Section">

### 2. **About Us**
   - A section to describe the business, its vision, and core values.
   - Engaging layout with supporting images to captivate users.

<br>

<img src="./md images/About Us.png" alt="About Us Section">

### 3. **Services We Provide**
   - Icons and descriptions for the services that company provides

<br>

<img src="./md images/Services.png" alt="Services Section">

### 4. **Gallery**
   - A visually rich gallery showcasing real estate properties, including:
     - Landscapes
     - Interior designs
     - Building exteriors

<br>

<img src="./md images/Gallery.png" alt="Gallery Section">

### 5. **From Our Work**
   - A section highlighting case studies or recent projects, with "Read More" links for detailed information.

<br>

<img src="./md images/Our work.png" alt="Our Work Section">

### 6. **Team-Board Members**
   - Profiles of key team members, complete with images and designations.

<br>

<img src="./md images/Members.png" alt="Members Section">

### 7. **Subscription**
   - A call-to-action for visitors to subscribe to newsletters or updates about the real estate market.

<br>

<img src="./md images/CTA.png" alt="Call To Action Section">

### 8. **Social Media Feeds**
   - Live feeds or images from social media platforms for user engagement.

<br>

<img src="./md images/SM.png" alt="Social Media Section">

### 9. **Footer**
   - Sections for:
     - About Real Estate
     - Company Information (About, Careers, News)
     - Help (Privacy Policy, Contact Us)
     - Resources (Terms of Use, Real Estate Guides)

<br>

<img src="./md images/Footer.png" alt="Footer Section">

## 💻 Code Functionality

### Smooth Scroll Animation
This feature ensures smooth navigation to different sections of the page when clicking on links.

```JavaScript
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
```

### Responsive Hamburger Menu
Toggles navigation for smaller screens to ensure good experience for mobile users.

```JavaScript
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
});
```

### Carousel for Image Slides
Showcases property images in an auto-rotating carousel in order to capture users attention.

```JavaScript
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
```

## 📱 Responsive Web Design
This landing page is fully responsive and designed for optimal performance on devices of all sizes. Key features:

- Flexible layout that adapts to different screen sizes.
- Hamburger menu that is optimized navigation for smaller screens.
- Media Queries and custom styles for breakpoints.

### Desktop Design
<img src="./md images/Desktop.png" alt="Desktop Design">

<br>

### Mobile Design
<img src="./md images/Mobile.png" alt="Mobile Design" style="width: 50%; height: auto;">

## 🌟 SEO Optimization
The page is optimized for search engines with these strategies:

1. Meta Tags: They help search engines understand the content and improve SEO.
2. Semantic HTML: Utilizes proper tags like header, section, article, footer for better ranking.
3. Alt Text: All images include alt attributes to improve indexing.
4. Fast Loading: Optimized images and minimized CSS/JS.
5. Mobile-Friendly Design: Ensures compatibility with Google’s mobile-first indexing.

### SEO Score

<img src="./md images/real estate SEO.png" alt="Website SEO Score" style="width: 75%; height: 50%;">

## 🚀 How to Use

1. Clone the repository:

```bash
git clone https://github.com/milos1214/real-estate-website-vanilla-js.git
```

2. Navigate to the project directory:

```bash
cd real-estate-website-vanilla-js
```

3. Open index.html in your browser to view the page.

## 📧 Contact
For questions or support, feel free to reach out:

- Email: milosstankovic2002@gmail.com
- [Connect with me on LinkedIn](https://www.linkedin.com/in/milo%C5%A1-stankovi%C4%87-6b3865186/)
