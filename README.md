# IHPN-UK website

Static site (no build step) for the Igbo Healthcare Professionals Network UK, made for free hosting on GitHub Pages.

Pages: `index.html` (home), `about.html`, `membership.html`, `contact.html`, `404.html`.
Styling: `styles.css` (colours taken from the logo: green #013f24, gold #d9a226, on white). Script: `main.js` (mobile menu only).
Assets: `assets/` holds the logo, crest, icons, and the intro video (compressed copy of the first TikTok video).

## Publish on GitHub Pages
1. Create a public repository. Naming it `<your-github-username>.github.io` gives the address `https://<username>.github.io`.
2. Upload every file in this folder (including the hidden `.nojekyll` file) to the repository root.
3. In the repository: Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.

## Editing
Text lives directly in the HTML files. Change the TikTok link or email by searching for `tiktok.com/@ihpnuk` or `ihpnuk@outlook.com`.

## Adding news and newsletters
- News: copy one `<article class="card news-item">` block in `news.html`, put it first, and change the date, title and text.
- Newsletters: put the PDF in a `newsletters/` folder and replace the "first newsletter is on its way" card with a link to it.
