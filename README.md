# Marvin Laurence Burgos — Developer Portfolio

A responsive portfolio presenting selected projects and the technologies behind them, built with HTML and CSS.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 4175 --bind 127.0.0.1
```

Open <http://127.0.0.1:4175>. Stop the server with Ctrl+C.

## Update the content

- Edit `index.html` to change the introduction, project descriptions, skills, and links.
- Edit `styles.css` to change colors, spacing, typography, and responsive layouts.
- Keep project descriptions accurate and link only to real destinations. Optional contact details and a resume are omitted until supplied.
- The Reviewer Organizer artwork is a project illustration, not a screenshot of its interface.

## Publishing

GitHub stores the source and edit history. GitHub Pages publishes only the explicit public files prepared by the Pages workflow. Project notes and internal instructions are excluded from the website artifact.

The intended address is <https://marvmarv08.github.io/>; deployment verification is recorded after publication.

The workflow follows GitHub's [custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Checks

Check phone, tablet, and desktop layouts, keyboard navigation, reduced motion, link destinations, and the Pages artifact allowlist before publishing. Run `git diff --check` to catch whitespace errors. The page works without JavaScript and uses no external fonts, runtime API calls, or tracking.
