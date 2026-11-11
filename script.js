(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); };
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (innerWidth > 800) closeMenu(); });
  }

  const filters = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.project-card[data-category]');
  filters.forEach(button => button.addEventListener('click', () => {
    const selection = button.dataset.filter;
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    cards.forEach(card => { card.hidden = selection !== 'all' && card.dataset.category !== selection; });
  }));
  // The original #top was on the sticky header; that element never left the viewport.
  // Scroll explicitly so back-to-top works in embedded/in-app browsers as well.
  document.querySelectorAll('a[href="#top"]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }));

  // A mailto link can silently fail when an in-app browser has no mail handler.
  // Provide webmail, the native email app, and a copyable address instead.
  const startContact = document.getElementById('contact-start');
  const contactMethods = document.getElementById('contact-methods');
  if (startContact && contactMethods) {
    startContact.addEventListener('click', () => {
      const expanding = contactMethods.hidden;
      contactMethods.hidden = !expanding;
      startContact.setAttribute('aria-expanded', String(expanding));
      if (expanding) contactMethods.querySelector('a')?.focus({ preventScroll: true });
    });
  }

  const copyContact = document.getElementById('copy-contact-email');
  const contactFeedback = document.getElementById('contact-feedback');
  if (copyContact && contactFeedback) {
    copyContact.addEventListener('click', async () => {
      const email = 'tajwarrahmanmahir@gmail.com';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const field = document.createElement('textarea');
          field.value = email;
          field.setAttribute('readonly', '');
          field.style.position = 'fixed';
          field.style.opacity = '0';
          document.body.appendChild(field);
          field.select();
          const copied = document.execCommand('copy');
          field.remove();
          if (!copied) throw new Error('Clipboard unavailable');
        }
        contactFeedback.textContent = 'Email address copied.';
      } catch (error) {
        contactFeedback.textContent = 'Copy unavailable. Select the email address above to copy it.';
      }
    });
  }

  document.querySelectorAll('#year').forEach(node => { node.textContent = new Date().getFullYear(); });
})();