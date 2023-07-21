import { Layout } from "@/components/Layout";
import { Page, PageQuery } from "@/components/Page";
import { clientFetch } from "@/sanity/sanity.client";
import { pageZ } from "@/types/page";
import { groq } from "next-sanity";

const getPageData = async (slug: string) => {
  const data = await clientFetch(
    groq`*[_type =="page" && route->slug.current == $slug][0]{
		${PageQuery}
	}`,
    { slug }
  ).then((res) => (res ? pageZ.parse(res) : null));

  if (!data) {
    throw new Error(`No page found for slug ${slug}`);
  }

  return data;
};

export default async function NestedRoute({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: string[];
}) {
  const data = await getPageData(params.slug);
  return (
    <Layout>
      <Page modules={data?.modules || []} />
      <pre>{JSON.stringify({ data, params, searchParams }, null, 2)}</pre>
    </Layout>
  );
}
