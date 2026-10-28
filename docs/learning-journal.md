# Learning Journal

## Building a portfolio with a small, reliable stack

This portfolio uses HTML for content and CSS for presentation. Native section links handle navigation, so visitors can use the site even when JavaScript is disabled. A database or application framework would add maintenance without helping this page's purpose.

GitHub stores source files and their history. GitHub Pages serves a selected set of those files as a public website. The deployment workflow copies only the public page, stylesheet, icon, and a Pages marker into its artifact; project notes and workspace instructions stay out of the website.

Portfolio descriptions should reflect work that can be demonstrated. Project technologies were checked against the public Reviewer Organizer repository. A private project can have a short, truthful description without exposing its source code. Decorative artwork is identified as an illustration so it cannot be mistaken for a product screenshot.

Responsive verification means inspecting the page at different screen widths, not merely making the browser smaller once. Checking keyboard navigation, disabled JavaScript, reduced motion, and real links catches usability problems that a screenshot alone can miss.

## Renaming a hosted project

A GitHub repository rename also changes a project Pages path. StudyNest keeps its established email callback and a same-origin redirect so older links can still reach the new address. Branding can change while database names and backup/import format identifiers stay stable, preserving existing data.

## Designing a useful project showcase

Artwork can communicate a project's purpose without being an actual application screenshot. Labeling concept covers keeps the presentation honest. The generated originals are preserved, while smaller WebP copies reduce loading cost without changing the composition.

Project filters are a progressive enhancement: the complete project list is present in HTML, and JavaScript adds filtering only when available. A sticky header also needs enough anchor offset so clicking a section link does not hide its heading. Both the enhanced and JavaScript-disabled experiences need browser checks.

## Keeping a stack easy to scan

An icon grid benefits from plain text labels: a visitor should not need to recognize a logo to know the tool. Separate storage from backend/hosting so technologies such as SQLite and Vercel have clear roles. Local SVG files keep the grid sharp without adding remote requests or a runtime icon dependency.

## Designing around a visitor's questions

A portfolio should quickly answer who the developer is, what they can show, and how to contact them. Keeping important information early and using plain section headings helps visitors scan. A smaller avatar and consistent project rows leave more room for readable descriptions and direct source links.

Research is a reason for a design decision, not proof that a particular site improves hiring outcomes. Preserve honest project limitations and distinguish working previews, prototypes, and concept artwork. Browser checks confirm layout and interactions; they do not prove every external application's features work.
