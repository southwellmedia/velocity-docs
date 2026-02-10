<p align="center">
  <img src="src/assets/logomark.svg" alt="Velocity" width="60" />
</p>

<p align="center">
  <strong>Velocity Documentation</strong> — Official docs for the Velocity Astro 6 starterkit.
</p>

<p align="center">
  <a href="https://velocity-docs-two.vercel.app">Live Site</a> &middot;
  <a href="https://github.com/southwellmedia/velocity">Velocity Repo</a> &middot;
  <a href="https://github.com/southwellmedia/create-velocity-astro">CLI Tool</a>
</p>

---

## About

Documentation site for [Velocity](https://github.com/southwellmedia/velocity), built with [Starlight](https://starlight.astro.build) (Astro's documentation framework).

### Sections

| Section | Description |
|---------|-------------|
| **Getting Started** | Installation, prerequisites, project structure |
| **Components** | 55 components across UI, layout, patterns, blog, landing, and SEO |
| **Design System** | Three-tier token architecture, colors, dark mode, Tailwind utilities |
| **Customization** | Brand colors, themes, adding components/routes/collections |
| **Configuration** | Site config, environment variables, routing |
| **Content Management** | Blog posts, authors, FAQs, pages |
| **Layouts** | Base, Page, Blog, and Landing layouts |
| **SEO** | Meta tags, OG images, structured data, sitemap |
| **CLI** | create-velocity-astro usage, flags, i18n |
| **API** | Contact and newsletter endpoints |
| **Deployment** | Vercel, Netlify, Cloudflare Pages |
| **Reference** | Changelog, quick reference |
| **Upgrade Guides** | Step-by-step migration between releases |

## Development

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:4321` to preview the docs locally.

## Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `dist/` |
| `pnpm preview` | Preview production build locally |

## Adding Documentation

Docs are `.mdx` files in `src/content/docs/`. Each file becomes a route based on its path. Starlight handles navigation, search (Pagefind), and theming automatically.

```
src/content/docs/
├── getting-started/
├── components/
├── design-system/
├── customization/
├── ...
└── index.mdx
```

## Tech Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) — Documentation framework
- [Vercel](https://vercel.com) — Hosting and deployment
- [Pagefind](https://pagefind.app) — Client-side search

## Related Repositories

- [velocity](https://github.com/southwellmedia/velocity) — The starterkit itself
- [create-velocity-astro](https://github.com/southwellmedia/create-velocity-astro) — CLI scaffolding tool

---

**Built & maintained by [Southwell Media](https://southwellmedia.com)**
