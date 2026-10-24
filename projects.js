(() => {
  const book = document.querySelector('.spellbook');
  if (!book) return;
  const slides = [...book.querySelectorAll('.spell-slide')];
  const chapters = [...book.querySelectorAll('.chapter-select')];
  const counter = document.getElementById('project-counter');
  const progress = book.querySelector('.progress-track > span');
  let current = Math.max(0, slides.findIndex(slide => `#${slide.id}` === location.hash));
  const show = (index, updateHash = true) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    chapters.forEach((button, i) => button.setAttribute('aria-pressed', String(i === current)));
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')} · ${slides[current].dataset.title}`;
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    if (updateHash) history.replaceState(null, '', `#${slides[current].id}`);
  };
  book.classList.add('is-interactive');
  book.querySelector('.chapter-index').hidden = false;
  book.querySelector('.spell-controls').hidden = false;
  show(current, false);
  chapters.forEach((button, index) => {
    button.addEventListener('click', () => show(index));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % slides.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + slides.length - 1) % slides.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = slides.length - 1;
      if (next !== undefined) { event.preventDefault(); show(next); chapters[next].focus(); }
    });
  });
  document.getElementById('previous-project').addEventListener('click', () => show(current - 1));
  document.getElementById('next-project').addEventListener('click', () => show(current + 1));
  window.addEventListener('hashchange', () => {
    const index = slides.findIndex(slide => `#${slide.id}` === location.hash);
    if (index >= 0) show(index, false);
  });
  // Native disclosures keep the workflow usable without JavaScript too.
  book.querySelectorAll('.tracy-workflow').forEach(workflow => {
    const stages = [...workflow.querySelectorAll('.workflow-stage')];
    stages.forEach((stage, index) => {
      stage.addEventListener('toggle', () => {
        if (stage.open) stages.forEach(other => { if (other !== stage) other.open = false; });
      });
      stage.querySelector('summary').addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % stages.length;
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + stages.length - 1) % stages.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = stages.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          stages[next].open = true;
          stages[next].querySelector('summary').focus();
        }
      });
    });
  });
  // Keep normal vertical scrolling; horizontal gestures on artwork turn a page.
  book.querySelectorAll('.spell-visual').forEach(art => {
    let start;
    art.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'touch' || event.target.closest('a, button, summary, .tracy-workflow')) return;
      start = { x: event.clientX, y: event.clientY };
      art.setPointerCapture(event.pointerId);
    });
    art.addEventListener('pointerup', event => {
      if (!start) return;
      const dx = event.clientX - start.x, dy = event.clientY - start.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
      start = null;
    });
    art.addEventListener('pointercancel', () => { start = null; });
  });
})();
