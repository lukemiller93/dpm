import { json } from "@remix-run/node";
import groq from "groq";
import { client } from "sanity/sanity.server";
import { brandsZ } from "types/brand";

export const loader = async () => {
  const brands = await client
    .fetch(
      groq`*[_type == "brand"]{
		_id,
		_type,
		title,
		"slug":slug.current,
		description[],
		logo {
			asset->{
				_id,
				assetId,
				metadata {
					lqip,
					isOpaque
				}
			}
		}	}`
    )
    .then((res) => (res ? brandsZ.parse(res) : null));

  if (!brands) {
    throw new Response("No brands found...", { status: 404 });
  }

  return json(
    { brands },
    { headers: { "Cache-Control": "max-age=86400 s-maxage=86400" } }
  );
};
