# Emprint—start from the beginning, step by step

> No coding background is needed. Follow the screens in order: install the app, prepare Node.js and Git, complete the setup wizard, create an anthology, work inside it, then publish when ready. All five anthology formats include screenshots from the app.

- HTML (with screenshots): https://devminson.github.io/emprint-home/document/
- Last updated: 2026-06-07
## 1. Install the app

Emprint 0.3.0 supports recent Mac computers (Apple or Intel chip) and 64-bit Windows. Install with Homebrew or Scoop when you can.

You can install without creating an online account first. You will only need a free GitHub account later when you back up or publish. Use the command blocks in the Install section on the home page (recommended); direct installers are listed there only if you need them. On Mac, direct downloads are .pkg installers with a post-install step that helps with Gatekeeper on unsigned open-source builds.

- macOS: run the Homebrew commands in Terminal. Windows: run the Scoop commands in PowerShell.
- After installing, open Emprint from Applications (Mac) or the Start menu (Windows).
- Direct download on Mac: the .pkg runs a post-install script to ease Gatekeeper. If the app still will not open, right-click Emprint in Applications → Open, or use System Settings → Privacy & Security → Open Anyway.

## 2. Install Node.js (required for full features)

Without Node.js, live preview and other build tools will not work. Install it before you finish the in-app setup wizard.

Emprint runs Node.js and npm in the background for preview and local site builds. The first-run wizard checks Node.js on step 2—install it on your computer first if that step stays blocked.

- Download the current LTS installer from https://nodejs.org and accept the defaults.
- Quit and reopen Emprint after installing so detection can refresh.
- Optional: run `node -v` and `npm -v` in Terminal or Command Prompt.

## 3. Install Git (required for sync and publishing)

Emprint uses Git to track your writing and talk to GitHub. Install Git before linking an account or publishing.

Git is separate from the Emprint app. The setup wizard checks Git on step 1. Many Macs already have Git after installing Apple’s command-line developer tools.

- Download from https://git-scm.com/downloads if needed (default options are fine).
- After installing, quit and reopen Emprint.
- Optional: run `git --version` to confirm.

## 4. First-run setup wizard

The first time you open Emprint, a short wizard checks Git, Node.js, GitHub, and your workspace folder—in that order.

Complete each step before Continue unlocks. Screens below follow the same order as the app (captured from a full Column anthology workflow).

- If a step stays blocked, install the tool on your computer first (see Node.js and Git sections), then restart Emprint.
- GitHub sign-in links the app to your account for repository create/sync.
- The root folder is only for where projects are stored—not your public website URL yet.

### 4.1 Wizard step 1 — Git

On first launch, Emprint checks that Git is available. When the card shows Ready, tap Continue.

Screenshot: wizard-01-git.png

### 4.2 Wizard step 2 — Node.js

Next, Emprint checks Node.js (v22 or newer). Install Node.js on your Mac or PC if this step does not turn green.

Screenshot: wizard-02-node.png

### 4.3 Wizard step 3 — GitHub

Sign in with GitHub so Emprint can create or connect repositories for your anthologies. Follow the on-screen code in your browser if device login is shown.

Screenshot: wizard-03-github.png

### 4.4 Wizard step 4 — Workspace root folder

Choose a folder on your computer where anthology projects will live—like a dedicated “Emprint” drawer. Tap Select folder, then Finish.

Screenshot: wizard-04-root.png

### 4.5 Finish — Anthology hub

When setup completes, you land on the Anthology hub: your list of sites (anthologies) and the entry point to open or create one.

Screenshot: wizard-05-hub.png

## 5. Anthology hub

After setup, the hub is home base: pick an anthology or create a new site (Column, Memoir, Dictionary, Fragments, or Book).

Creating a Column anthology opens the tour in the next section. Memoir, Dictionary, Fragments, and Book each have their own section below with matching screenshots.

### 5.1 Anthology list

The hub lists anthologies you have registered. Use Open to enter an existing site or Create new anthology in the sidebar.

