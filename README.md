# Hari Masoor Portfolio

A modern, responsive portfolio website built with Next.js, React, and TypeScript.

## Project Structure

This project is structured as follows:

- `app/`: Main application code
  - `components/`: React components for each section of the portfolio
    - `Hero.tsx`: Home/Hero section
    - `About.tsx`: About section
    - `Skills.tsx`: Skills and technologies section
    - `Experience.tsx`: Experience and education section
    - `Projects.tsx`: Projects/Work showcase
    - `Contact.tsx`: Contact form and information
    - `Footer.tsx`: Page footer
    - `Layout.tsx`: Layout wrapper with navigation
  - `page.tsx`: Main page component that integrates all sections
  - `layout.tsx`: Root layout with metadata and global scripts
  - `globals.css`: Global CSS styles
  - `jquery-shim.ts`: jQuery compatibility shim
- `public/`: Static assets
  - `css/`: CSS stylesheets
  - `images/`: Image assets
  - `js/`: JavaScript files
    - `preloader.js`: Preloader management script

## Technology Stack

- **Next.js**: React framework for server-rendered applications
- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Bootstrap**: CSS framework for responsive design
- **jQuery**: Used for certain animations and effects
- **Font Awesome**: Icon library

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```
npm run build
```

## Deployment

This site can be deployed to various platforms such as Vercel, Netlify, or any other hosting service that supports Next.js applications.

## License

All rights reserved.

## Features

- Responsive design
- Modern React-based frontend with Next.js
- Fast page loads with server-side rendering
- Optimized for SEO

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Acknowledgments

* Original design and content by Hari Masoor

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
