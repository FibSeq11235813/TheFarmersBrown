const SITE = {
  contactEmail: "hello@thefarmersbrown.com",
  instagramUrl: "https://instagram.com/thefarmersbrown"
};

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.href = `mailto:${SITE.contactEmail}`;
  if (link.textContent.includes("@")) link.textContent = SITE.contactEmail;
});

document.querySelectorAll("[data-instagram-link]").forEach((link) => {
  link.href = SITE.instagramUrl;
});

document.querySelector("#year").textContent = new Date().getFullYear();

const quoteForm = document.querySelector("#quote-form");
quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const subject = `Website quote request: ${data.get("project")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Project: ${data.get("project")}`,
    "",
    "Project details:",
    data.get("details"),
    "",
    "I can attach photos to this email before sending."
  ].join("\n");
  window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (observer) observer.observe(element);
  else element.classList.add("visible");
});
