# Emprint—start from the beginning, step by step

> No coding background is needed. Follow the screens in order: install the app, prepare Node.js and Git, complete the setup wizard, create an anthology, work in the workspace, then publish when ready. Each step below includes a screenshot from the app.

- HTML (with screenshots): https://devminson.github.io/emprint-home/document/
- Last updated: 2026-05-19
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

Creating a Column anthology opens the workspace tour in the next section; other formats use their own sidebar sections.

### 5.1 Anthology list

The hub lists anthologies you have registered. Use Open to enter an existing site or Create new anthology in the sidebar.

Screenshot: hub-anthologies.png

### 5.2 Create a new anthology

The create panel asks for format (Column, Memoir, Dictionary, Fragments, or Book), title, description, and GitHub repository details. The screens below follow a Column (blog-style) workflow.

Screenshot: hub-create-panel.png

## 6. Inside the workspace (Column)

A Column anthology workspace has six sections in the sidebar—Posts, Drafts, Assets, Design, Imprint, and Settings.

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

## 7. Publish and return to hub

When writing is ready, Publish pushes commits to GitHub; Imprint records the trace.

Git must be installed and GitHub connected. Publishing is per anthology repository.

### 7.1 Publish dialog

From the sidebar, Publish opens a dialog to confirm message and target branch before pushing to GitHub.

Screenshot: workspace-publish-dialog.png

### 7.2 Reset draft (optional)

Reset draft discards local draft changes when you need to realign with the remote—use carefully.

Screenshot: workspace-reset-draft-modal.png

### 7.3 Publish success

After a successful push, Emprint confirms sync. Your site can update via GitHub Pages or your configured deploy flow.

Screenshot: workspace-publish-success.png

### 7.4 Imprint after publish

Imprint lists the new commit so you can see the trace you left.

Screenshot: workspace-imprint-after-publish.png

### 7.5 Return to hub

Use the title bar control to return to the Anthology hub and switch projects or create another anthology.

Screenshot: hub-returned.png
## Notes

Preferred installs use Homebrew or Scoop (see Install). Direct download links point to the emprint-release repository on GitHub. If a link looks out of date, check the home page or release repo for the latest version.

Source: https://github.com/devminson/emprint
Releases: https://github.com/devminson/emprint-release
