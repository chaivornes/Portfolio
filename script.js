// ==========================================
// CHARLI OLIVER
// Premium Portfolio Interactions
// ==========================================

// Fade in sections when they enter the viewport

const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-image, .story, .card, .about"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition =
          "opacity 0.9s ease, transform 0.9s ease";

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => observer.observe(item));

// Smooth scroll for navigation

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add shadow to header while scrolling

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = "0 8px 30px rgba(0,0,0,.06)";
  } else {
    header.style.boxShadow = "none";
  }
});
