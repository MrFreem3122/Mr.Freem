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
  themeBtn.setAttribute("aria-label", t(isDark ? "Switch to light mode" : "Switch to dark mode"));
  document.querySelector('meta[name="theme-color"]').setAttribute("content", isDark ? "#121316" : "#ffffff");
}

syncThemeButton();
document.addEventListener("languagechange", syncThemeButton);

themeBtn.addEventListener("click", () => {
  root.classList.toggle("dark");
  syncThemeButton();
  try {
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  } catch (e) {
    /* storage unavailable, so the choice just won't be remembered */
  }
});

/* ================= HEADER BORDER ON SCROLL ================= */

const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ================= PROJECT COVERS ================= */
// Until a screenshot exists, show a clean placeholder with the project name.

document.querySelectorAll(".cover img").forEach((img) => {
  const showPlaceholder = () => img.parentElement.classList.add("is-placeholder");
  if (img.complete && img.naturalWidth === 0) showPlaceholder();
  img.addEventListener("error", showPlaceholder);
});

/* ================= CONTACT FORM ================= */

const form = document.getElementById("contactForm");

if (form) {
  const btn = document.getElementById("sendBtn");
  const status = document.getElementById("formStatus");

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
      setStatus(t("The form couldn't load. Email me at contact.mrfreem@gmail.com instead."), "error");
      return;
    }

    btn.disabled = true;
    btn.textContent = t("Sending…");
    setStatus("");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      .then(() => {
        setStatus(t("Message sent. I'll reply by email soon."), "success");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus(t("Message not sent. Check your connection and try again, or email me directly."), "error");
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = t("Send message");
      });
  });
}

/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent = new Date().getFullYear();
