# A simpler portfolio for internship and freelance enquiries

Research and implementation: 28 October 2026.

## Goal and boundaries

Help a first-time visitor identify the developer, understand the work, inspect evidence, and make contact. Preserve the off-white and teal palette, supplied illustrated avatar, five selected projects, and four technology categories. Describe experience as personal and academic work; do not imply employment, clients, measured business outcomes, or verified production readiness.

## Evidence and decisions

| Primary source | Relevant guidance | Applied decision |
| --- | --- | --- |
| [GitHub: Using your GitHub profile to enhance your resume](https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume) | Keep the introduction concise, highlight 3–5 relevant projects, and make features, demos, and source easy to explore. | Place the name, role, availability, email, and GitHub near the beginning. Keep five projects, with StudyNest first because it has a published application. Give each entry a purpose, technology labels, and direct evidence links. |
| [Nielsen Norman Group: How People Read Online](https://www.nngroup.com/articles/how-people-read-online/) | Eyetracking research supports noticeable headings, important information early, plain language, and scannable formatting. | Use literal section names, compact descriptions, consistent project rows, and larger body text. Remove the large introductory portrait, repeated fact strip, and decorative filler tile. |
| [Harvard SEAS: Resumes & Portfolios](https://seas.harvard.edu/office-student-career-development/resources-undergraduate-students/resumes-portfolios) | Projects help show how skills are applied; portfolios and GitHub let employers examine work more deeply. | Connect the stack to project repositories rather than adding proficiency scores. Keep education and the student's actual experience explicit. |
| [W3C: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Normal text needs at least 4.5:1 contrast; qualifying large text needs 3:1. | Keep dark text on pale surfaces and use deep teal for actions. Avoid faint tiny body copy. |
| [W3C: Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | Pointer targets need adequate size or spacing; the minimum criterion is 24 CSS pixels with defined exceptions. | Use at least 44px-high navigation, filter buttons, and text actions as a more generous project target. Preserve visible keyboard focus and native section links. |

These sources do not establish a guaranteed hiring result or a universal time limit for reviewing a software portfolio. GitHub's guidance concerns profiles, Harvard's guidance concerns student applications, and NN/g studies general web reading. Applying them to this site's layout is an informed design decision, not a recruiter experiment. No hiring conversion improvement has been measured.

## Presentation choices

The introduction now leads with identity and intent; the illustrated avatar supports a small education card. Horizontal project rows on larger screens put artwork next to readable evidence. Phones use a single column. StudyNest and VoxMate lead, followed by ClassPulse, MarvProx, and this portfolio. All existing cover assets remain labeled as artwork.

Project status matters: StudyNest requires an account; VoxMate is an MVP; ClassPulse has an interface preview with an unavailable backend; MarvProx simulates actions and does not implement real dropping. The portfolio avoids a resume download because no resume file has been supplied. It also avoids invented testimonials, employer logos, skill percentages, and unsupported performance metrics.

All 22 stack labels remain visible, grouped into Frontend, Backend & Hosting, Tools, and Storage. A short label describes these as technologies used and explored, rather than claiming equal proficiency in all of them.

## Verification scope

Browser checks cover narrow phones, tablets, and desktops; content preservation; loaded local artwork and icons; filters; keyboard entry; section offsets; reduced motion; and the complete JavaScript-disabled experience. Existing legacy StudyNest redirect tests protect old bookmarks and email callback URLs. These checks support usability and compatibility; they are not a full accessibility certification or an authenticated test of the showcased applications.

Verified at 320, 390, 768, 1024, and 1440px: no horizontal overflow or browser errors; all local images decode; all five projects and 22 stack entries remain; filters show three web projects and two tools; section headings clear the sticky header; keyboard entry reaches the skip link. With JavaScript disabled, every project, stack entry, and section link remains available.

Automated axe checks at 320 and 1440px reported no violations in the selected WCAG A/AA rules. Automated contrast analysis left some content for manual review; direct calculations of the stylesheet's text/surface pairs exceed 4.5:1. The four legacy redirect/worker tests pass, and the deployment preparation produces exactly 35 allowlisted public files. Source links and public application entry pages return HTTP 200; ClassPulse's documented backend health URL still returns HTTP 404. This verifies entry points, not authenticated application workflows.
