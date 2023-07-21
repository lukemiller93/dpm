import { ClientOnly } from "remix-utils";
import { Studio } from "sanity";
import config from './sanity.config';
import type { LinksFunction } from "@remix-run/node";
import studioStyles from './studio.css'
export const links: LinksFunction = () => [
	{rel: "stylesheet", href: studioStyles }
]

export default function StudioRoute() {
	return (
		<ClientOnly fallback={<p>Loading studio...</p>}>
			{() => <Studio config={config} />}
		</ClientOnly>
	)
}
