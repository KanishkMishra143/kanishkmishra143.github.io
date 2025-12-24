### Project Analysis & Guide

This document provides a comprehensive analysis of your portfolio website. It outlines the project's architecture, the technologies used, and detailed instructions for updating its content.

#### **1. Project Architecture & Technology Stack**

This is a modern, single-page portfolio website built on a robust and popular technology stack:

*   **Framework**: [Next.js](https://nextjs.org/) (v14.2.3) is the core framework. It's a React-based framework that enables features like server-side rendering and, in this case, static site generation, which is ideal for performance and SEO. The project uses the Next.js App Router, which is the latest standard for building applications.
*   **Language**: [TypeScript](https://www.typescriptlang.org/) is used instead of plain JavaScript. This adds static typing to the project, which helps catch errors during development and improves code quality and maintainability.
*   **UI Library**: [React](https://react.dev/) (v18) is used for building the user interface. The entire site is composed of React components.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) is the utility-first CSS framework used for all styling. This allows for rapid UI development directly within the JSX code, using predefined classes. The configuration for Tailwind is in `tailwind.config.ts`.
*   **Linting**: [ESLint](https://eslint.org/) is configured to ensure code consistency and catch potential issues. The configuration is in `eslint.config.mjs`.
*   **Deployment**: The project is configured for static export (`output: 'export'` in `next.config.ts`), making it perfectly suited for deployment on static hosting platforms like GitHub Pages, which is what the CI/CD pipeline in `.github/workflows/deploy.yml` is set up to do.

**Key Architectural Finding:**

The entire portfolio is rendered from a **single, monolithic file**: `src/app/page.tsx`.

While there is a `src/components` directory containing individual component files (like `About.tsx`, `Projects.tsx`, etc.), **these files are not currently used**. All the component logic, UI structure, and content (text, project data, experience history) are hardcoded directly within `src/app/page.tsx`.

This centralized structure makes the project straightforward to understand but also means that all changes will be concentrated in this one file.

#### **2. Directory & File Structure**

Here is a breakdown of the most important files and directories:

*   **`/src/app/page.tsx`**: The heart of the application. This file contains the main `Home` component, which renders the entire page, including the header, about section, projects, experience, skills, and contact information. It also defines sub-components like `ProjectCard` and `TimelineItem` and holds the data for them.
*   **`/src/app/layout.tsx`**: The root layout for the Next.js application. It defines the main HTML structure, including the `<html>` and `<body>` tags, and applies the global font.
*   **`/src/app/globals.css`**: Contains global CSS styles and Tailwind CSS imports.
*   **`/public/`**: This directory stores all static assets. Any images, SVGs, or other files you want to reference in the application must be placed here. For example, your profile picture (`profile.png`) and various logos (`adgips.svg`, `cbse.png`) are located here.
*   **`/package.json`**: Lists all project dependencies (like React, Next.js) and defines `npm` scripts for running, building, and linting the application (`npm run dev`, `npm run build`).
*   **`tailwind.config.ts`**: The configuration file for Tailwind CSS. You can customize your design system here (colors, fonts, spacing, etc.).
*   **`next.config.ts`**: The configuration file for Next.js. It's currently set up for static site generation.

#### **3. How to Update Your Portfolio**

All content modifications will happen in `src/app/page.tsx`.

##### **A. Updating Personal Information**

To change your name, title, or the introductory bio, you need to edit the JSX directly in the `<header>` and the first `<section>` (the "About" section).

*   **File to Edit**: `src/app/page.tsx`
*   **What to do**:
    1.  Find the `<header>` element.
    2.  Locate the `h1` tag with your name and the `h2` tag with your title and edit the text.
    3.  Find the section with the `h3` "About Me" and edit the paragraph (`<p>`) tags below it to change your bio.

##### **B. Adding a New Project**

Projects are rendered in the section with `id="projects"`. Each project is a `<ProjectCard />` component instance.

*   **File to Edit**: `src/app/page.tsx`
*   **What to do**:
    1.  Navigate to the `<section id="projects">`.
    2.  Inside the `div` with the class `grid`, you will see a list of `<ProjectCard />` components.
    3.  Copy an existing `<ProjectCard ... />` block and paste it to create a new project.
    4.  Update the props for the new card:
        *   `title`: The project's title.
        *   `description`: A short summary of the project.
        *   `imageUrl`: The path to the project image. **Remember to add the image file to the `/public` directory first!** For example, if you add `my-new-project.png` to `/public`, the `imageUrl` would be `"/my-new-project.png"`.
        *   `projectUrl`: The URL to the live project or demo.
        *   `githubUrl`: The URL to the GitHub repository.

**Example:**

```jsx
// Inside src/app/page.tsx, within the projects section

<ProjectCard
  title="My New Awesome Project"
  description="This is a description of my new project, built with amazing tech."
  imageUrl="/my-new-project.png" // Assumes my-new-project.png is in /public
  projectUrl="https://my-project-live-url.com"
  githubUrl="https://github.com/your-username/my-new-awesome-project"
/>
```

##### **C. Adding New Experience or Education**

Your professional and educational history is managed in the "Experience & Education" section. The data for this timeline is stored in a JavaScript array called `timelineData` right inside `src/app/page.tsx`.

*   **File to Edit**: `src/app/page.tsx`
*   **What to do**:
    1.  Locate the `const timelineData = [...]` array definition. It's defined just before the `Home` component.
    2.  This array contains a list of objects. Each object represents one item on your timeline.
    3.  To add a new item, copy an existing object, add a comma after the previous one, and paste it into the array.
    4.  Update the properties of the new object:
        *   `date`: The date or date range.
        *   `title`: Your role or the name of the degree/institution.
        *   `description`: A description of your responsibilities or achievements.
        *   `logoUrl`: The path to the company/institution logo. **Again, make sure the image file is in the `/public` directory.**
        *   `link`: An optional URL to the company or institution's website.

**Example:**

```javascript
// Inside src/app/page.tsx

const timelineData = [
  // ... existing items
  {
    date: "Jan 2025 - Present",
    title: "Lead DevOps Engineer - A New Company",
    description: "Leading the charge on cloud infrastructure and automation.",
    logoUrl: "/new-company-logo.svg", // Assumes new-company-logo.svg is in /public
    link: "https://new-company.com",
  },
];
```

The timeline will automatically re-render with your new entry in the correct order.

##### **D. Updating Your Skills**

Your skills are listed in the section with `id="skills"`. Each skill is a `<SkillPill />` component.

*   **File to Edit**: `src/app/page.tsx`
*   **What to do**:
    1.  Navigate to the `<section id="skills">`.
    2.  You will see `div` containers for "Languages", "Frameworks", and "Tools".
    3.  To add a new skill, simply copy an existing `<SkillPill name="..." />` line, paste it in the desired category, and change the `name` prop to the new skill.

**Example:**

```jsx
// Inside src/app/page.tsx, within the skills section under "Tools"

<SkillPill name="Terraform" />
<SkillPill name="Ansible" />
// Add a new skill
<SkillPill name="Pulumi" />
```

#### **4. Future Improvements & Refactoring**

While the current monolithic approach in `page.tsx` works, here are some suggestions for improving the project's structure, especially if you plan to expand it significantly:

1.  **Component Refactoring**: Move the inline components (`ProjectCard`, `TimelineItem`, `SkillPill`) from `page.tsx` into their own files within the `src/components/` directory. This would clean up `page.tsx` and make the components truly reusable.
2.  **Data Abstraction**: Instead of hardcoding project and experience data in arrays inside `page.tsx`, you could move this data into separate files. For instance, you could create a `src/data` directory with `projects.ts` and `experience.ts`. These files would export the arrays of data, which you would then import into `page.tsx`. This separates your "database" (the content) from your "view" (the JSX), which is a common best practice.
3.  **Use the Existing Components**: The files in `src/components` (e.g., `Projects.tsx`, `Experience.tsx`) are well-structured. You could refactor `page.tsx` to use them. For example, `Projects.tsx` could fetch the project data and contain the mapping logic, and then you would just use `<Projects />` in `page.tsx`.

These refactoring steps would make the codebase more modular, scalable, and easier to maintain in the long run. However, for a personal portfolio of this scale, the current single-file approach is simple and effective for quick updates.