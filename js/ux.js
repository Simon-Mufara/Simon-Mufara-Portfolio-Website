/* =========================
   UX Layer (site-wide)
   ========================= */

(function () {
  // 1) Scroll progress bar
  const progress = document.querySelector(".scroll-progress");
  const onScroll = () => {
    if (!progress) return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progress.style.width = pct + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 2) Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  // 3) Custom cursor (desktop only)
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  if (isFinePointer && dot && ring) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // smooth ring follow
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    // hover detection for interactive elements
    const hoverTargets = "a, button, .project-card, .gallery-item, .certificate-card, .btn, input, textarea, select";
    document.addEventListener("mouseover", (e) => {
      if (e.target && e.target.closest(hoverTargets)) {
        document.body.classList.add("cursor-hover");
      }
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target && e.target.closest(hoverTargets)) {
        document.body.classList.remove("cursor-hover");
      }
    });
  }

  // 4) Theme toggle (optional)
  const toggle = document.querySelector(".theme-toggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      toggle.textContent = next === "dark" ? "☀️ Light" : "🌙 Dark";
    });

    // set button label on load
    const current = root.getAttribute("data-theme") || "light";
    toggle.textContent = current === "dark" ? "☀️ Light" : "🌙 Dark";
  }
})();
