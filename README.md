# Pawfect Home

A responsive pet-adoption web application based on the supplied `/pets` and `/auth` API contract. Visitors can browse, search, filter, open shareable pet profiles, copy links and contact a rescue. The delivered version provides demonstration authentication and CRUD functionality using browser storage.

## Author

**Name:** Felicia Francina Baptiste
**Course:** Project Exam 2 – Resit 1 Brief
**Project:** Pet Adoption Web Application
**Delivery date:** 16 August 2026

## Links

* [Live website](https://splendid-dieffenbachia-acac49.netlify.app/)
* [GitHub repository](https://github.com/Flisa81/pawfect-home-assignment)
* [GitHub Project / Kanban](https://github.com/users/Flisa81/projects/12/views/1)
* [GitHub Roadmap / Gantt chart](https://github.com/users/Flisa81/projects/12/views/2)
* [Figma style guide](https://www.figma.com/design/6nmAy1gEstXUTMg50RNZPS/Pawfect-Home-%E2%80%93-Design-System---Prototype?node-id=3-52&p=f&t=SugnkYzS3Zce2hqw-0)
* [Figma desktop and mobile designs](https://www.figma.com/design/6nmAy1gEstXUTMg50RNZPS/Pawfect-Home-%E2%80%93-Design-System---Prototype?node-id=0-1)

## Project overview

Pawfect Home was created for a pet-adoption organisation. Its goal is to make it easy for visitors to discover adoptable animals and view detailed pet profiles.

The application also provides a demonstration administrative area where users can create, update and delete pet listings. The submitted deployment uses browser storage instead of the live Noroff API.

## Design

The visual identity uses a warm and trustworthy style intended to support the emotional nature of pet adoption.

* **Primary colour:** Forest green `#345B4C`
* **Secondary colour:** Coral `#E98064`
* **Background colour:** Cream `#FAF7F0`
* **Heading font:** Fraunces
* **Body font:** DM Sans

The Figma file includes a style guide, reusable components and high-fidelity desktop and mobile designs.

## Highlights

* Responsive multi-page experience for mobile and desktop
* Accessible landmarks, labels, focus handling, reduced-motion support and meaningful image text
* Search by name, breed or location
* Filters for species and size
* Shareable `/pet/?id=…` detail URLs with a clipboard action
* Protected create and edit routes with a demonstration login/register flow
* Full CRUD using a built-in browser-based demo store
* API service layer structured around the supplied REST API contract
* Safe output encoding, URL validation and native form validation
* Loading, error and empty states
* Netlify configuration and zero-backend demo mode

## Run locally

The project requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

In demo mode, any valid email and password of at least eight characters can create a demonstration session. Pet data is stored in the browser's `localStorage`, while the login session is stored in `sessionStorage`.

## API implementation status

The application includes a service layer based on the supplied routes:

* `GET /pets`
* `POST /pets`
* `GET /pets/:id`
* `PUT /pets/:id`
* `DELETE /pets/:id`
* `POST /auth/login`
* `POST /auth/register`

The submitted deployment remains configured in local demo mode:

```js
window.PAWFECT_CONFIG = {
  apiBaseUrl: "",
  apiKey: ""
};
```

In demo mode, the application uses browser storage rather than sending requests to the live API. Connecting and fully testing the application with the official Noroff API is a planned future improvement.

## Commands

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build         |
| `npm test`        | Run automated data-contract tests    |

## Pages

| Route                    | Purpose                                           |
| ------------------------ | ------------------------------------------------- |
| `/`                      | Browse, search, filter and open pet listings      |
| `/pet/?id=…`             | View details and copy a shareable link            |
| `/pet/create.html`       | Add a pet through the demonstration admin session |
| `/pet/edit.html?id=…`    | Update or delete a pet                            |
| `/account/login.html`    | Log in                                            |
| `/account/register.html` | Register                                          |

## Known limitations

* The submitted version uses local browser storage instead of the live Noroff API.
* Demo data is not shared between browsers or devices.
* Any valid email and password of at least eight characters can create a demonstration session.
* The official API integration requires further authentication and CRUD testing.

## Deployment

### Netlify

Import the repository into Netlify. Netlify reads `netlify.toml`, runs `npm run build` and publishes the `dist` directory.

### GitHub Pages

Run `npm run build` and publish the `dist` directory. For a repository subpath, add Vite's `base` option and replace root-relative links with the configured base.

## Project evidence

* `docs/STYLE_GUIDE.md` — design system and reusable component rules
* `docs/PROJECT_PLAN.md` — Kanban backlog and delivery roadmap
* `docs/TESTING.md` — manual user-story, accessibility, validation and Lighthouse testing
* `docs/API_CONTRACT.md` — endpoint and payload mapping

## Acknowledgements

The project was supported by the following learning resources:

* David Flanagan, *JavaScript: The Definitive Guide*, Seventh Edition
* Jon Duckett, *HTML & CSS: Design and Build Websites*
* YouTube tutorials covering web-development concepts and tools
* Informal technical guidance from Thomas Hafsaas
* ChatGPT/Codex assistance with debugging, README improvements and reflection structure

All final project decisions, testing and submitted work remained the responsibility of the author.
