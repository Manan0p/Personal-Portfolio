# Portfolio (Next.js)

A personal portfolio site built with Next.js App Router, Tailwind CSS v4, and a shadcn/ui-style component setup (Radix UI primitives + utility classes). Content for projects/skills/contact is driven from simple JS data files.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS v4 + `tw-animate-css`
- Radix UI primitives (Dropdown, Dialog, Avatar, etc.)
- `next-themes` for light/dark/system themes
- `lucide-react` icons
- ESLint (`eslint-config-next` Core Web Vitals)

## Getting Started

### Prerequisites

- Node.js (recommend: current LTS)
- npm (or your preferred package manager)

### Install

```bash
npm install
```

### Run (dev)

```bash
npm run dev
```

Open http://localhost:3000

### Build / start (production)

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

High-level layout:

```text
app/
	layout.js          # Global layout + navbar + ThemeProvider
	page.jsx           # Home page (projects/skills/contact sections)
	projects/page.jsx  # /projects page (currently a header/placeholder)
	globals.css        # Tailwind v4 + theme tokens + utilities
	toggle.jsx         # Theme toggle component (not currently mounted)

Data/
	projects.js        # Featured projects list
	expertise.js       # Skills/expertise list
	contact.js         # Contact links

components/
	theme-provider.jsx # next-themes wrapper
	ui/                # shadcn-style UI components (Button/Card/etc.)

lib/
	utils.js           # cn() helper (clsx + tailwind-merge)

public/
	final.png          # Hero image
	brand-mark.svg     # Navbar logo
	Manan_Lall_CV.pdf  # Resume download
	projects/          # Project icons used by Data/projects.js
	expertise/         # Expertise icons used by Data/expertise.js
	contact/           # Contact icons used by Data/contact.js
```

## Editing Content

The home page pulls its content from the files in `Data/`.

### Featured projects

- Edit: `Data/projects.js`
- Icons live in: `public/projects/`

Each project object supports:

- `title`: display name
- `info`: short subtitle
- `description`: longer text
- `icon`: path under `public/` (example: `/projects/splitr.png`)
- `link`: external URL

### Expertise / skills

- Edit: `Data/expertise.js`
- Icons live in: `public/expertise/`

### Contact links

- Edit: `Data/contact.js`
- Icons live in: `public/contact/`

### Branding + resume

- Navbar logo: `public/brand-mark.svg`
- Hero image: `public/final.png`
- Resume download: `public/Manan_Lall_CV.pdf`

## Theming (Light/Dark/System)

- Theme provider: `components/theme-provider.jsx` (wraps `next-themes`)
- The app is configured to use class-based theming (`attribute="class"`) from `app/layout.js`.
- Theme tokens and Tailwind v4 setup live in `app/globals.css`.

There is a theme toggle component in `app/toggle.jsx`, but it is currently not rendered because it’s commented out in the navbar.

To enable it:

1. Open `app/layout.js`
2. Uncomment the `ModeToggle` usage in the header

## Routes

Currently implemented:

- `/` (home): `app/page.jsx`
- `/projects`: `app/projects/page.jsx`

Note: the navbar links to `/blog`, `/about`, and `/contact`, but those routes are not present yet (they will 404 until you add `app/blog/page.jsx`, `app/about/page.jsx`, etc.).

## Path Aliases

This repo uses the `@/*` alias (see `jsconfig.json`). Example imports:

- `@/components/ui/button`
- `@/Data/projects`

## Deployment

This is a standard Next.js app:

- Build: `npm run build`
- Run: `npm run start`

Works well on Vercel or any Node host that can run Next.js.

## Troubleshooting

- **Case-sensitive hosts (Linux/Vercel):** the `Data/` folder name is capitalized and imports use `@/Data/...`. Keep the casing consistent.
- **404 on navbar links:** create the missing routes under `app/` (e.g., `app/about/page.jsx`).
- **Public assets:** anything referenced as `/...` must exist under `public/`.
