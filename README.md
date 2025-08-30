# AWS Study Journal (Static Website)

A clean, organized study journal for AWS topics with hands-on labs.

## Structure
- **/topics** — Networking, Compute, Storage, Security, Monitoring pages
- **/labs** — Matching hands-on labs for each topic
- **/assets** — Diagrams, screenshots, and code snippets
- **/js** — Small JS for mobile nav + footer year
- **/css** — Custom CSS overrides (Tailwind via CDN in HTML)

## Local Preview
You can open `index.html` directly in your browser. For best results, use a simple local server:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a new GitHub repository (e.g., `aws-study-journal`).
2. Upload all files/folders from this project into the repo root.
3. In **Settings → Pages**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or `master`) / root
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Custom Domain (Optional)
- Add a `CNAME` file with your domain and point DNS to GitHub Pages.

## Adding Content
- Create new topic pages under `/topics/` and link them on `/topics/index.html`.
- Create new lab pages under `/labs/` and add links on `/labs/index.html`.
- Store images under `/assets/screenshots` or `/assets/diagrams` and reference them from your pages.

## Styling
- Tailwind CDN is used for utility classes.
- Prism.js is included for code highlighting on `<pre><code>` blocks.

## License
MIT