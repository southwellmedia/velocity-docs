// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.deployvelocity.com",
  integrations: [
    starlight({
      title: "Velocity",
      description: "Modern Astro Starterkit built on Astro 6 + Tailwind CSS v4",

      logo: {
        light: "./src/assets/branding/logo-full.svg",
        dark: "./src/assets/branding/logo-full-dark.svg",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/southwellmedia/velocity",
        },
      ],

      editLink: {
        baseUrl: "https://github.com/southwellmedia/velocity-docs/edit/main/",
      },

      customCss: ["./src/styles/custom.css"],

      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Introduction", slug: "index" },
            { label: "Quick Start", slug: "getting-started" },
            { label: "Prerequisites", slug: "getting-started/prerequisites" },
            {
              label: "Project Structure",
              slug: "getting-started/project-structure",
            },
            { label: "Scripts", slug: "getting-started/scripts" },
          ],
        },
        {
          label: "CLI Tool",
          badge: { text: "New", variant: "success" },
          collapsed: false,
          autogenerate: { directory: "cli" },
        },
        {
          label: "Configuration",
          collapsed: false,
          autogenerate: { directory: "configuration" },
        },
        {
          label: "Design System",
          collapsed: false,
          autogenerate: { directory: "design-system" },
        },
        {
          label: "Layouts",
          collapsed: true,
          autogenerate: { directory: "layouts" },
        },
        {
          label: "Components",
          collapsed: true,
          items: [
            { label: "Overview", slug: "components" },
            {
              label: "UI Components",
              collapsed: true,
              autogenerate: { directory: "components/ui" },
            },
            {
              label: "Layout Components",
              collapsed: true,
              autogenerate: { directory: "components/layout" },
            },
            { label: "Pattern Components", slug: "components/patterns" },
            { label: "Blog Components", slug: "components/blog" },
            { label: "Landing Components", slug: "components/landing" },
            { label: "SEO Components", slug: "components/seo-components" },
          ],
        },
        {
          label: "Content Management",
          collapsed: true,
          autogenerate: { directory: "content-management" },
        },
        { label: "SEO", collapsed: true, autogenerate: { directory: "seo" } },
        {
          label: "API Routes",
          collapsed: true,
          autogenerate: { directory: "api" },
        },
        {
          label: "Deployment",
          collapsed: true,
          autogenerate: { directory: "deployment" },
        },
        {
          label: "Customization",
          collapsed: true,
          autogenerate: { directory: "customization" },
        },
        { label: "Troubleshooting", slug: "troubleshooting" },
        {
          label: "Reference",
          collapsed: true,
          autogenerate: { directory: "reference" },
        },
      ],

      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      lastUpdated: true,
      pagination: true,
    }),
  ],
});
