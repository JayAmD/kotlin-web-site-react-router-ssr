# Kotlin Web Site - React Router 7 SSR Migration

## Task description
The goal was to migrate a legacy SSR Flask BE into modern React Router 7 SSR.

The legacy project: https://github.com/JayAmD/kotlin-web-site-jetsites-internship-2026

The task description can be found in the `TASK.md` file.

## My Plans for the Implementation

* Create a new React Router 7 (RR7) project with Server-Side Rendering (SSR) enabled.
* Utilize RR7 to handle SSR and hydration.
* Transfer frontend parts (React components, assets, HTML tags, etc.) from the legacy project and make them SSR-safe.
* Confirm the website works as expected (interactive functionality like buttons and tabs, correct rendering, responsiveness).
* Update the project folder structure. 
* Strive to apply best practice RR7 patterns throughout the entire implementation.

Migration details can be found below.

## Run the migrated website using Docker:

### Docker Deployment

To build and run the migrated kotlin-web using Docker:

```bash
cd .\kotlin-web-site-react-router-ssr\

docker build -t kotlin-web-site-rr7-ssr .

# Run the container
docker run -p 3000:3000 kotlin-web-site-rr7-ssr
```

\
Otherwise to run a DEV server:

Install the dependencies:

```bash
npm install
```

And Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.


## Process of Migration in Detail

**1. Start a new project**

* npx create-react-router@latest --template remix-run/react-router-templates/javascript
* Copy assets and static files into `/app`.
* Add `@rescui` npm packages (newer version) and configure Vite to handle them. Vite needs to bundle and transform these packages itself (`noExternal`) so it can process CSS correctly in the SSR pipeline.
* Add `@jetbrains/kotlin-web-site-ui` and downgrade to React 18 to satisfy peer dependencies.

**2. Apply RR7 framework mode route definition**
* Keep the route `home.jsx` thin (standard RR7 pattern). Visual components are defined in `/app/features/home`.

**3. SSR-Safe Clean Up**

* **Mounting:** Remove old React client mount. RR7 now handles hydration (attaching event handlers to existing HTML).
* **Responsiveness:** Fix `header-section` card responsiveness by removing client-only `window.innerWidth` and adding pure CSS responsiveness. The website will now be responsive on mobile devices natively.
* **Storage:** Fix `usage-section` `localStorage` handling (used to save sort order). Wrapped the `localStorage` call with `useEffect` so it runs only in the browser, not during the SSR render.
* **Dynamic Content:** In `why-kotlin-section`, the random active tab is decided on the client side. SSR renders only a skeleton/placeholder. Plus replaced the `document` call and deprecated `highlightBlock` with current API.

**4. Add global header and footer from @jetbrains/kotlin-web-site-ui**

* Global header and footer are used as RR7 Layout, a wrapper around pages (Home, etc.). Layout has no own URL segment, it just provides shared UI (header/footer/theme) around nested routes.*

* Global header from @jetbrains/kotlin-web-site-ui is client-only due to browser API usage in package internals. Otherwise the website is SSR-migrated.
On the server a skeleton is rendered, so the page is not "jumpy" when client renders the header*

**5. Migrate HTML meta tags to root.jsx**

**6. Update project folder structure - routes, features (sections of specific routes), styles, assets.**

**Notes of Consideration**

* React Router is using Vite as the build/runtime toolchain, it has stricter rules - files containing JSX have to have .jsx extension name. I decided to configure Vite to treat .js files with JSX in them as .jsx
  This decision was to make Vite work ASAP with the copied files (.js) at the beginning of the migration. Alternatively (long-term solution) files can be renamed to .jsx
  
* Global header from @jetbrains/kotlin-web-site-ui is client-only due to browser API usage in package internals. Otherwise the website is SSR-migrated.
  On the server a skeleton is rendered, so the page is not "jumpy" when client renders the header
