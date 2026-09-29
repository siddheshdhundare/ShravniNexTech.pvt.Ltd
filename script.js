/* ===============================
   MOBILE MENU
=============================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Close mobile menu on link click */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* ===============================
   NAVBAR SCROLL
=============================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ===============================
   REVEAL ANIMATION
=============================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===============================
   COUNTER ANIMATION
=============================== */

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounters() {
  if (counterStarted) return;

  const statsSection = document.querySelector(".stats");
  const position = statsSection.getBoundingClientRect().top;

  if (position < window.innerHeight - 100) {
    counterStarted = true;

    counters.forEach(counter => {
      const target = Number(counter.dataset.target);
      let current = 0;
      const increment = Math.ceil(target / 60);

      const updateCounter = () => {
        current += increment;

        if (current >= target) {
          current = target;
        }

        counter.textContent = current + "+";

        if (current < target) {
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });
  }
}

window.addEventListener("scroll", startCounters);

/* ===============================
   CONTACT FORM
=============================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !service || !message) {
    alert("Please fill all fields.");
    return;
  }

  formMessage.style.display = "block";
  contactForm.reset();
});

/* ===============================
   BACK TO TOP
=============================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ===============================
   CURRENT YEAR
=============================== */

document.getElementById("year").textContent = new Date().getFullYear();