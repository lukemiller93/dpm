import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import groq from "groq";
import { NavMenu } from "./components/NavMenu";
import { client } from "./sanity";
import styles from './tailwind.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dauntless Pursuit Media",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{rel: "stylesheet", href: styles}]

export const loader: LoaderFunction = async() => {
  const navigationLinks = await client.fetch(groq`*[_type =="navigationMenu"]`)

  if(!navigationLinks) {
    return json("Not found", {status: 404})
  }

  return json({navigationLinks: navigationLinks.items})
}

export default function App() {

  const {navigationLinks} = useLoaderData()
  console.log(navigationLinks)
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        {navigationLinks?.length > 0 && (<NavMenu items={navigationLinks} />)}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
