# AI/ML Engineer Personal Portfolio

**Manan Lall's professional portfolio** — a modern, AI-focused showcase of projects, expertise, and skills built with Next.js, Tailwind CSS, and Radix UI. Featuring a dark-themed hero section, featured projects, industry expertise display, and seamless theme switching.

🌐 **Live Demo:** https://personal-portfolio-lac-tau-34.vercel.app/

---

## 🖼️ Product Tour

A quick look at the portfolio experience — from the hero landing to projects and expertise showcase.

### Landing Page
Clean, gradient-rich hero section introducing your AI/ML expertise and featured work.

### Featured Projects Showcase
Dynamic project cards with hover effects, displaying your best work (Splitr, SensAI, JobGuard AI).

### Expertise Section
Highlight your key skills: AI & ML, NLP & LLMs, Full-Stack Development, and Secure Authentication.

---

## 🎯 What This Project Does

This portfolio is a personal brand hub that helps you:

- **Showcase your work** — featured projects with GitHub links and descriptions
- **Highlight expertise** — display your key skills and technical competencies
- **Control your narrative** — easily edit content via simple JavaScript data files
- **Professional presence** — modern design with dark theme, animations, and responsive layouts
- **Theme flexibility** — seamless light/dark mode switching for visitor preferences

---

## ✨ Core Features

🎨 **Modern Dark Design** — Gradient backgrounds, glassmorphism, and smooth animations  
📱 **Fully Responsive** — Mobile, tablet, and desktop-optimized layouts  
🌙 **Light/Dark Theme Toggle** — Theme persistence with `next-themes`  
⚡ **Fast & Optimized** — Built with Next.js App Router for performance  
🔗 **Dynamic Routing** — Support for dynamic project detail pages  
📊 **Accessibility** — Radix UI primitives for accessible components  
✏️ **Easy Content Updates** — Edit projects, expertise, and contact via `Data/` files  
🎯 **SEO-Ready** — Metadata and structured markup included  

---

## 👥 Who Is This For?

Great for:

- **AI/ML Engineers & Data Scientists** — showcase ML projects and AI expertise
- **Full-Stack Developers** — display diverse technical projects
- **Portfolio Building** — learn Next.js App Router + Tailwind CSS v4 patterns
- **Customizable Showcases** — adapt the template for any tech professional

---

## 🛠 Tech Stack

### Frontend
- **Next.js 16** — App Router + React Server Components
- **React 19** — Modern UI library
- **Tailwind CSS v4** — Utility-first styling
- **tw-animate-css** — Extended animations
- **Radix UI** — Accessible component primitives
- **lucide-react** — Beautiful icons
- **next-themes** — Theme management (light/dark/system)
- **clsx + tailwind-merge** — Utility class composition

### Development
- **ESLint** — Code quality linting
- **Next.js config** — Optimized for performance

### Deployment
- **Vercel** — Recommended hosting (or any Node.js host)

---

## 📁 Project Structure

```text
portfolio/
├── app/
│   ├── layout.js              # Root layout + navbar + ThemeProvider
│   ├── page.jsx               # Home page (hero, projects, expertise, contact)
│   ├── toggle.jsx             # Theme toggle component
│   ├── globals.css            # Global styles + Tailwind v4 config
│   ├── about/
│   │   └── page.jsx           # About page (placeholder)
│   ├── blog/
│   │   └── page.jsx           # Blog page (placeholder)
│   ├── contact/
│   │   └── page.jsx           # Contact page (placeholder)
│   ├── projects/
│   │   ├── page.jsx           # Projects listing page
│   │   └── [slug]/
│   │       └── page.jsx       # Dynamic project detail page
│   └── favicon.ico
│
├── components/
│   ├── theme-provider.jsx     # next-themes wrapper
│   └── ui/                    # shadcn-style UI components
│       ├── avatar.jsx
│       ├── badge.jsx
│       ├── button.jsx
│       ├── card.jsx
│       ├── dropdown-menu.jsx
│       ├── field.jsx
│       ├── input.jsx
│       ├── label.jsx
│       ├── select.jsx
│       ├── separator.jsx
│       ├── sheet.jsx
│       ├── skeleton.jsx
│       └── textarea.jsx
│
├── Data/
│   ├── projects.js            # Featured projects (Splitr, SensAI, JobGuard)
│   ├── expertise.js           # Skills/expertise areas
│   ├── contact.js             # Contact information
│   ├── about.js               # About page content
│   ├── blog.js                # Blog entries
│   ├── case_studies.js        # Detailed case studies
│   └── draft.js               # Draft content
│
├── lib/
│   └── utils.js               # cn() helper (clsx + tailwind-merge)
│
├── public/
│   ├── final.png              # Hero image
│   ├── projects/              # Project icons
│   │   ├── splitr.png
│   │   ├── sensai.png
│   │   └── jobguard.png
│   ├── expertise/             # Expertise icons
│   │   ├── AIML.png
│   │   ├── NLP.png
│   │   ├── Full.png
│   │   └── Auth.png
│   ├── contact/               # Contact icons
│   └── Manan_Lall_CV.pdf      # Resume
│
├── jsconfig.json              # Path aliases (@/)
├── next.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── components.json            # Component library config
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+**
- **npm** (or yarn/pnpm)

### 1. Clone & Install

```bash
# Clone the repo (or use as template)
git clone <repo-url>
cd portfolio

