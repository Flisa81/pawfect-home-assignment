# Pawfect Home

A responsive pet-adoption web application built from the supplied `/pets` and `/auth` API contract. Visitors can browse, search, filter, open shareable pet profiles, copy links, and contact a rescue. Authenticated admins can create, edit, and delete listings.

## Author

**Name:** Felicia Francina Baptiste
**Course:** Project Exam 2 – Resit 1 Brief
**Project:** Pet Adoption Web Application
**Delivery date:** 16 August 2026

## Links

* [Live website](https://splendid-dieffenbachia-acac49.netlify.app/)
* [GitHub repository](https://github.com/Flisa81/pawfect-home-assignment)
* [GitHub Project / Kanban](https://github.com/users/Flisa81/projects/12/views/1)
* [Figma design and prototype](https://www.figma.com/design/6nmAy1gEstXUTMg50RNZPS/Pawfect-Home-%E2%80%93-Design-System---Prototype?node-id=0-1)

## Project overview

Pawfect Home was created for a pet-adoption organisation. Its goal is to make it easy for visitors to discover adoptable animals and view detailed pet profiles.

The application also provides an administrative area where registered users can create, update and delete pet listings.

## Design

The visual identity uses a warm and trustworthy style intended to support the emotional nature of pet adoption.

- **Primary colour:** Forest green `#345B4C`
- **Secondary colour:** Coral `#E98064`
- **Background colour:** Cream `#FAF7F0`
- **Heading font:** Fraunces
- **Body font:** DM Sans

The Figma file includes a style guide, reusable components and high-fidelity desktop and mobile designs.


## Highlights

- Responsive multi-page experience for mobile and desktop
- Accessible landmarks, labels, focus handling, reduced-motion support, and meaningful image text
- Search by name, breed, or location; filter by species and size
- Shareable `/pet/?id=…` detail URLs with clipboard action
- Protected create/edit routes and login/register flow
- Full CRUD against either the official REST API or a built-in local demo store
- Safe output encoding, URL validation, native form validation, loading/error/empty states
- Netlify configuration and zero-backend demo mode

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. In demo mode, any valid email and password of 8+ characters can log in. Data is stored only in the browser's `localStorage`; the login session is kept in `sessionStorage`.

## Connect the official API

Edit `public/config.js`:

```js
window.PAWFECT_CONFIG = {
  apiBaseUrl: "https://your-api.example.com",
  apiKey: ""
};
```

The client uses these routes exactly: `GET/POST /pets`, `GET/PUT/DELETE /pets/:id`, `POST /auth/login`, and `POST /auth/register`. It expects `{ data, meta }` response envelopes and a login response containing `data.accessToken`. If the official API uses a different key header or registration payload, adjust only `request()` or `authenticate()` in `src/api.js`.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build |
| `npm test` | Run automated data-contract tests |

## Pages

| Route | Story |
| --- | --- |
| `/` | Browse, search, filter, and open pets |
| `/pet/?id=…` | View details and copy a shareable link |
| `/pet/create.html` | Add a pet (admin only) |
| `/pet/edit.html?id=…` | Update or delete a pet (admin only) |
| `/account/login.html` | Log in |
| `/account/register.html` | Register |

## Deployment

### Netlify

Import the repository. Netlify reads `netlify.toml`, runs `npm run build`, and publishes `dist`.

### GitHub Pages

Run `npm run build` and publish `dist`. For a repository subpath, add Vite's `base` option and replace root-relative links with that base.

## Project evidence

- `docs/STYLE_GUIDE.md` — design system and reusable component rules
- `docs/PROJECT_PLAN.md` — ready-to-import Kanban backlog and delivery roadmap
- `docs/TESTING.md` — manual user-story, accessibility, validation, and Lighthouse checklist
- `docs/API_CONTRACT.md` — endpoint and payload mapping
