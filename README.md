# Artisan E-commerce & Portfolio Astro Template

This project is a starter template for building a modern, responsive, and aesthetically pleasing static website for an artisan. It aims to provide a foundation for showcasing creative work, telling an artisan's story, and selling creations online.

Built with [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/), this template is designed for performance, SEO, and ease of content management.

## ✨ Features

*   **Astro-powered**: Leverage the speed and flexibility of Astro for a fast static site.
*   **Tailwind CSS**: Utilize a utility-first CSS framework for rapid UI development.
*   **Responsive Design**: Adapts to various screen sizes for a great user experience on any device.
*   **E-commerce Ready (Foundation)**: Includes basic structure for:
    *   Product listings
    *   Product detail pages (to be implemented)
    *   Shopping cart functionality (client-side, mock checkout)
    *   Mock API for checkout session creation (can be integrated with Stripe or other payment gateways via Netlify Functions or Astro API routes).
*   **Portfolio Showcase**: Easily display images and descriptions of artisan work.
*   **Content in Markdown**: (Planned/Extendable) Manage blog posts or other content using Markdown.
*   **Netlify Ready**: Configured for easy deployment on Netlify, including a basic `netlify.toml`.

## 🚀 Project Structure

The project follows a standard Astro project layout:

```
/
├── public/                   # Static assets (images, favicons, etc.)
│   └── favicon.svg
│   └── images/
├── src/
│   ├── components/           # Reusable Astro components (Header, Footer, ProductCard, etc.)
│   ├── layouts/              # Main layout structure for pages
│   ├── pages/                # Site pages (e.g., index.astro, boutique/index.astro, panier.astro)
│   │   └── api/              # API endpoints (e.g., create-checkout-session.ts)
│   ├── styles/               # Global styles
│   └── env.d.ts              # TypeScript environment declarations
├── astro.config.mjs          # Astro configuration file
├── netlify.toml              # Netlify deployment and functions configuration
├── package.json              # Project dependencies and scripts
├── tailwind.config.cjs       # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

*   **`src/pages/`**: Each `.astro` file here becomes a page on your site.
*   **`src/components/`**: Reusable UI components.
*   **`src/layouts/`**: Defines the overall structure of your pages.
*   **`public/`**: For static assets like images that don't need processing.
*   **`src/pages/api/`**: Server-side endpoints for dynamic functionality.

## 🛠️ Commands

All commands are run from the root of the project in your terminal:

| Command           | Action                                                                 |
| :---------------- | :--------------------------------------------------------------------- |
| `npm install`     | Installs project dependencies.                                         |
| `npm run dev`     | Starts the local development server (usually at `http://localhost:4321`). |
| `npm run build`   | Builds your production-ready site to the `./dist/` directory.          |
| `npm run preview` | Serves the `./dist/` directory locally to preview your build.          |
| `npm run astro ...` | Access Astro's built-in CLI commands (e.g., `astro add`, `astro check`). |

## 🎨 Customization

This template provides a starting point. You'll want to customize:

1.  **Content**: Update text, images, and product information in the `.astro` files within `src/pages/` and `src/components/`.
2.  **Styling**: Modify Tailwind CSS classes directly in your components or adjust the `tailwind.config.cjs` and `src/styles/global.css` for broader changes.
3.  **Branding**: Replace `public/favicon.svg` and update site metadata in `src/layouts/MainLayout.astro` (or individual pages).
4.  **Products**: Add your actual product data. This might involve creating data files (e.g., JSON, Markdown) or fetching from a CMS in the future.
5.  **Payment Integration**: The current checkout is a mock. You'll need to integrate a payment provider like Stripe using Astro API routes or Netlify Functions. The `src/pages/api/create-checkout-session.ts` file is a starting point for this.
6.  **Netlify Forms**: For the contact page, configure Netlify Forms by adding appropriate attributes to your HTML form.

## 💡 Next Steps & Potential Enhancements

*   Implement full Stripe integration for payments.
*   Develop product detail pages.
*   Add content management (e.g., using Markdown for blog posts or product details).
*   Integrate with a headless CMS for more complex content needs.
*   Expand Netlify Functions for more serverless capabilities (e.g., user accounts, order management).
*   Further SEO optimization.

---

Happy crafting!