Screenshot: hub-anthologies.png

### 5.2 Create a new anthology

The create panel asks for format (Column, Memoir, Dictionary, Fragments, or Book), title, description, and GitHub repository details. The screens below follow a Column (blog-style) workflow.

Screenshot: hub-create-panel.png

## 6. Column anthology

A Column anthology has six sections in the sidebar—Posts, Drafts, Assets, Design, Imprint, and Settings.

Keyboard shortcuts 1–6 jump between sections. The flow below matches a typical writing → design → publish path.

- Footer actions include Update (pull), Reset draft, and Publish when Git is linked.
- Design → Open preview needs Node.js installed.

### 6.1 Posts — published writing

Posts holds writing you treat as published on your site. The list shows titles and status; select a row to edit.

Screenshot: workspace-posts-list.png

### 6.2 Posts — editor

Write in Markdown. Save from the editor when you are happy with the draft on disk.

Screenshot: workspace-posts-editor.png

### 6.3 Drafts — work in progress

Drafts is for pieces still taking shape—same list + editor pattern as Posts.

Screenshot: workspace-drafts-list.png

### 6.4 Drafts — editor

Use Drafts while ideas are unfinished; move toward Posts when you are ready to publish.

Screenshot: workspace-drafts-editor.png

### 6.5 Assets

Assets is your media library for the anthology. Refresh rescans the project folder.

Screenshot: workspace-assets.png

### 6.6 Design — site look

Design controls layout and styling. Pick a template, open preview in the browser (needs Node.js), or switch toward code mode when you are ready.

Screenshot: workspace-design-template.png

### 6.7 Design — AI prompt (optional)

Optional AI-assisted styling opens in a modal; close when you are done experimenting.

Screenshot: workspace-design-ai-prompt-modal.png

### 6.8 Design — switch to code mode

Switching to code mode asks for confirmation because it changes how you edit the site files.

Screenshot: workspace-design-switch-mode-modal.png

### 6.9 Imprint — publish history

Imprint shows git publish history—traces of what you shipped and when.

Screenshot: workspace-imprint.png

### 6.10 Settings — anthology studio

Per-anthology settings: project metadata, GitHub connection, and studio options.

Screenshot: workspace-settings.png

### 6.11 Command palette

Press ⌘K (Mac) or Ctrl+K (Windows) for quick navigation—jump to hub, sections, or app settings.

Screenshot: workspace-command-palette.png

### 6.12 App settings

Global Emprint preferences (including GitHub OAuth client) live in the app settings modal from the palette.

Screenshot: app-settings-modal.png

## 7. Dictionary anthology

A Dictionary anthology has six sections—Contents, Drafts, Assets, Design, Imprint, and Settings.

Contents is an index tree: create top-level segments, then add knowledge entries. The flow below matches a typical index → draft → design → publish path.

- Footer actions include Update (pull), Reset draft, and Publish when Git is linked.
- Design → Open preview needs Node.js installed.

### 7.1 Open a Dictionary anthology

After you create a Dictionary anthology, Contents opens—the index tree where topics and knowledge entries live.

Screenshot: dictionary-index.png

### 7.2 Contents — index tree

Contents shows the top-level index. Add segments (topics) that group your knowledge entries.

Screenshot: dictionary-contents.png

### 7.3 Contents — new index segment

Create a top-level index segment, then add knowledge entries beneath it.

Screenshot: dictionary-contents-index-created.png

### 7.4 Contents — knowledge editor

Write and save knowledge entries tied to an index segment. Saved entries appear in the Contents tree.

Screenshot: dictionary-contents-entry-editor.png

### 7.5 Drafts — work in progress

Drafts holds knowledge still taking shape—the same list + editor pattern as Column drafts.

Screenshot: dictionary-drafts-list.png

### 7.6 Drafts — editor

Finish ideas in Drafts, then move toward Contents when ready to treat them as published knowledge.

Screenshot: dictionary-drafts-editor.png

