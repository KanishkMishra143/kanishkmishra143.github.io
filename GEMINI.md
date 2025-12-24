# Gemini Code Assistant Context

This document provides context for the Gemini Code Assistant to understand the project structure, conventions, and goals.

## Project Overview

This is a personal portfolio website for Kanishk Kumar Mishra, a DevOps Engineer. It is a single-page application built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/). The styling is done using [Tailwind CSS](https://tailwindcss.com/).

The portfolio is statically generated and deployed to GitHub Pages using a GitHub Actions workflow. The main goal is to showcase skills, experience, and projects in a clean, modern, and responsive design.

## Building and Running

The project uses `npm` as the package manager. The following scripts are available in `package.json`:

*   **`npm run dev`**: Starts the development server with Turbopack.
*   **`npm run build`**: Builds the application for production with Turbopack.
*   **`npm run start`**: Starts the production server.
*   **`npm run lint`**: Lints the codebase using ESLint.

### To run the project locally:

1.  Install dependencies: `npm install`
2.  Start the development server: `npm run dev`
3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Conventions

*   **Framework**: Next.js with the App Router.
*   **Language**: TypeScript.
*   **Styling**: Tailwind CSS with a custom theme defined in `tailwind.config.ts`.
*   **Components**: Reusable components are located in `src/components`.
*   **Static Assets**: Public assets like images and SVGs are in the `public` directory.
*   **Deployment**: The site is deployed via a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. The `next.config.ts` is configured with `output: 'export'` for a static build compatible with GitHub Pages.
*   **Linting**: ESLint is configured for code quality. Run `npm run lint` to check for issues.
