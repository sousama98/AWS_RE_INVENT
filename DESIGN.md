# A little logic. A little magic.

A wizarding-inspired portfolio built around a midnight railway, an enchanted library, and a curious builder. The atmosphere comes from original station artwork, editorial type, warm materials, and restrained motion.

## Palette

| Role | Color | Use |
| --- | --- | --- |
| Midnight emerald | `#0C1D19` | Main background |
| Forest | `#122720` | Interior cards and panels |
| Parchment | `#EDE5D2` | Journey map, photo borders |
| Antique gold | `#CCB078` | Accents, route markers, links |
| Warm ivory | `#EEE8D9` | Main text |
| Sage | `#AFB8A9` | Secondary text |
| Burgundy | `#803E3D` | Railway and platform details |

The Lumos button switches to a parchment palette; Nox restores midnight. The choice persists between pages when browser storage is available. Tokens live in `enchanted.css`.

## Visitor flow

1. Arrive at Platform 9¾. Read a clear introduction beside the illustrated station portal.
2. Select **Enter Platform 9¾**. A brief glow leads to the journey map. Reduced-motion visitors go directly to the map.
3. Choose About, Projects, Experience, Education, or Credentials. Each stop combines a themed caption with a clear functional label.
4. Explore featured work, personal interests, and the optional photo journal. Featured experience links land on the corresponding employer.
5. Follow **Let's connect** to the contact page, or use the email link directly.

A direct Projects link and persistent navigation support visitors who want a quick route. Interior pages end with the next chapter and a return to the journey map. Deep links remain usable without passing through the entrance.

## Presentation and interaction

- Serif headlines, italic gold emphasis, small chapter labels, generous space, fine borders, and minimal corner rounding.
- Mobile navigation uses a labeled button with expanded state and Escape-to-close behavior. The journey map becomes a vertical itinerary.
- Native links and the photo journal work without JavaScript. Theme controls and academic journal tabs use JavaScript; education content remains readable without it.
- Keyboard focus indicators, a skip link, accessible dialog controls, focus restoration, and reduced-motion styles are included.
- No autoplay audio or rotating galleries. All illustrations and images are local; no build tool or third-party font is required.

## Files

- `index.html`: entrance, journey map, featured work, personal gallery, contact invitation.
- `enchanted.css`: shared colors, typography, components, page overrides, responsive layouts, motion preferences.
- `enchanted.js`: theme choice, navigation, entrance transition.
- `assets/illustrations/midnight-express.svg`: original scalable station artwork.
- Existing interior HTML files retain the portfolio content, including the RTM experience.

## Project spellbook

The Projects page presents one concise project at a time with a chapter index, previous/next buttons, a position indicator, and original concept illustrations. The full original case studies are available through native expandable sections. Chapter buttons support arrow keys, Home, and End; mobile artwork supports horizontal swipe gestures. There is no automatic rotation. Project URLs accept `#project-conversion`, `#project-seoul`, `#project-pwc`, and `#project-tracyai`. Without JavaScript, all four projects remain visible and the case studies still expand. The page-specific files are `projects.css` and `projects.js`.

## Arrival spells

Pages other than Education open with a short wizard-avatar entrance and a spell bearing the page’s navigation label: Platform 9¾, About, Projects, Experience, Credentials, or Contact. The avatar uses Sourabrata’s existing portrait as its only identity reference. Gold effects and character motion are rendered by CSS. Skip animation and Escape dismiss the entrance immediately; the footer’s Cast again button replays it. Reduced-motion visitors go directly to the page. Native navigation, deep links, and the project carousel remain independent of this effect. Implementation: `page-spell.js`, `page-spell.css`; avatar and generation prompt: `assets/illustrations/sourabrata-wizard.png` and `assets/illustrations/wizard-generation.md`.

Each arrival now has a distinct pose and motion: Platform 9¾ welcomes the visitor; About bows with a hand over the heart; Projects conjures over an open spellbook; Experience casts forward; Credentials salutes with a medallion; Contact presents a sealed envelope. The figure and wand glow move together, with per-pose wand coordinates and spell trajectories. Only the current page’s avatar is preloaded, and reduced-motion visitors skip that preload. See `assets/illustrations/wizard-poses.md` for all saved assets and final generation prompts.


