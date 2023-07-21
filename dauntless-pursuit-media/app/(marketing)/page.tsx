// import { clientFetch } from '@/sanity/sanity.client'
import { Author } from "@/components/Author";
import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Page, PageQuery } from "@/components/Page";
import { clientFetch } from "@/sanity/sanity.client";
import { Author as AuthorType, authorZ } from "@/types/author";
import { SiteConfigDoc, siteConfigZ } from "@/types/siteConfig";
import { groq } from "next-sanity";
import Link from "next/link";

interface HomePageProps {
	frontpage: SiteConfigDoc["frontpage"];
	navigation: SiteConfigDoc["mainNavigation"];
}

async function getHomePage(): Promise<HomePageProps | null> {
  const data = await clientFetch(groq`*[_type == "siteConfig"][0]{
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
			`).then((res) =>
    res
      ? siteConfigZ
          .pick({
            frontpage: true,
            _id: true,
            _type: true,
            mainNavigation: true,
          })
          .parse(res)
      : null
  );
  if (!data) {
    throw new Error(`No page found `);
  }

  return {
		frontpage: data.frontpage,
		navigation: data.mainNavigation
	}
}

export default async function Home() {
  const data= await getHomePage();

  return (
    <Layout>
      <section className="hero-gradient pb-8 ">

				<Header navigation={data?.navigation || []} />
        <div className="container  mx-auto px-8">
          <div className="@container max-w-[740px]">
            <h1 className="text-[12cqmin] mt-8 font-semibold text-white  leading-none">
              Unlock Your Online Potential
            </h1>
            <p className="ml-4 max-w-prose text-white">
              At Dauntless Pursuit Media, we understand the power of a strong
              online presence. In today's digital age, having a compelling
              website is crucial for businesses of all sizes to stand out and
              thrive. We believe that your website should be a unique
              representation of your brand, tailored to engage your target
              audience and drive tangible results.
            </p>
						<div className="flex justify-start gap-8 my-8">
							<Link className="bg-yellow-500 px-4 py-2 rounded-lg inline-block" href="/contact/">Let's Talk!</Link>
							<Link className="border text-white border-white  px-4 py-2 rounded-lg inline-block hover:bg-white focus:bg-white focus:text-black hover:text-black transition-colors" href="/portfolio/">Portfolio</Link>
						</div>
          </div>
        </div>
      </section>
      <Page modules={data?.frontpage?.modules || []} />
    </Layout>
  );
}
