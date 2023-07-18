// import { clientFetch } from '@/sanity/sanity.client'
import { Author } from "@/components/Author";
import { Layout } from "@/components/Layout";
import { Page, PageQuery } from "@/components/Page";
import { clientFetch } from "@/sanity/sanity.client";
import { Author as AuthorType, authorZ } from "@/types/author";
import { SiteConfigDoc, siteConfigZ } from "@/types/siteConfig";
import { groq } from "next-sanity";

async function getHomePage(): Promise<SiteConfigDoc["frontpage"] | null> {
  const data = await clientFetch(groq`*[_type == "siteConfig"][0]{
		_type,
					_id,
					frontpage->{
						${PageQuery},
					}
				}
			`);

  /*
.then((res) =>
    res
      ? siteConfigZ.pick({ frontpage: true, _id: true, _type: true }).parse(res)
      : null
  ); */
  if (!data) {
    throw new Error(`No page found `);
  }

  return data.frontpage;
}

export default async function Home() {
  const data = await getHomePage();

  return (
    <Layout>
			<Page modules={data?.modules || []} />
    </Layout>
  );
}
