import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

// import "./app.css";
import "./static/css/styles-v2.scss"

import faviconSvg from "./assets/images/favicon.svg";
import faviconIco from "./assets/images/favicon.ico";
import appleTouchIcon from "./assets/images/apple-touch-icon.png";
import appleTouchIcon72 from "./assets/images/apple-touch-icon-72x72.png";
import appleTouchIcon114 from "./assets/images/apple-touch-icon-114x114.png";
import appleTouchIcon144 from "./assets/images/apple-touch-icon-144x144.png";


export const meta = () => [
  { title: "Kotlin Programming Language" },
  {
    name: "description",
    content: "Kotlin is a modern, statically typed programming language.",
  },

  // Open Graph metadata (social)
  { property: "og:title", content: "Kotlin Programming Language" },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://kotlinlang.org/" },
  {
    property: "og:image",
    content: "https://kotlinlang.org/assets/images/open-graph/general.png",
  },
  {
    property: "og:description",
    content: "Kotlin is a modern, statically typed programming language.",
  },
  { property: "og:site_name", content: "Kotlin" },

  // Twitter Card metadata (social)
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: "@kotlin" },
  { name: "twitter:title", content: "Kotlin Programming Language" },
  {
    name: "twitter:description",
    content: "Kotlin is a modern, statically typed programming language.",
  },
  {
    name: "twitter:image", 
    content: "https://kotlinlang.org/assets/images/twitter/general.png",
  },
];

export const links = () => [
  { rel: "dns-prefetch", 
    href: "https://fonts.googleapis.com" },
  {
    rel: "dns-prefetch",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "dns-prefetch",
    href: "//resources.jetbrains.com"
  },

  // App icons
  { rel: "icon", type: "image/svg+xml", href: faviconSvg },
  { rel: "alternate icon", href: faviconIco },
  { rel: "apple-touch-icon", href: appleTouchIcon },
  { rel: "apple-touch-icon", sizes: "72x72", href: appleTouchIcon72 },
  { rel: "apple-touch-icon", sizes: "114x114", href: appleTouchIcon114 },
  { rel: "apple-touch-icon", sizes: "144x144", href: appleTouchIcon144 },
];


export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
