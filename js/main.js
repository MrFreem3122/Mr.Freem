/* ================= CONFIG ================= */

const EMAILJS_PUBLIC_KEY = "C-CRLw9gJAAzkTbBW";
const EMAILJS_SERVICE_ID = "default_service";
const EMAILJS_TEMPLATE_ID = "template_9y7b94e";

const root = document.documentElement;

/* ================= THEME (dark / light) ================= */

const toggle = document.getElementById("themeToggle");

function updateIcons(isDark) {
  document.querySelectorAll("img[data-light][data-dark]").forEach((img) => {
    img.src = isDark ? img.dataset.dark : img.dataset.light;
  });
}

function applyTheme(isDark) {
  root.classList.toggle("dark", isDark);
  toggle.setAttribute("aria-pressed", String(isDark));
  updateIcons(isDark);
}

// The inline script in <head> already set the class; sync the button and icons with it
applyTheme(root.classList.contains("dark"));

toggle.addEventListener("click", () => {
  const isDark = !root.classList.contains("dark");
  applyTheme(isDark);
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (e) {
    /* storage unavailable (private mode) — theme just won't be remembered */
  }
});

/* ================= PROJECT IMAGES ================= */
// If a screenshot is missing, show a clean placeholder instead of a broken image icon.

document.querySelectorAll(".project-image img").forEach((img) => {
  const showPlaceholder = () => img.parentElement.classList.add("is-placeholder");
  if (img.complete && img.naturalWidth === 0) showPlaceholder();
  img.addEventListener("error", showPlaceholder);
});

/* ================= CONTACT FORM ================= */

const form = document.getElementById("contactForm");
const btn = document.getElementById("sendBtn");
const status = document.getElementById("formStatus");
const BTN_LABEL = btn.textContent;

function setStatus(message, type) {
  status.textContent = message;
  status.className = "form-status" + (type ? " " + type : "");
}

if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (!window.emailjs) {
    setStatus("The form is unavailable right now. Please email me at contact.mrfreem@gmail.com.", "error");
    return;
  }

  btn.disabled = true;
  btn.textContent = "Sending...";
  setStatus("");

  emailjs
    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
    .then(() => {
      setStatus("Thanks! Your message has been sent. I'll get back to you soon.", "success");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      setStatus("Sorry, the message could not be sent. Please try again or email me directly.", "error");
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = BTN_LABEL;
    });
});

/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent = new Date().getFullYear();