# Install dependencies
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

### 4. Lint

```bash
npm run lint
```

---

## 📝 Editing Content

All portfolio content is managed via `Data/` JavaScript files. No database required.

### Featured Projects

**File:** `Data/projects.js`

```javascript
export const projects = [
  {
    icon: "/projects/splitr.png",
    title: "Splitr",
    info: "Expense Manager",
    description: "A smart, intuitive, modern expense-sharing app...",
    link: "https://github.com/Manan0p/splitr",
  },
  // Add more projects...
];
```

**Icons location:** `public/projects/`

### Expertise / Skills

**File:** `Data/expertise.js`

```javascript
export const expertise = [
  {
    logo: "/expertise/AIML.png",
    title: "AI & ML",
  },
  // Add more skills...
];
```

**Icons location:** `public/expertise/`

### Contact Links

**File:** `Data/contact.js`

Update email, social links, and contact info here.

### Branding Assets

- **Navbar logo:** `public/brand-mark.svg`
- **Hero image:** `public/final.png`
- **Resume download:** `public/Manan_Lall_CV.pdf`

---

## 🌙 Theming (Light/Dark/System)

- **Provider:** `components/theme-provider.jsx` (wraps `next-themes`)
- **Configuration:** `app/layout.js` (class-based theming)
- **Styles:** `app/globals.css` (Tailwind v4 theme tokens)

The theme toggle component (`app/toggle.jsx`) is available in the navbar. Visitor preference is persisted to localStorage.

---

## 🗺️ Routes

Currently implemented:

| Route | File | Status |
|-------|------|--------|
| `/` | `app/page.jsx` | ✅ Complete |
| `/projects` | `app/projects/page.jsx` | ✅ Complete |
| `/projects/[slug]` | `app/projects/[slug]/page.jsx` | ✅ Dynamic routing |
| `/about` | `app/about/page.jsx` | 📝 Placeholder |
| `/blog` | `app/blog/page.jsx` | 📝 Placeholder |
| `/contact` | `app/contact/page.jsx` | 📝 Placeholder |

**Note:** Complete the placeholder pages by filling in `Data/about.js`, `Data/blog.js`, and `Data/contact.js`.

---

## 🔗 Path Aliases

This project uses `@/` path aliases (configured in `jsconfig.json`):

```javascript
// Instead of: import Button from '../../../components/ui/button'
import { Button } from "@/components/ui/button";
import { projects } from "@/Data/projects";
```

---

## 📊 Customization Tips

### Change Hero Title
- Edit `app/page.jsx` → hero section h2 tag

### Update Featured Projects
- Edit `Data/projects.js`
- Add project icon to `public/projects/`

### Modify Colors & Theme
- `app/globals.css` — adjust Tailwind theme colors
- `tailwind.config.mjs` — extend Tailwind config

### Add New Pages
- Create folder under `app/` (e.g., `app/portfolio/`)
- Add `page.jsx` inside
- Update navbar links in `app/layout.js`

---

## 🚢 Deployment
https://personal-portfolio-lac-tau-34.vercel.app/

### Vercel (Recommended)

```bash
# Push to GitHub, then:
# 1. Import repo on vercel.com
# 2. Vercel auto-detects Next.js
# 3. Deploy!
```

### Other Hosts

```bash
npm run build
npm run start
```

Works on any Node.js hosting (Railway, Render, Heroku, etc.).

---

## 📋 Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

---

## 🐛 Troubleshooting

| Issue | Likely Cause | Fix |
|-------|--------------|-----|
| **404 on navbar links** | Routes don't exist | Create `app/about/page.jsx`, `app/blog/page.jsx`, etc. |
| **Images not showing** | Wrong public path | Check `public/` folder, ensure paths start with `/` |
| **Theme not toggling** | Theme toggle hidden | Uncomment `ModeToggle` in `app/layout.js` navbar |
| **Case-sensitive errors** | `Data/` vs `data/` | Maintain capitalization in imports (Linux is case-sensitive) |
| **Styling issues** | Tailwind not building | Restart dev server: `npm run dev` |

---

## 🔐 Security Notes

✅ **No sensitive data** — this is a static portfolio  
✅ **No backend required** — data is hardcoded in `Data/` files  
✅ **Safe to deploy** — suitable for public GitHub/Vercel  

---

## 🤝 Contributing

Have ideas to improve the portfolio? Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** — see the LICENSE file for details.

Copyright © 2026 Manan Lall

---

## 👨‍💻 Author

**Built by Manan Lall**  
AI/ML Engineer | Full-Stack Developer  
[GitHub](https://github.com/Manan0p) | [Portfolio](https://personal-portfolio-lac-tau-34.vercel.app/)

---

## 🙏 Acknowledgments

- **Next.js** — amazing React framework
- **Tailwind CSS** — utility-first styling
- **Radix UI** — accessible component primitives
- **shadcn/ui** — beautiful component patterns
- **next-themes** — seamless theme switching
- **Vercel** — hosting & deployment

---

**Ready to showcase your work? Start editing `Data/` files and deploy! 🚀**
