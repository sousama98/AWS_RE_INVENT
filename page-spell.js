/* Page-arrival spell. Native navigation remains untouched, including deep links. */
(() => {
  const root = document.documentElement;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const pageName = location.pathname.split('/').pop() || 'index.html';
  const pageSpells = {
    'index.html': { name: 'Platform 9¾', pose: 'platform', caption: 'THE ADVENTURE BEGINS…', alt: 'Sourabrata welcoming you with an open hand and an upright wand', wand: [.25, .02] },
    'about.html': { name: 'About', pose: 'about', caption: 'EVERY WIZARD HAS A STORY…', alt: 'Sourabrata with a hand over his heart and his wand lowered', wand: [.78, .93] },
    'projects.html': { name: 'Projects', pose: 'projects', caption: 'IDEAS, INTO EXISTENCE…', alt: 'Sourabrata casting a wand over an open spellbook', wand: [.9, .44] },
    'blog.html': { name: 'Experience', pose: 'experience', caption: 'A LITTLE WANDWORK…', alt: 'Sourabrata extending his wand in a confident forward cast', wand: [.96, .09] },
    'education.html': { name: 'Education', pose: 'education', caption: 'CURIOSITY IS ITS OWN MAGIC…', alt: 'Sourabrata studying a parchment scroll with his wand beside his temple', wand: [.336, .16] },
    'certifications.html': { name: 'Credentials', pose: 'credentials', caption: 'A LITTLE MAGIC, EARNED…', alt: 'Sourabrata holding a gold medallion and saluting with his wand', wand: [.33, .038] },
    'contact.html': { name: 'Contact', pose: 'contact', caption: 'SENDING A LITTLE OWL POST…', alt: 'Sourabrata presenting a sealed envelope with his wand at the ready', wand: [.65, .444] }
  };
  const config = pageSpells[pageName] || pageSpells['index.html'];
  const spell = config.name;
  const avatarFile = config.pose === 'experience' ? 'sourabrata-wizard.png' : `sourabrata-wizard-${config.pose}.png`;
  const [wandX, wandY] = config.wand;
  const origin = [30 + wandX * 360, 20 + wandY * 540];
  const trails = {
    platform: `M${origin}C260-30 740 10 790 130S610 200 520 255C600 340 770 330 890 301`,
    about: `M${origin}C510 545 410 215 590 240S800 335 890 301`,
    projects: `M${origin}C490 130 520 390 650 260S820 240 890 301`,
    experience: `M${origin}C457-6 762 38 795 127S597 141 512 249C477 295 702 334 890 301`,
    education: `M${origin}C330 40 470 120 530 210S720 220 890 301`,
    credentials: `M${origin}C200-25 870 5 810 190S630 370 890 301`,
    contact: `M${origin}C430 320 510 140 645 205S760 350 890 301`
  };
  let active = null;

  function castSpell() {
    if (active || motion.matches) { root.classList.remove('spell-pending'); return; }
    const previousFocus = document.activeElement;
    const overlay = document.createElement('div');
    overlay.className = 'page-spell';
    overlay.dataset.pose = config.pose;
    overlay.style.setProperty('--wand-x', `${wandX * 100}%`);
    overlay.style.setProperty('--wand-y', `${wandY * 100}%`);
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', `Opening ${spell}`);
    // Page content and pose geometry come exclusively from the fixed map above.
    overlay.innerHTML = `
      <div class="page-spell-topline"><span class="page-spell-signature">Sourabrata Samanta <span aria-hidden="true">✦</span></span><button type="button" class="page-spell-skip">Skip animation →</button></div>
      <div class="page-spell-stage">
        <div class="page-spell-figure"><img class="page-spell-avatar" src="assets/illustrations/${avatarFile}" alt="${config.alt}" width="1024" height="1536" fetchpriority="high"><span class="page-spell-burst" aria-hidden="true"></span></div>
        <svg class="page-spell-trail" viewBox="0 0 1000 560" fill="none" aria-hidden="true"><path class="spell-arc" pathLength="1" d="${trails[config.pose]}" stroke="#e8c785" stroke-width="2"/><path class="spell-arc" pathLength="1" d="${trails[config.pose]}" stroke="#e8c785" stroke-opacity=".2" stroke-width="6"/></svg>
        <div class="page-spell-copy"><p class="page-spell-caption">${config.caption}</p><span class="page-spell-name">${spell}</span><div class="page-spell-rule" aria-hidden="true"></div></div>
        <span class="spell-mote" style="left:46%;top:28%;--delay:.55s" aria-hidden="true">✧</span><span class="spell-mote" style="left:77%;top:25%;--delay:.8s" aria-hidden="true">✦</span><span class="spell-mote" style="left:60%;top:58%;--delay:1s" aria-hidden="true">✧</span>
      </div><p class="page-spell-bottom">A little logic. A little magic.</p>`;
    document.body.append(overlay);
    root.classList.remove('spell-pending');
    const landmarks = [...document.querySelectorAll('body > nav, body > main, body > footer, body > .skip-link')];
    const inertStates = landmarks.map(element => element.inert);
    landmarks.forEach(element => { element.inert = true; });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const skip = overlay.querySelector('button');
    skip.focus({ preventScroll: true });
    let closed = false;
    const timers = [];
    const dismiss = () => {
      if (closed) return;
      closed = true;
      timers.forEach(clearTimeout);
      overlay.classList.add('is-leaving');
      landmarks.forEach((element, i) => { element.inert = inertStates[i]; });
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      if (overlay.contains(document.activeElement)) {
        const target = previousFocus?.matches('button, a[href], [tabindex]') ? previousFocus : document.getElementById('main-content');
        target?.focus({ preventScroll: true });
      }
      setTimeout(() => { overlay.remove(); active = null; }, 300);
    };
    const onKey = event => {
      if (event.key === 'Escape') dismiss();
      if (event.key === 'Tab') { event.preventDefault(); skip.focus(); }
    };
    active = dismiss;
    document.addEventListener('keydown', onKey);
    skip.addEventListener('click', dismiss);
    const avatar = overlay.querySelector('img');
    let started = false;
    const start = () => {
      if (closed || started) return;
      started = true;
      overlay.classList.add('is-casting');
      timers.push(setTimeout(dismiss, 2150));
    };
    avatar.addEventListener('load', start, { once: true });
    avatar.addEventListener('error', dismiss, { once: true });
    if (avatar.complete) { if (avatar.naturalWidth) start(); else dismiss(); }
    // Start the text effect promptly even if the image is still downloading.
    timers.push(setTimeout(start, 550));
    // Hard cap: navigation content can never remain trapped behind this intro.
    timers.push(setTimeout(dismiss, 3000));
  }
  motion.addEventListener('change', () => { if (motion.matches) { active?.(); root.classList.remove('spell-pending'); } });
  window.addEventListener('pageshow', event => { if (event.persisted) castSpell(); });
  const footer = document.querySelector('.footer-inner');
  if (footer) {
    const replay = document.createElement('button');
    replay.className = 'replay-spell'; replay.type = 'button'; replay.textContent = 'Cast again ✧';
    replay.setAttribute('aria-label', 'Replay the page arrival spell');
    replay.addEventListener('click', castSpell);
    footer.insertBefore(replay, footer.querySelector('small'));
    const updateReplay = () => { replay.hidden = motion.matches; };
    updateReplay(); motion.addEventListener('change', updateReplay);
  }
  castSpell();
})();
