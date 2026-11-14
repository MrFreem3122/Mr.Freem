# Mr. Freem — Portfolio

Personal portfolio of **Mr. Freem**, a software development student building web applications, digital products and e-commerce businesses.

🔗 Live site: https://mr-freem.vercel.app

## Features

- Minimal, responsive one-page layout (desktop, tablet, mobile)
- Dark / light mode, remembered between visits and following the system setting by default
- Skills and featured projects sections
- Working contact form powered by [EmailJS](https://www.emailjs.com/)
- Accessible: keyboard-friendly toggle, labelled form fields, skip link, reduced-motion support

## Tech stack

HTML · CSS · vanilla JavaScript · EmailJS

## Project structure

```
├── index.html        # Page content
├── css/style.css     # Styles (light + dark theme, responsive rules)
├── js/main.js        # Theme toggle, contact form
├── projects/         # One detail page per project
├── images/           # Profile photo, images/projects/ = project screenshots
└── files/            # (to add) CV in PDF
```

## Run locally

No build step needed. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## To do

- [ ] Add the CV at `files/CV-Freem-Beaud.pdf` and uncomment the link in the hero
- [ ] Add the LinkedIn link (commented out in `index.html`)
- [ ] Link the quiz project to its own repository
- [ ] Fill in the Carwash page (`projects/carwash.html`, lines marked TODO) and its card in `index.html`
- [ ] Add screenshots `images/projects/raceday.jpg`, `carwash.jpg`, `quiz.jpg` (a placeholder shows until then)
