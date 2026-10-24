# Outside the work

The page is `interests.html`. It is linked from every page’s navigation and from the homepage’s Beyond the keyboard section. The collection uses locally stored stadium photos, a credited Satyajit Ray portrait, a turntable photo, a Pink Floyd archive image, the Marvel Studios wordmark, and clearly identified generated sketchbook/stage scenes. Per-card image notes and provenance labels have been removed; attribution and licensing information is available through the footer’s Image credits link. Full credits and image-generation prompts are in `assets/interests/CREDITS.md`. Stadium photos do not imply personal attendance.

## Add your personal notes

Edit `interests-data.js`. This is an owner-edited content file; it does not expose a public editing form or save visitors’ changes.

- Each interest has a `story` field for a short personal reflection.
- Most interests have three `favourites` entries. Give each entry a `title`, optional `kind` (such as Player, Match, Album, Song, Band, or Artist), and a short `note`.
- Cinema includes the seven requested directors. Fill a director’s `reflection` and up to three `films`.
- Music includes `playlistUrl`, `audioSrc`, and `audioLabel`. Add only your actual playlist URL and an audio file you intend to share. The native audio player has no autoplay and loads audio only on demand. Closing the music panel pauses it.
- Art and IU Football accept `photos` with `src`, descriptive `alt`, and optional `caption`. Use photographs or artworks associated with that specific collection. A photo without a source or alt text is omitted.
- Marvel has three editable `characters`, each with `name` and `why`. Character selectors are omitted until names are supplied; there are no assumed favourites.

Blank stories, favourites, notes, photographs, links, players, and character selectors are not shown on the public page. No empty headings, “coming soon” copy, or placeholder inputs are published. When the personal entries are empty, the cards still open their illustrated collection context; Cinema lets visitors browse the supplied director names, and IU Football links to the verified education chapter.

## Interaction

Cards are native expandable panels, operable by tapping, Enter, or Space. Opening a card closes another open card; Escape closes the current panel and returns focus to its summary. Director and populated Marvel character selectors support arrow keys, Home, and End. Focus is visible, labels wrap on narrow screens, and reduced-motion preferences disable decorative motion. The record rotates slightly on interaction and does not spin continuously or play audio.

The page opens directly without a blocking intro. Original illustrations and the shared forest-green / parchment themes use the portfolio’s typography scale, including its current readability adjustment. The closing invitation links to `contact.html`.


## Named interests

The user supplied Pink Floyd, Scorpions, Fossils, Cactus, Led Zeppelin, Guns N’ Roses, and Eric Clapton. All seven are stored in `rock.artists`; Clapton is labeled as a guitarist/artist. `marvel.featuredFilms` contains Avengers: Endgame; Iron Man and Captain America are the supplied character choices. Albums, songs, and personal reflections remain empty until supplied. No audio plays automatically.
