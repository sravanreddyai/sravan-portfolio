(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector("[data-navlinks]");
  
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("show");
    });
    
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("show");
      });
    });
  }
  
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:sravanreddygatla9@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