### 7.7 Assets

Assets is the media library for this anthology. Refresh rescans the project folder.

Screenshot: dictionary-assets.png

### 7.8 Design — site look

Pick a template, open preview in the browser (needs Node.js), or switch toward code mode when ready.

Screenshot: dictionary-design-template.png

### 7.9 Design — AI prompt (optional)

Optional AI-assisted styling opens in a modal; close when you are done experimenting.

Screenshot: dictionary-design-ai-prompt-modal.png

### 7.10 Design — switch to code mode

Switching to code mode asks for confirmation because it changes how you edit the site files.

Screenshot: dictionary-design-switch-mode-modal.png

### 7.11 Imprint — publish history

Imprint shows git publish history for this Dictionary anthology.

Screenshot: dictionary-imprint.png

### 7.12 Settings — anthology studio

Per-anthology metadata, GitHub connection, and studio options for this Dictionary site.

Screenshot: dictionary-settings.png

### 7.13 Publish dialog

Publish from the sidebar opens a dialog to confirm message and branch before pushing to GitHub.

Screenshot: dictionary-publish-dialog.png

## 8. Fragments anthology

A Fragments anthology has four sections—Artwork, Design, Imprint, and Settings.

Artwork is your gallery: upload images, edit metadata, then tune layout in Design before publishing.

- Upload artwork from Artwork; metadata drives the public lightbox.
- Publish pushes the gallery site to the linked GitHub repository.

### 8.1 Artwork — empty gallery

A new Fragments anthology opens on Artwork—your image gallery. Upload artwork to populate the grid.

Screenshot: fragments-artwork-empty.png

### 8.2 Artwork — uploaded pieces

Uploaded images appear as tiles. Select a piece to edit title, year, medium, tags, and caption.

Screenshot: fragments-artwork-grid.png

### 8.3 Artwork — detail editor

Fill metadata for each piece—what visitors see in the public lightbox and index.

Screenshot: fragments-artwork-detail.png

### 8.4 Design — site look

Design controls gallery layout and styling. Open preview in the browser when Node.js is installed.

Screenshot: fragments-design-template.png

### 8.5 Design — AI prompt (optional)

Optional AI-assisted styling opens in a modal; close when you are done experimenting.

Screenshot: fragments-design-ai-prompt-modal.png

### 8.6 Imprint — publish history

Imprint shows git publish history for this Fragments anthology.

Screenshot: fragments-imprint.png

### 8.7 Settings — anthology studio

Per-anthology metadata, GitHub connection, and studio options for this gallery site.

Screenshot: fragments-settings.png

### 8.8 Publish dialog

Publish from the sidebar opens a dialog to confirm message and branch before pushing to GitHub.

Screenshot: fragments-publish-dialog.png

## 9. Memoir anthology

A Memoir anthology has five sections—Sections, Assets, Design, Imprint, and Settings.

Sections is a searchable portfolio of pages. The flow below matches edit → design → publish.

- Search filters section titles when your portfolio grows.
- Publish pushes the portfolio site to the linked GitHub repository.

### 9.1 Open a Memoir anthology

After you create a Memoir anthology, Sections opens—a portfolio-style list of pages you can search and edit.

Screenshot: memoir-sections.png

### 9.2 Sections — page list

Sections lists portfolio pages. Select a row to edit title and body, or search when the list grows.

Screenshot: memoir-sections-list.png

### 9.3 Sections — search

Use search to filter sections by title when your portfolio has many pages.

Screenshot: memoir-sections-search.png

### 9.4 Sections — editor

Edit section title and Markdown body. Save when the page on disk matches what you want.

Screenshot: memoir-section-editor.png

### 9.5 Sections — saved

After saving, the section title updates in the list so you can keep building the portfolio.

Screenshot: memoir-section-saved.png

### 9.6 Assets

Assets is the media library for this anthology. Refresh rescans the project folder.

Screenshot: memoir-assets.png

### 9.7 Design — site look

