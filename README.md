# Marvin Builds — Marvin Laurence Burgos

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
- The StudyNest artwork is a project illustration, not a screenshot of its interface.

## Publishing

GitHub stores the source and edit history. GitHub Pages publishes only the explicit public files prepared by the Pages workflow. Project notes and internal instructions are excluded from the website artifact.

Live website: <https://marvmarv08.github.io/>.

Source repository: <https://github.com/marvmarv08/marvmarv08.github.io>.

The initial Pages deployment succeeded and the public page passed browser checks at 360px, 768px, and 1440px, including keyboard navigation, disabled JavaScript, and reduced motion. Deployed page, stylesheet, and icon matched the reviewed source.

The workflow follows GitHub's [custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Checks

Check phone, tablet, and desktop layouts, keyboard navigation, reduced motion, link destinations, and the Pages artifact allowlist before publishing. Run `git diff --check` to catch whitespace errors. The page works without JavaScript and uses no external fonts, runtime API calls, or tracking.

## Legacy StudyNest links

The `reviewer-organizer/` compatibility page forwards old bookmarks and the established email callback path to `/StudyNest/`, preserving query strings and fragments on the same origin. It never reads, stores, or logs callback values. Its three public files are explicitly included in the Pages artifact.

A scoped retirement worker also moves returning tabs away from the old cached shell without deleting study storage.

Run `node --test tests/*.test.cjs` to verify the redirect contract.
