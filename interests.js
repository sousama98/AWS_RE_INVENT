/* Native expandable cards; personal content is rendered only when supplied. */
(() => {
  const content = window.interestsContent || {};
  const hasText = value => typeof value === 'string' && value.trim().length > 0;
  function textElement(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
  }
  function safeUrl(value, local = false) {
    if (!hasText(value)) return null;
    try {
      const url = new URL(value, location.href);
      if (['https:', 'http:'].includes(url.protocol)) return url.href;
      if (local && url.protocol === 'file:' && !/^[a-z]+:/i.test(value)) return url.href;
    } catch { /* Invalid or unsupported URLs are not published. */ }
    return null;
  }
  function renderStory(container, story) {
    if (hasText(story)) container.append(textElement('p', story, 'personal-interest-story'));
  }
  function renderFavourites(container, favourites) {
    const entries = (favourites || []).filter(item => hasText(item.title)).slice(0, 3);
    if (!entries.length) return;
    const list = document.createElement('ol');
    list.className = 'interest-favourites';
    entries.forEach(item => {
      const row = document.createElement('li');
      if (hasText(item.kind)) row.append(textElement('span', item.kind, 'favourite-kind'));
      row.append(textElement('h4', item.title));
      if (hasText(item.note)) row.append(textElement('p', item.note));
      list.append(row);
    });
    container.append(list);
  }
  function renderPhotos(container, photos) {
    const entries = (photos || []).filter(photo => safeUrl(photo.src, true) && hasText(photo.alt));
    if (!entries.length) return;
    const gallery = document.createElement('div'); gallery.className = 'interest-photos';
    entries.forEach(photo => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = safeUrl(photo.src, true); img.alt = photo.alt; img.loading = 'lazy';
      figure.append(img);
      if (hasText(photo.caption)) figure.append(textElement('figcaption', photo.caption));
      gallery.append(figure);
    });
    container.append(gallery);
  }
  function setupTabs(list, panels) {
    const buttons = [...list.querySelectorAll('[role="tab"]')];
    function select(index) {
      buttons.forEach((button, i) => {
        button.setAttribute('aria-selected', String(i === index));
        button.tabIndex = i === index ? 0 : -1;
        panels[i].hidden = i !== index;
      });
    }
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => select(index));
      button.addEventListener('keydown', event => {
        let next;
        if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % buttons.length;
        if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index + buttons.length - 1) % buttons.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = buttons.length - 1;
        if (next !== undefined) { event.preventDefault(); select(next); buttons[next].focus(); }
      });
    });
    select(0);
  }
  document.querySelectorAll('.interest-card').forEach(card => {
    const data = content[card.dataset.interest] || {};
    const body = card.querySelector('.interest-personal-content');
    renderStory(body, data.story);
    renderFavourites(body, data.favourites);
    const artists = (data.artists || []).filter(hasText);
    if (artists.length) {
      const roster = document.createElement('ul'); roster.className = 'artist-roster';
      artists.forEach(name => {
        const item = textElement('li', name);
        if (name === 'Eric Clapton') item.append(textElement('span', 'Guitarist & artist', 'artist-kind'));
        roster.append(item);
      });
      body.append(roster);
    }
    (data.featuredFilms || []).filter(hasText).forEach(title => body.append(textElement('span', title, 'featured-film')));
    renderPhotos(body, data.photos);
    if (!body.childElementCount) {
      body.hidden = true;
      const hasContext = ['cinema', 'iu'].includes(card.dataset.interest)
        || (data.characters || []).some(character => hasText(character.name))
        || (card.dataset.interest === 'music' && (safeUrl(data.playlistUrl) || safeUrl(data.audioSrc, true)));
      if (!hasContext) card.querySelector('.collection-heading').hidden = true;
    }
    card.addEventListener('keydown', event => {
      if (event.key === 'Escape' && card.open) {
        // Only the card currently containing focus responds.
        card.open = false; card.querySelector('summary').focus({ preventScroll: true });
      }
    });
    card.querySelector('summary').addEventListener('click', () => {
      if (!card.open) document.querySelectorAll('.interest-card[open]').forEach(other => { other.open = false; });
    });
  });
  const directorPanels = [...document.querySelectorAll('.director-panel')];
  directorPanels.forEach(panel => {
    const director = content.cinema?.directors?.[panel.dataset.director] || {};
    const body = panel.querySelector('.director-personal-content');
    renderStory(body, director.reflection);
    renderFavourites(body, (director.films || []).map(title => ({ title })));
    if (!body.childElementCount) body.hidden = true;
  });
  const directorTabs = document.querySelector('.director-tabs');
  if (directorTabs) setupTabs(directorTabs, directorPanels);

  const music = content.music || {};
  const musicBody = document.querySelector('#interest-music .interest-expanded');
  const playlist = safeUrl(music.playlistUrl);
  if (playlist) {
    const link = textElement('a', 'Open my playlist ↗', 'interest-context-link');
    link.href = playlist; link.target = '_blank'; link.rel = 'noopener noreferrer'; musicBody.append(link);
  }
  const audioUrl = safeUrl(music.audioSrc, true);
  if (audioUrl) {
    const audio = document.createElement('audio');
    audio.src = audioUrl; audio.controls = true; audio.preload = 'none';
    audio.setAttribute('aria-label', hasText(music.audioLabel) ? music.audioLabel : 'Play music');
    musicBody.append(audio);
    document.getElementById('interest-music').addEventListener('toggle', event => { if (!event.target.open) audio.pause(); });
  }
  const characters = (content.marvel?.characters || []).filter(item => hasText(item.name)).slice(0, 3);
  if (characters.length) {
    const body = document.querySelector('#interest-marvel .interest-expanded');
    const list = document.createElement('div'); list.className = 'character-tabs';
    list.setAttribute('role', 'tablist'); list.setAttribute('aria-label', 'Explore Marvel characters');
    const panels = characters.map((character, index) => {
      const button = textElement('button', character.name);
      button.type = 'button'; button.id = `character-tab-${index}`; button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', `character-panel-${index}`); list.append(button);
      const panel = document.createElement('section'); panel.className = 'character-panel'; panel.id = `character-panel-${index}`;
      panel.setAttribute('role', 'tabpanel'); panel.setAttribute('aria-labelledby', button.id); panel.tabIndex = 0;
      panel.append(textElement('h4', character.name)); renderStory(panel, character.why);
      return panel;
    });
    body.append(list, ...panels); setupTabs(list, panels);
  }
})();
