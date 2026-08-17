# What Dessert Today?

An interactive, top-down dessert table built with React, TypeScript, Vite/vinext, CSS, and Motion.

Roll the blue 3D dice to randomly reveal one of 24 desserts. The experience includes a rotating ceramic plate, animated dessert reveal, responsive layout, and transparent dessert assets.

## Requirements

- Node.js 22.13 or newer
- pnpm recommended

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local URL printed in the terminal.

## Build

```bash
pnpm build
```

## Main files

- `app/page.tsx` — interaction state and reveal timeline
- `app/globals.css` — complete tabletop art direction and responsive styling
- `app/components/` — plate, dice, utensils, and dessert display
- `app/data/desserts.ts` — 24-item dessert database
- `public/desserts/` — transparent dessert images

## Upload to GitHub

1. Create an empty GitHub repository.
2. Extract this ZIP.
3. Upload all extracted files and folders to the repository root.
4. Commit the files.

## Deployment note

GitHub can store this source code, but the current vinext/Cloudflare Worker project is not a static GitHub Pages site. To publish it from GitHub, connect the repository to a compatible hosting service or adapt it to a static Vite build first.
