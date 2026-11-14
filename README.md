# Mr. Freem — Portfolio

Personal portfolio of **Mr. Freem**, a software development student building web applications, digital products and e-commerce businesses.

🔗 Live site: https://mr-freem.vercel.app

## Features

- Responsive one-page layout (desktop, tablet, mobile)
- Dark / light mode, remembered between visits and following the system setting by default
- Skills and featured projects sections
- Working contact form powered by [EmailJS](https://www.emailjs.com/)
- Accessible: keyboard-friendly toggle, labelled form fields, skip link, reduced-motion support

## Tech stack

HTML · CSS · vanilla JavaScript · EmailJS

## Project structure

```
├── index.html        # Page content
├── css/maincss.css   # Styles (light + dark theme, responsive rules)
├── js/main.js        # Theme toggle, contact form, image placeholders
├── images/           # Icons and profile photo
└── files/            # (to add) CV in PDF
```

## Run locally

No build step needed. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## To do

- [ ] Add project screenshots: `images/quiz-project.png`, `images/product-testing.png`, `images/hoodies-store.png`
- [ ] Add the CV at `files/CV-Freem-Beaud.pdf` and uncomment the download button
- [ ] Add Instagram and LinkedIn links (commented out in `index.html`)
- [ ] Link each project card to its own repository or live demo
