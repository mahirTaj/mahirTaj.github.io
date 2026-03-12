/**
 * ============================================================
 *  PORTFOLIO — script.js
 *  Handles: content injection, typing effect, scroll
 *  animations, particles, nav highlighting, mobile menu
 * ============================================================
 */

/* ── SVG Icons ─────────────────────────────────────────────── */
const icons = {
    github: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    scholar: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>`,
    ext: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
};

const projectEmojis = ["🔬", "🌐", "🤖", "📊", "⚡", "🧠", "🛠️", "🎯"];

/* ── Helpers ────────────────────────────────────────────────── */
function buildSocialLinks(social) {
    const map = [
        { key: "github", label: "GitHub", icon: icons.github },
        { key: "linkedin", label: "LinkedIn", icon: icons.linkedin },
        { key: "twitter", label: "Twitter / X", icon: icons.twitter },
        { key: "scholar", label: "Google Scholar", icon: icons.scholar },
    ];
    return map
        .filter(s => social[s.key])
        .map(s => `
      <a href="${social[s.key]}" target="_blank" rel="noopener noreferrer"
         class="social-link" title="${s.label}" aria-label="${s.label}">
        ${s.icon}
      </a>`)
        .join("");
}

/* ── Inject Content ─────────────────────────────────────────── */
function injectContent() {
    const d = portfolioData;

    // Resume link
    document.getElementById("resume-link").href = d.resumeLink;

    // Hero
    document.getElementById("hero-name").textContent = d.name;
    document.getElementById("hero-bio-short").textContent =
        d.bio.split(".").slice(0, 2).join(".") + ".";
    document.getElementById("hero-socials").innerHTML = buildSocialLinks(d.social);

    // About
    document.getElementById("about-bio").textContent = d.bio;
    document.getElementById("stat-projects").textContent =
        d.projects.length + "+";

    const meta = [
        { label: `📍 ${d.location}` },
        { label: `✉️ ${d.email}` },
    ];
    document.getElementById("about-meta").innerHTML = meta
        .map(m => `<span class="meta-pill"><span class="dot"></span>${m.label}</span>`)
        .join("");

    // Skills
    document.getElementById("skills-grid").innerHTML = d.skills
        .map(cat => `
      <div class="skill-card fade-in">
        <div class="skill-category">${cat.category}</div>
        <div class="skill-items">
          ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
        </div>
      </div>`)
        .join("");

    // Projects
    document.getElementById("projects-grid").innerHTML = d.projects
        .map((p, i) => {
            const emoji = projectEmojis[i % projectEmojis.length];
            const links = [
                p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link" title="GitHub">${icons.github}</a>` : "",
                p.demo ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="project-link" title="Live Demo">${icons.ext}</a>` : "",
            ].join("");
            return `
        <div class="project-card${p.featured ? " featured" : ""} fade-in">
          <div class="project-top">
            <div class="project-icon">${emoji}</div>
            <div class="project-links">${links}</div>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
          </div>
        </div>`;
        })
        .join("");

    // Experience
    document.getElementById("timeline").innerHTML = d.experience
        .map(e => `
      <div class="timeline-item fade-in">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <div class="timeline-role">${e.role}</div>
              <a href="${e.orgLink}" target="_blank" rel="noopener"
                 class="timeline-org">${e.org}</a>
            </div>
            <div class="timeline-meta">
              <span class="timeline-period">${e.period}</span>
              <span class="timeline-type">${e.type}</span>
            </div>
          </div>
          <p class="timeline-desc">${e.description}</p>
          <div class="timeline-highlights">
            ${e.highlights.map(h => `<span class="hl-pill">${h}</span>`).join("")}
          </div>
        </div>
      </div>`)
        .join("");

    // Contact
    document.getElementById("contact-email-btn").href = `mailto:${d.email}`;
    document.getElementById("contact-socials").innerHTML = buildSocialLinks(d.social);

    // Footer
    document.getElementById("footer-name").textContent = d.name;
}

/* ── Typing Effect ──────────────────────────────────────────── */
function startTypingEffect() {
    const el = document.getElementById("hero-tagline");
    const taglines = portfolioData.taglines;
    let taglineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const TYPING_SPEED = 75;
    const DELETE_SPEED = 40;
    const PAUSE_MS = 2000;

    function tick() {
        const current = taglines[taglineIndex];
        if (isDeleting) {
            el.textContent = current.slice(0, --charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                taglineIndex = (taglineIndex + 1) % taglines.length;
                setTimeout(tick, 400);
                return;
            }
            setTimeout(tick, DELETE_SPEED);
        } else {
            el.textContent = current.slice(0, ++charIndex);
            if (charIndex === current.length) {
                isDeleting = true;
                setTimeout(tick, PAUSE_MS);
                return;
            }
            setTimeout(tick, TYPING_SPEED);
        }
    }
    setTimeout(tick, 1200);
}

/* ── Particle Background ────────────────────────────────────── */
function initParticles() {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 55;
    for (let i = 0; i < COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.4,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            alpha: Math.random() * 0.45 + 0.1,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Connection lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - dist / 130)})`;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Dots
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });

        animId = requestAnimationFrame(draw);
    }
    draw();

    // Pause particles when hero scrolls out of view — performance
    const heroObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { draw(); }
        else { cancelAnimationFrame(animId); }
    });
    heroObs.observe(document.getElementById("hero"));
}

/* ── Navbar Scroll Effects ──────────────────────────────────── */
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link:not(.btn-resume)");
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");

        // Active link highlighting
        let current = "";
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    }, { passive: true });
}

/* ── Mobile Hamburger ───────────────────────────────────────── */
function initMobileMenu() {
    const btn = document.getElementById("hamburger");
    const menu = document.getElementById("nav-links");
    const links = menu.querySelectorAll("a");

    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        btn.classList.toggle("open");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            btn.classList.remove("open");
        });
    });
}

/* ── Scroll Fade-In ─────────────────────────────────────────── */
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Stagger sibling cards
                    const delay = i * 60;
                    entry.target.style.transitionDelay = `${delay}ms`;
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

/* ── Smooth Section Link Numbers ───────────────────────────── */
// Re-observe dynamically added .fade-in elements (skills, projects, etc.)
function observeDynamic() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in:not(.visible)").forEach(el => observer.observe(el));
}

/* ── Bootstrap ──────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
    injectContent();
    startTypingEffect();
    initParticles();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();

    // Re-observe after dynamic injection
    setTimeout(observeDynamic, 100);
});
