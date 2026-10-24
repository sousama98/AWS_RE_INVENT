/* Personal collection content. Fill only the entries you want visitors to see.
   Empty fields, favourites, photos, characters, links, and media are never rendered.
   Keep stories short. Each collection has room for up to three favourites.
   This file is edited by the portfolio owner; visitors cannot change it. */
window.interestsContent = {
  united: {
    story: '', // What supporting Manchester United means to you.
    favourites: [
      { title: '', kind: '', note: '' }, // e.g. a player or memorable match.
      { title: '', kind: '', note: '' },
      { title: '', kind: '', note: '' }
    ]
  },
  cinema: {
    story: '',
    directors: {
      'Satyajit Ray': { reflection: '', films: ['', '', ''] },
      'Ritwik Ghatak': { reflection: '', films: ['', '', ''] },
      'Mrinal Sen': { reflection: '', films: ['', '', ''] },
      'Alfred Hitchcock': { reflection: '', films: ['', '', ''] },
      'David Fincher': { reflection: '', films: ['', '', ''] },
      'Martin Scorsese': { reflection: '', films: ['', '', ''] },
      'Akira Kurosawa': { reflection: '', films: ['', '', ''] }
    }
  },
  music: {
    story: '',
    favourites: [
      { title: '', kind: '', note: '' }, // kind may be Album or Song.
      { title: '', kind: '', note: '' },
      { title: '', kind: '', note: '' }
    ],
    playlistUrl: '', // Your actual playlist URL; leave blank to hide the link.
    audioSrc: '', // Optional local audio path or HTTPS URL. No autoplay.
    audioLabel: ''
  },
  rock: {
    story: '',
    artists: ['Pink Floyd', 'Scorpions', 'Fossils', 'Cactus', 'Led Zeppelin', 'Guns N’ Roses', 'Eric Clapton'],
    photos: [{ src: 'assets/interests/guitar-stage.png', alt: 'An illustrative electric guitar and amplifier on an empty stage', caption: 'Guitar stage.' }],
    favourites: [
      { title: '', kind: '', note: '' }, // kind may be Band or Album.
      { title: '', kind: '', note: '' },
      { title: '', kind: '', note: '' }
    ]
  },
  art: {
    story: '',
    favourites: [
      { title: '', kind: '', note: '' }, // An artwork or artist and a personal note.
      { title: '', kind: '', note: '' },
      { title: '', kind: '', note: '' }
    ],
    photos: [] // Optional: { src: 'assets/your-image.jpg', alt: '', caption: '' }
  },
  iu: {
    story: '',
    favourites: [
      { title: '', kind: '', note: '' }, // A real game memory, when you choose to add one.
      { title: '', kind: '', note: '' },
      { title: '', kind: '', note: '' }
    ],
    photos: [] // Add only photographs associated with your IU memories.
  },
  marvel: {
    story: '',
    featuredFilms: ['Avengers: Endgame'],
    characters: [
      { name: 'Iron Man', why: '' },
      { name: 'Captain America', why: '' },
      { name: '', why: '' }
    ]
  }
};
