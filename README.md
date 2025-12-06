# Mohamed Abdel Fatah — Developer Portfolio

A modern, responsive portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. The site showcases the work, skills, and experience of **Mohamed Abdel Fatah**, a Cairo-based Fullstack Developer focusing on polished UI/UX, robust backends, and production-ready workflows.

---

## 🚀 Overview

This portfolio highlights personal projects, professional experience, and skills in web development. It is designed for performance, accessibility, and a great user experience across devices.

---

## ✨ Features

- **Hero & About** sections with smooth animations and theming
- **Projects** showcase with live demos, GitHub links, and detailed stacks
- **Skills grid** fed from structured data (`src/services/data/skills-icons.tsx`)
- **Experience timeline** backed by `src/services/data/personalData.ts`
- **Contact form** with EmailJS integration and form validation
- **Dark/Light Theme Toggle** powered by custom ThemeProvider
- **Responsive Layout** optimized for desktop and mobile

---

## 🛠️ Tech Stack

- [Next.js 15 App Router](https://nextjs.org/) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) with strict typing
- [Tailwind CSS 4](https://tailwindcss.com/) & CSS variables
- [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/) primitives
- [Lucide React](https://lucide.dev/) iconography
- [EmailJS](https://www.emailjs.com/) + [Zod](https://zod.dev/) for the contact workflow

---

## 📦 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Tah5721312/portfolio.git
cd portfolio
pnpm install # or npm install / yarn install
```

Run the development server:

```bash
pnpm dev # or npm run dev / yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Create a `.env.local` with the values you use in development or in Vercel:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

---

## 🗂️ Project Structure

```
├── public/               # Static assets (images, icons)
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # UI and layout components
│   ├── lib/              # Utilities
│   ├── services/data/    # Data (projects, skills, personal info)
│   └── ...
├── package.json
└── README.md
```

---

## 🏆 Projects Showcase

### [Clinic-app](https://clinic-app-prisma-postgre.vercel.app) — [GitHub](https://github.com/Tah5721312/clinic-app-prisma-postgre)
Full clinic management experience built with Next.js 14 App Router, React 18, and TypeScript. Includes Tailwind CSS 3 UI, Jest tests, ESLint + Prettier formatting, Husky hooks, GitHub Actions, sitemap generation, and OG helpers for SEO-ready deployments.

### [Inventory Platform](https://inventory-prisma-postgre.vercel.app/) — [GitHub](https://github.com/Tah5721312/inventory-prisma-postgre)
An end-to-end inventory system using Next.js 15.4.3 + React 19.1.0 with Tailwind CSS 4.1.11 and Lucide icons on the frontend. The backend stack features PostgreSQL, Prisma 5.22.0, Next.js API routes, NextAuth.js 5.0, CASL, bcryptjs, and supporting libraries like Zod, Axios, and React Toastify.

---

## 🧠 Skills Snapshot

Data-driven skills live in `src/services/data/skills-icons.tsx`. Highlights include:

- **Frontend:** HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Material UI
- **Backend:** Node.js, Express.js, RESTful APIs, Zod validation
- **Databases:** PostgreSQL, MongoDB, Oracle, Prisma ORM
- **Tools & Platforms:** Git, GitHub, Vercel, Postman

---

## 💼 Experience

- **Information Technology Institute (ITI)** — *Fullstack Developer*  
  *Sept 2022 – Present*  
  Building production-ready applications, integrating APIs, and delivering polished UI/UX for real clients and training programs.

---

## 📬 Contact

- **Name:** Mohamed Abdel Fatah
- **Role:** Fullstack Developer
- **Location:** Cairo, Egypt
- **Email:** Tah5721312@gmail.com
- **LinkedIn:** [linkedin.com/in/mohamed-abdel-fattah-a09451206](https://www.linkedin.com/in/mohamed-abdel-fattah-a09451206/)
- **GitHub:** [github.com/Tah5721312](https://github.com/Tah5721312)
- **Phone:** +20 150 009 5053

---

## 🙏 Credits

- Designed & implemented by Mohamed Abdel Fatah
- Icons via [Lucide](https://lucide.dev/) & [Iconsax](https://iconsax.io/)
- Built following modern portfolio best practices

---

## 📄 License

This project is licensed under the MIT License.
