import { cssBundleHref } from "@remix-run/css-bundle";
import { json } from "@remix-run/node";
import type { DataFunctionArgs,  LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { client } from "sanity/sanity.server";
import groq from "groq";
import { siteConfigNoFrontPage } from "types/siteConfig";
import {  useState } from "react";
import type { DropdownState } from "./components/menus/Menu";
import { Header } from "./components/Header";
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export const loader = async (props: DataFunctionArgs) => {
  const data = await client
    .fetch(
      groq`*[_type == "siteConfig"][0]{
					_id,
					logo,
					footerText,
					mainNavigation[]{
						_key,
						itemName,
						externalLink,
						item->{
							_id,
							title,
							_type,
							"slug":slug.current
						},
						nestedRoutes[]{
							_key,
							itemName,
							externalLink,
							item->{
								_id,
								_type,
								title,
								"slug":slug.current
							}
						}
					},

					mobileNavigation[]{
						_key,
						itemName,
						externalLink,
						item->{
							_type,
							_id,
							title,
							"slug":slug.current
						},
					},
					privacyNavigation[]{
						_key,
						itemName,
						externalLink,
						item->{
							_type,
							_id,
							title,
							"slug":slug.current
						},
					},
					socialLinks[]{
						_key,
						platform,
						url
					},
					title,
					url
				}
			`
    )
    .then((res) => (res ? siteConfigNoFrontPage.parse(res) : null));

  if (!data) {
    throw new Response("Page not found", {
      status: 404,
    });
  }
  return json({
    mainNavigation: data?.mainNavigation,
    mobileNavigation: data?.mobileNavigation,
    logo: data?.logo,
    socialLinks: data?.socialLinks,
    meta: {
      url: data?.url,
      titleTemplate: data?.title,
    },
  });
};

export default function App() {
  const { mobileNavigation, mainNavigation, logo } =
    useLoaderData<typeof loader>();
  const [dropdownState, setDropdownState] = useState<DropdownState>(`closed`);
  const [sideDrawerState, setSidedrawerState] =
    useState<DropdownState>(`closed`);
  const location = useLocation();
  const [activeId, setActiveId] = useState<string>(``);



  const closeDropdown = () => setDropdownState(`closed`);
  const toggleSidedrawer = () =>
    setSidedrawerState((prev) => (prev === "open" ? "closed" : "open"));
  const closeSidedrawer = () => setSidedrawerState("closed");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
				{location.pathname !=="/" && (<Header navigation={mainNavigation} />)}
        <Outlet
          context={{
            dropdownState,
            // changeDropdownState,
            closeDropdown,
            activeId,
            sideDrawerState,
            toggleSidedrawer,
            closeSidedrawer,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
