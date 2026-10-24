/* Nested, keyboard-accessible journal tabs. All content remains readable without JS. */
(() => {
  const journal = document.querySelector('.academic-journal');
  if (!journal) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const reveal = (panel, distance = 5) => {
    if (motion.matches || !panel.animate) return;
    panel.getAnimations().forEach(animation => animation.cancel());
    panel.animate([
      { opacity: .3, transform: `translateX(${distance}px)` },
      { opacity: 1, transform: 'translateX(0)' }
    ], { duration: 180, easing: 'ease-out' });
  };
  function setupTabs(list, initial = 0, chapter = false) {
    const buttons = [...list.querySelectorAll(':scope > [role="tab"]')];
    const panels = buttons.map(button => document.getElementById(button.getAttribute('aria-controls')));
    let selected = -1;
    const activate = (index, animate = true) => {
      if (selected === index) return;
      const direction = index < selected ? -7 : 7;
      selected = index;
      buttons.forEach((button, i) => {
        button.setAttribute('aria-selected', String(i === index));
        button.tabIndex = i === index ? 0 : -1;
        panels[i].hidden = i !== index;
      });
      if (animate) reveal(panels[index], chapter ? direction : 4);
    };
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => activate(index));
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + buttons.length - 1) % buttons.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = buttons.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          activate(next);
          buttons[next].focus({ preventScroll: true });
        }
      });
    });
    activate(initial, false);
    return activate;
  }
  journal.classList.add('is-interactive');
  document.querySelectorAll('.journal-section-tabs, .subject-tabs').forEach(list => setupTabs(list));
  const chapterTabs = document.querySelector('.campus-chapters');
  const activateChapter = setupTabs(chapterTabs, location.hash === '#journal-kiit' ? 0 : 1, true);
  window.addEventListener('hashchange', () => {
    if (location.hash === '#journal-kiit') activateChapter(0);
    if (location.hash === '#journal-iu') activateChapter(1);
  });
  motion.addEventListener('change', () => {
    if (motion.matches) journal.querySelectorAll('*').forEach(element => element.getAnimations().forEach(animation => animation.cancel()));
  });
})();
