# Developer Portfolio (React + Vite)

Modern, responsive, animated developer portfolio built with:

- React (Vite)
- Tailwind CSS
- Framer Motion
- React Icons
- EmailJS (contact form)

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customize content

Update your name, links, projects, skills, education, etc. in:

- `src/data.js`

Replace placeholder assets:

- `src/assets/profile.svg`
- `src/assets/project-*.svg`

## Resume download / preview

The resume button expects a file at:

- `public/resume.pdf`

Replace the placeholder `public/resume.pdf` with your real resume.

## EmailJS setup (contact form)

1. Create an EmailJS account and add an Email Service + Email Template.
2. Create a `.env` file in the project root (copy from `.env.example`):

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_PORTFOLIO_EMAIL=you@example.com
VITE_PORTFOLIO_LOCATION=Your City, Country
```

3. In EmailJS template variables, use:

- `from_name`
- `reply_to`
- `message`

Then restart the dev server.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