Pick a template and open preview in the browser when Node.js is installed.

Screenshot: memoir-design-template.png

### 9.8 Design — AI prompt (optional)

Optional AI-assisted styling opens in a modal; close when you are done experimenting.

Screenshot: memoir-design-ai-prompt-modal.png

### 9.9 Imprint — publish history

Imprint shows git publish history for this Memoir anthology.

Screenshot: memoir-imprint.png

### 9.10 Settings — anthology studio

Per-anthology metadata, GitHub connection, and studio options for this portfolio site.

Screenshot: memoir-settings.png

### 9.11 Publish dialog

Publish from the sidebar opens a dialog to confirm message and branch before pushing to GitHub.

Screenshot: memoir-publish-dialog.png

## 10. Book anthology

A Book anthology has four sections—Story, Design, Imprint, and Settings.

Story is one long Markdown narrative. Use page breaks and Design layout options so readers turn pages on the published site.

- Insert `---` in Story for chapter-style page breaks.
- Design can switch between scroll and paginated reading layouts.

### 10.1 Open a Book anthology

After you create a Book anthology, Story opens—a single long-form narrative with paginated reading on the published site.

Screenshot: book-story.png

### 10.2 Story — start writing

Story holds title, description, and Markdown body for the whole book in one editor.

Screenshot: book-story-initial.png

### 10.3 Story — saved draft

Save title, description, and body as you shape the narrative.

Screenshot: book-story-saved.png

### 10.4 Story — page breaks

Insert `---` page breaks in Markdown so readers turn pages through chapters on the published site.

Screenshot: book-story-page-break.png

### 10.5 Design — site look

Design controls typography, palette, and layout—including scroll vs paginated reading modes.

Screenshot: book-design-template.png

### 10.6 Story — scroll layout

After choosing scroll layout in Design, Story shows the active layout label so you know how readers will move through the book.

Screenshot: book-story-scroll-layout.png

### 10.7 Design — AI prompt (optional)

Optional AI-assisted styling opens in a modal; close when you are done experimenting.

Screenshot: book-design-ai-prompt-modal.png

### 10.8 Imprint — publish history

Imprint shows git publish history for this Book anthology.

Screenshot: book-imprint.png

### 10.9 Settings — anthology studio

Per-anthology metadata, GitHub connection, and studio options for this book site.

Screenshot: book-settings.png

### 10.10 Publish dialog

Publish from the sidebar opens a dialog to confirm message and branch before pushing to GitHub.

Screenshot: book-publish-dialog.png

## 11. Publish and return to hub (Column)

When writing is ready, Publish pushes commits to GitHub; Imprint records the trace.

Git must be installed and GitHub connected. Publishing is per anthology repository.

### 11.1 Publish dialog

From the sidebar, Publish opens a dialog to confirm message and target branch before pushing to GitHub.

Screenshot: workspace-publish-dialog.png

### 11.2 Reset draft (optional)

Reset draft discards local draft changes when you need to realign with the remote—use carefully.

Screenshot: workspace-reset-draft-modal.png

### 11.3 Publish success

After a successful push, Emprint confirms sync. Your site can update via GitHub Pages or your configured deploy flow.

Screenshot: workspace-publish-success.png

### 11.4 Imprint after publish

Imprint lists the new commit so you can see the trace you left.

Screenshot: workspace-imprint-after-publish.png

### 11.5 Return to hub

Use the title bar control to return to the Anthology hub and switch projects or create another anthology.

Screenshot: hub-returned.png

### 11.6 Remove anthology (optional)

From the hub list, Remove anthology opens a confirmation dialog. Cancel keeps the project on disk until you confirm removal.

Screenshot: hub-remove-anthology-modal.png
## Notes

Preferred installs use Homebrew or Scoop (see Install). Direct download links point to the emprint-release repository on GitHub. If a link looks out of date, check the home page or release repo for the latest version.

Source: https://github.com/devminson/emprint
Releases: https://github.com/devminson/emprint-release
