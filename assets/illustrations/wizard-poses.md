# Page-specific wizard poses

Created with the built-in image generation tool. The existing wizard illustration supplies outfit and illustration style; the original `assets/logos/portimage.JPG` is the sole facial identity source. Six new transparent PNGs accompany the original Experience pose. Each page preloads only its own image and uses a distinct CSS character motion and gold-trail path. These are animated illustrations, rather than articulated video frames.

| Page | Pose | Saved asset |
| --- | --- | --- |
| Platform 9¾ | Open-handed welcome, wand held high | `sourabrata-wizard-platform.png` |
| About | Hand over heart, wand lowered | `sourabrata-wizard-about.png` |
| Projects | Wand over an open spellbook | `sourabrata-wizard-projects.png` |
| Experience | Confident forward cast | `sourabrata-wizard.png` |
| Education | Reading a parchment scroll | `sourabrata-wizard-education.png` |
| Credentials | Medallion and celebratory salute | `sourabrata-wizard-credentials.png` |
| Contact | Presenting a sealed envelope | `sourabrata-wizard-contact.png` |

All image paths are relative to `assets/illustrations/`. The existing Experience generation prompt is in `wizard-generation.md`.

## Final prompts

### platform

Use case: identity-preserve. Create ONE new pose variant of the adult wizard in reference image 1. Reference image 1 is the outfit/style edit target; reference image 2 (original portrait) is the ONLY facial identity source. Preserve his recognizable face, swept-up black hair, dark glasses, beard, warm skin, earrings and friendly expression. Preserve emerald robe, burgundy scarf, ivory shirt and gold embroidered details. Same polished semi-realistic storybook illustration. Truly TRANSPARENT background, isolated single character from head to mid-thigh, fully contained with generous margin around wand, hair and hands. No scenery, no text, no logos, no baked-in glowing effects. Make the pose distinctly different from the reference's extended pointing arm. Pose for platform page: Welcoming arrival pose: torso facing front, left hand extended open palm toward the visitor in a welcoming gesture, RIGHT elbow bent and wand held high above the right shoulder, wand pointing almost vertically upward. Upright inviting stance, smiling. Keep the raised wand fully inside canvas.

### about

Use case: identity-preserve. Create ONE new pose variant of the adult wizard in reference image 1. Reference image 1 is the outfit/style edit target; reference image 2 (original portrait) is the ONLY facial identity source. Preserve his recognizable face, swept-up black hair, dark glasses, beard, warm skin, earrings and friendly expression. Preserve emerald robe, burgundy scarf, ivory shirt and gold embroidered details. Same polished semi-realistic storybook illustration. Truly TRANSPARENT background, isolated single character from head to mid-thigh, fully contained with generous margin around wand, hair and hands. No scenery, no text, no logos, no baked-in glowing effects. Make the pose distinctly different from the reference's extended pointing arm. Pose for about page: Thoughtful personal-introduction pose: torso turned slightly toward viewer's left, LEFT hand over his heart, RIGHT arm relaxed and wand held diagonally downward beside his right hip. Warm modest smile, head slightly tilted, shoulders relaxed. Both arms close to body, no raised arm.

### projects

Use case: identity-preserve. Create ONE new pose variant of the adult wizard in reference image 1. Reference image 1 is the outfit/style edit target; reference image 2 (original portrait) is the ONLY facial identity source. Preserve his recognizable face, swept-up black hair, dark glasses, beard, warm skin, earrings and friendly expression. Preserve emerald robe, burgundy scarf, ivory shirt and gold embroidered details. Same polished semi-realistic storybook illustration. Truly TRANSPARENT background, isolated single character from head to mid-thigh, fully contained with generous margin around wand, hair and hands. No scenery, no text, no logos, no baked-in glowing effects. Make the pose distinctly different from the reference's extended pointing arm. Pose for projects page: Spellbook creation pose: torso turned three-quarters toward viewer's right, LEFT arm cradling an OPEN antique leather-bound spellbook at waist height, RIGHT hand holding a wand horizontally OVER the book as if bringing an idea to life. Look at viewer confidently. Hands and book separated clearly. No letters on book pages.

### education

undefinedPose for education page: Scholar pose: in three-quarter profile toward viewer's left, head gently bowed looking down at an UNROLLED PARCHMENT SCROLL held in the LEFT hand at chest level. RIGHT elbow bent, wand upright close beside his temple, not extended toward viewer. Thoughtful small smile. Scroll has no readable text. This is distinctly a reading-and-learning silhouette.

### credentials

undefinedPose for credentials page: Achievement pose: shoulders square to viewer, a small ornate gold star-shaped medallion on a ribbon proudly held up in the LEFT hand at chest height. RIGHT elbow held out to side, wand raised diagonally upward in a celebratory salute. Confident cheerful grin. Keep it tasteful and clearly different from the original forward-pointing pose. No letters, logos or text on medal.

### contact

undefinedPose for contact page: Owl-post pose: torso angled gently toward viewer's right, LEFT hand presenting a cream ENVELOPE with a burgundy wax seal out toward viewer at chest height. RIGHT hand and wand held low beside the envelope, wand pointing diagonally upward toward its seal. Friendly inviting smile, head slightly tilted. Envelope must be blank, no text. This is a distinct letter-delivery silhouette, not a book or scroll.