## TracyAI and home navigation

TracyAI is chapter 04, professional work completed at Mphasis. The case study separates the document processing and retrieval contribution from platform outcomes delivered by the team. Field Notes shows the under-seven-day assessment metric and a four-stage simplified workflow: Documents, Evidence retrieval, AI analysis, and Analyst review. Native disclosures let visitors inspect each stage, including without JavaScript. Arrow keys, Home, and End navigate the workflow when JavaScript is available. Touch interaction with the workflow does not trigger a project swipe. The carousel counter and progress adapt to all four projects, and the compact index uses two columns on small screens.

`index.html` is the Platform 9¾ homepage, served at the site root. Navigation identifies it as Home · 9¾. Its TracyAI feature links directly to `projects.html#project-tracyai`.


## Academic journal

`education.html` is an on-page journal titled “Two campuses. One evolving perspective.” Indiana University opens by default. Both chapter selectors retain degree summaries, and each chapter’s qualification record stays outside the Overview / What I studied / Learning in practice tabs. KIIT subjects have factual subject descriptions, rather than implied project claims. Kelley areas of focus sit alongside the seven course names preserved from the original site. Existing extracurricular and credential details remain available.

Kelley dates are preserved as May 2024 - Dec 2025 and GPA as 3.725/4.0. The user confirmed that the PwC capstone, conversion prediction, and Seoul bike demand projects belong to the Kelley degree; all three appear as project previews. KIIT dates remain August 2017 - May 2021, with CGPA 8.8/10 as requested. KIIT’s city was checked against its official contact page: https://kiit.ac.in/contact/ . The journal uses existing university logos and a decorative inline academic sketch, not a purported campus photograph.

`education.css` provides the forest-green journal, campus accents, subtle paper texture, open spread, and stacked mobile layout. `education.js` provides accessible nested tabs with arrow keys, Home/End, visible selection, and short optional transitions. Reduced-motion users get immediate changes. The degree modals and their shared event handlers have been removed. Education opens directly without the arrival-spell overlay so nothing delays reading. Credentials and journey-map navigation remain intact.


## Readability update

Reading text, labels, and controls now use a consistent 13–15px scale. The previous additive point increases have been removed. Serif page headings, card titles, and illustrative metrics retain larger sizes for hierarchy. Mobile project visuals let captions participate in layout instead of positioning them over charts; Education tabs wrap naturally; compact Contact cards can shrink within their grid without clipping. No content is scaled with JavaScript. IU GPA remains 3.725/4.0 and KIIT CGPA remains 8.8/10.

## Outside the work

`interests.html` is an illustrated collection of seven interests: Manchester United, cinema and the seven supplied directors, music, rock bands, art, IU Football, and Marvel. A responsive, varied-size grid uses original inline ticket, filmstrip, record, concert-poster, sketchbook, stadium, and comic-panel motifs. Native expandable cards retain keyboard/touch behavior without depending on hover. Director and configured character tabs have arrow-key navigation. Reduced-motion styling removes movement; audio, if configured, requires the visitor’s play action.

Personal content is kept in `interests-data.js`. Empty personal stories, favourites, photos, character selections, playlist links, and audio controls are hidden. No personal preferences, match attendance, film picks, band choices, character favourites, or external links are invented. `INTERESTS.md` documents how to fill the content fields. All navigation menus and the homepage link to the page.


## Interests photography

The collection covers now use local photographic/portrait images and a Marvel Studios wordmark in place of the earlier line drawings. Each expanded card includes image attribution and license links where applicable. Two additional generated illustrative scenes are explicitly labeled and have prompts recorded in `assets/interests/CREDITS.md`. Rock artists and Marvel selections were supplied by the user and are editable in `interests-data.js`. All seven rock names appear in the card preview and expanded roster; the Marvel preview includes Avengers: Endgame, Iron Man, and Captain America. Other personal fields remain empty and hidden.


## Cleaner image presentation

Per-card image captions, Source links, and AI-generated labels are removed from the visitor-facing Interests cards. Required image attribution and license details remain in `assets/interests/CREDITS.md`, linked once as Image credits in the Interests footer. The guitar-stage caption is neutral. TracyAI copy uses evidence-grounded responses instead of the phrase AI generated responses.
