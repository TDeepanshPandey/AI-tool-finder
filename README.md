# AI Tool Finder

AI Tool Finder is a static, responsive landing page for discovering useful AI tools.

## Features

- Hero section with a clear call-to-action
- Searchable and filterable AI tool list
- Categories: Writing, Coding, Image Generation, Productivity, Research, Video
- 12 included example tools
- Fully static (HTML, CSS, JavaScript only)

## Run locally

No build step is needed.

- Open `index.html` directly in a browser, or
- Serve the repository with any static file server.

## GitHub Pages deployment

This repository includes `.github/workflows/deploy.yml` to deploy to GitHub Pages.

How it works:

1. On pushes to `main` (or manually via workflow dispatch), GitHub Actions runs.
2. The workflow uploads the repository root as a static artifact.
3. GitHub Pages deploys the artifact and publishes the site.

Use repository **Settings → Pages** to ensure **GitHub Actions** is the selected source.
