# Portfolio V2

My personal portfolio site: about me, academics, projects, resume and a contact form.

**Live:** https://nikhil-mathews.vercel.app/

## Pages

| Route | What's there |
| --- | --- |
| `/` | Landing page with hero section, animated text and particle background |
| `/about` | Background, skills and certifications |
| `/academics` | Education and academic work |
| `/projects` | Searchable, filterable project cards (AI, web, data, IoT) |
| `/resume` | Web version of my resume, with a printable layout. A PDF copy is in `public/resume.pdf` |
| `/contact` | Contact form that sends me an email |

## Tech stack

- **Framework:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, shadcn/ui (Radix UI primitives)
- **Animation:** Framer Motion, tsParticles
- **Routing and data:** React Router, TanStack Query
- **Forms and email:** React Hook Form, Zod, EmailJS
- **Hosting and analytics:** Vercel, Vercel Analytics and Speed Insights

## Getting started

### Prerequisites

- Node.js 20.19+ (required by Vite 7) and npm

### Run locally

```bash
git clone https://github.com/Mattzoki/Portfolio-V2.git
cd Portfolio-V2
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run build:dev` | Development-mode build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── contact/     # contact form, header and info
│   └── ...          # Navbar, HeroSection, ProjectCard, SkillCard, etc.
├── pages/           # Index, About, Academics, Projects, Resume, Contact, NotFound
├── hooks/
└── lib/
public/              # favicon, resume.pdf, uploaded images
```

## Customising

- **Projects:** edit the project list in `src/pages/Projects.tsx`.
- **Resume:** update `src/pages/Resume.tsx` and replace `public/resume.pdf`.
- **Contact form:** it uses [EmailJS](https://www.emailjs.com/). If you fork this, replace the service ID, template ID and public key in `src/components/contact/ContactForm.tsx` with your own.

## Deployment

Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` so client-side routing works on refresh.

## License

Personal portfolio. Feel free to take inspiration, but please don't copy my content or personal details.
