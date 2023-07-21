import { json, type DataFunctionArgs, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import groq from "groq";
import { client } from "sanity/sanity.server";
import { pageZ } from "types/page";
import { Header } from "~/components/Header";
import { Layout } from "~/components/Layout";
import { Page, PageQuery } from "~/components/Page";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async (props: DataFunctionArgs) => {

	const data = await client.fetch(groq`*[_type == "siteConfig"][0]{
		_type,
					_id,
					frontpage->{
						${PageQuery},
					},
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
				}
			`).then(res => res ? pageZ.parse(res.frontpage) : null)

			if(!data) {
				throw new Response("Not Found", {status: 404})
			}


	return json({page: data}, {
		headers: {
			"Cache-Control": "public, max-age=3600, s-maxage=3600"
		}
	})
}

export default function Index() {
	const {page} = useLoaderData<typeof loader>()
  return (
    <Layout>
			<Header navigation={[]} />
      <Page modules={page.modules} />

    </Layout>
  );
}
