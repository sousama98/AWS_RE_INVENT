# Sourabrata’s wizard avatar

Generated with the built-in image generation tool. The only identity reference was `assets/logos/portimage.JPG`. The selected transparent PNG is saved in this project as `assets/illustrations/sourabrata-wizard.png` (1024 × 1536). The original portrait is unchanged.

## Final generation prompt

Use case: identity-preserve. Asset: transparent wizard avatar for a personal portfolio's wand-casting animation. Use the attached portrait as the ONLY identity reference. Create an elegant polished hand-painted storybook / semi-realistic illustrated adult wizard avatar of THIS man, preserving his recognizable facial structure, warm medium-brown skin, black swept-up hair, dark rounded rectangular glasses, short beard/moustache, earrings and friendly confident smile. He must still look like the man in the reference, not like an actor or a different person. Outfit: deep emerald wizard robe, warm ivory shirt, burgundy scarf with restrained gold detailing, fantasy academy inspired. Three-quarter body from head to mid-thigh, facing slightly toward viewer's right. His right arm is extended toward viewer's right holding a slender brown wand pointing diagonally up-right. Both the wand and hand fully inside canvas. Clean isolated cutout, truly TRANSPARENT background. Full character silhouette with generous transparent margin around hair, wand and robe. Warm antique-gold rim lighting. No background scenery, no lettering, no logos, no watermark, no extra characters, no sparks or spell trails baked in (these are animated separately in code). Single avatar, not a sprite sheet.

## Animation

`page-spell.css` animates the illustrated character’s entrance and tilt, wand glow, gold trail, particles, and page-name reveal. This is a browser animation using one avatar illustration, rather than a rendered video. `page-spell.js` supplies the correct page label, skip and Escape controls, focus handling, and replay behavior. Reduced-motion preferences bypass the introduction. Each normal entrance lasts about 2.2 seconds plus its fade; slow-loading assets have a three-second hard cap.
