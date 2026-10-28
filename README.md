# Marvin Builds — Marvin Laurence Burgos

A responsive student-developer portfolio built with HTML, CSS, and a small vanilla JavaScript enhancement for project filtering. It presents personal and academic projects through a compact introduction, readable project rows, top navigation, and custom project cover illustrations.

Design decisions and their primary sources are documented in [recruiter design research](docs/recruiter-design-research.md).

## Preview locally

From this folder, run:

```sh
python3 -m http.server 4175 --bind 127.0.0.1
```

Open <http://127.0.0.1:4175>. Stop the server with Ctrl+C.

## Update the content

- Edit `index.html` to change the introduction, project descriptions, skills, and links.
- Edit `styles.css` to change colors, spacing, typography, and responsive layouts.
- Edit `script.js` to change the progressive project-filter behavior. All projects and native navigation remain available when JavaScript is disabled.
- Replace image files in `assets/` and `assets/projects/` when updating the supplied avatar or project covers.
- Edit the four `.stack-group` lists in `index.html` to update Frontend, Backend & Hosting, Tools, and Storage. Stack icons are local SVG assets; see [icon sources](docs/stack-icons.md).
- Keep project descriptions accurate and link only to real destinations. The email action opens the visitor's mail application; there is no contact-form backend.
- The five selected projects are StudyNest, VoxMate, ClassPulse, MarvProx, and Marvin Builds.
- The generated covers are concept illustrations, labeled as artwork rather than product screenshots. Prompts and asset notes are recorded in [project artwork](docs/project-artwork.md).

## Publishing

GitHub stores the source and edit history. GitHub Pages publishes only the explicit public files prepared by the Pages workflow. Project notes and internal instructions are excluded from the website artifact.

Live website: <https://marvmarv08.github.io/>.

Source repository: <https://github.com/marvmarv08/marvmarv08.github.io>.

The redesign is checked at phone, tablet, and desktop widths for content, image loading, filter behavior, keyboard navigation, sticky-header anchor placement, disabled JavaScript, and reduced motion. Successful publication is verified through GitHub Pages and live browser checks.

The workflow follows GitHub's [custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Checks

Check phone, tablet, and desktop layouts, keyboard navigation, reduced motion, link destinations, and the Pages artifact allowlist before publishing. Run `git diff --check` to catch whitespace errors. The page works without JavaScript and uses no external fonts, runtime API calls, or tracking.

## Legacy StudyNest links

The `reviewer-organizer/` compatibility page forwards old bookmarks and the established email callback path to `/StudyNest/`, preserving query strings and fragments on the same origin. It never reads, stores, or logs callback values. Its three public files are explicitly included in the Pages artifact.

A scoped retirement worker also moves returning tabs away from the old cached shell without deleting study storage.

Run `node --test tests/*.test.cjs` to verify the redirect contract.
