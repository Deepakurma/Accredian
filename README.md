# Accredian Enterprise Landing Page Clone

A responsive recreation of the Accredian Enterprise landing page built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The project focuses on clean UI, reusable components, responsive design, and maintainable code structure.

## Live Demo

**Vercel:** https://accredian-eight-ivory.vercel.app

## GitHub Repository

https://github.com/Deepakurma/Accredian

---

# Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Next.js API Routes

---

# Features

- Fully responsive design (Desktop, Tablet & Mobile)
- Reusable React components
- Clean and organized project structure
- Responsive navigation bar
- Landing page sections recreated
- Footer
- Smooth scrolling/navigation
- Mock API Route integration

---

# Project Structure

```
app/
├── api/
├── layout.tsx
├── page.tsx

components/
├── layout/
├── sections/
├── ui/

data/
├── site.ts
```

---

# Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Deepakurma/Accredian
```

### 2. Navigate into the project

```bash
cd Accredian
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

# Approach Taken

The project was developed using a component-based architecture to keep the code modular, reusable, and easy to maintain.

The landing page was broken down into reusable sections such as the Header, Hero, FAQ, Testimonials, and Various others. Each section is implemented as an independent component.

Responsive layouts were built using Tailwind CSS utility classes, ensuring the page adapts well across desktop, tablet, and mobile devices.

For the bonus requirement, a lead capture form submits data to a Next.js API Route which upon submission shows a succes message, demonstrating basic client-server interaction.

---

# AI Usage

AI tools were used during development to assist with:

- Brainstorming component structure
- Debugging issues
- Improving code readability

---

# Improvements With More Time

Given additional development time, I would:

- Improve accessibility (ARIA labels, keyboard navigation)
- Add animations and subtle page transitions
- Optimize images and loading performance
- Improve SEO with additional metadata
- Implementing and connecting live api
- Further polish the UI

---

# Deployment

The application is deployed on **Vercel**.
