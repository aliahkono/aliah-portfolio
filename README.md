# Aliah Coleen Divinagracia — Portfolio

Personal portfolio built with **React + Vite + Tailwind CSS v4**, based on the "v3 Night" design in Figma
(navy `#232946` + pink `#EEBBC3`, Poppins).

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer (LTS is fine).

```bash
cd aliah-portfolio
npm install      # first time only
npm run dev      # then open http://localhost:5173
```

The page reloads automatically whenever you save a file.

## Where to edit things

| What | Where |
| --- | --- |
| All text, links, skills, projects, certifications | `src/data/profile.js` |
| Colors and font | `src/index.css` (the `@theme` block) |
| Layout of each section | `src/components/*.jsx` |
| Your résumé (Download CV button) | `public/resume.pdf` |
| Photos and screenshots | put them in `public/images/`, then set the path in `profile.js` (e.g. `photo: '/images/profile.jpg'`) |

Anything still in **[brackets]** is a placeholder to replace.
The ResQ "View Project" button appears once you add a `link` for it in `profile.js`.

## Project structure

```
src/
  App.jsx              page order: Header → Hero → About → Education → Projects → Skills → Contact
  index.css            Tailwind import + color tokens
  data/profile.js      all content
  hooks/useTypewriter.js   the "I am a …" typing effect
  components/
    Header.jsx  Hero.jsx  About.jsx  Education.jsx  Projects.jsx  Skills.jsx  Contact.jsx
    ui.jsx      shared pieces (SectionHeading, Chip, Photo, Button)
    Icons.jsx   inline SVG icons
```

## Put it online (free)

**Vercel (easiest):** push this folder to a GitHub repo, go to vercel.com → *Add New Project* → import the repo →
*Deploy*. Vercel detects Vite automatically.

**Netlify:** same idea — build command `npm run build`, publish directory `dist`.

To check the production build yourself: `npm run build` then `npm run preview`.
