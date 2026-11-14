/* ================= CONFIG ================= */

const EMAILJS_PUBLIC_KEY = "C-CRLw9gJAAzkTbBW";
const EMAILJS_SERVICE_ID = "default_service";
const EMAILJS_TEMPLATE_ID = "template_9y7b94e";

const root = document.documentElement;

/* ================= THEME ================= */

const themeBtn = document.getElementById("themeToggle");

function syncThemeButton() {
  const isDark = root.classList.contains("dark");
  themeBtn.setAttribute("aria-pressed", String(isDark));
  themeBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", isDark ? "#121316" : "#ffffff");
}

syncThemeButton();

themeBtn.addEventListener("click", () => {
  root.classList.toggle("dark");
  syncThemeButton();
  try {
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  } catch (e) {
    /* storage unavailable — the choice just won't be remembered */
  }
});

/* ================= HEADER BORDER ON SCROLL ================= */

const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

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
    setStatus("The form couldn't load. Email me at contact.mrfreem@gmail.com instead.", "error");
    return;
  }

  btn.disabled = true;
  btn.textContent = "Sending…";
  setStatus("");

  emailjs
    .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
    .then(() => {
      setStatus("Message sent. I'll reply by email soon.", "success");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      setStatus("Message not sent. Check your connection and try again, or email me directly.", "error");
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = BTN_LABEL;
    });
});

/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent = new Date().getFullYear();
