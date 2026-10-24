/* Shared navigation and progressive enhancement. Every destination works without JS. */
(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.light-switch');
  const storedTheme = (() => { try { return localStorage.getItem('portfolio-theme'); } catch { return null; } })();
  const applyTheme = theme => {
    root.dataset.theme = theme;
    const light = theme === 'parchment';
    themeButton?.setAttribute('aria-pressed', String(light));
    themeButton?.setAttribute('aria-label', light ? 'Switch to midnight theme' : 'Switch to parchment theme');
    const label = themeButton?.querySelector('.light-label');
    if (label) label.textContent = light ? 'Nox' : 'Lumos';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#eee8da' : '#0c1d19');
  };
  applyTheme(storedTheme === 'parchment' ? 'parchment' : 'midnight');
  themeButton?.addEventListener('click', () => {
    const theme = root.dataset.theme === 'parchment' ? 'midnight' : 'parchment';
    applyTheme(theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works without storage. */ }
  });

  const menu = document.querySelector('.nav-menu');
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const setMenu = open => {
    menu?.classList.toggle('active', open);
    menuToggle?.classList.toggle('active', open);
    menuToggle?.setAttribute('aria-expanded', String(open));
    menuToggle?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };
  menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  menu?.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('click', event => { if (!event.target.closest('nav')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
      setMenu(false); menuToggle.focus();
    }
  });
  const desktop = matchMedia('(min-width: 1281px)');
  desktop.addEventListener('change', () => setMenu(false));

  const entrance = document.getElementById('enter-platform');
  entrance?.addEventListener('click', event => {
    event.preventDefault();
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.classList.add('boarding');
    entrance.setAttribute('aria-busy', 'true');
    window.setTimeout(() => {
      const journey = document.getElementById('journey');
      history.replaceState(null, '', '#journey');
      journey?.focus({ preventScroll: true });
      journey?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
      entrance.removeAttribute('aria-busy');
      document.body.classList.remove('boarding');
    }, reducedMotion ? 0 : 600);
  });

})();
