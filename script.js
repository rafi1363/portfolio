// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙";
darkModeToggle.style.position = "fixed";
darkModeToggle.style.top = "20px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.backgroundColor = "#ff6b6b";
darkModeToggle.style.color = "white";
darkModeToggle.style.border = "none";
darkModeToggle.style.padding = "10px 15px";
darkModeToggle.style.borderRadius = "5px";
darkModeToggle.style.cursor = "pointer";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "🌞"
    : "🌙";
});

// Scroll Animations (Fade In)
const fadeInElements = document.querySelectorAll(".fade-in");

const handleScrollAnimation = () => {
  fadeInElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);

// Run animation on page load
handleScrollAnimation();

// Contact Button Hover Effect
const contactButton = document.querySelector(".cta");
contactButton.addEventListener("mouseover", () => {
  contactButton.style.transform = "scale(1.1)";
});
contactButton.addEventListener("mouseout", () => {
  contactButton.style.transform = "scale(1)";
});
