
import { Inter, Nunito } from "next/font/google";
import { groq } from "next-sanity";
import { z } from "zod";
import { siteConfigNoFrontPage } from "@/types/siteConfig";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/sanity.client";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });


async function getData(): Promise<z.infer<
  typeof siteConfigNoFrontPage
> | null> {
  return await client.fetch(groq`*[_type == "siteConfig"][0]{
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
			`).then((res) => (res ? siteConfigNoFrontPage.parse(res) : null));
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <html lang="en">
      <body className={`${inter.variable} flex flex-col min-h-[100dvh] ${nunito.variable}`}>
				<Header hideHeaderonHome={true} navigation={data?.mainNavigation || []} logo={data?.logo} />
        {children}
        <Footer privacyNav={data?.privacyNavigation } socials={data?.socialLinks || []} navigation={data?.mainNavigation ||[] } />
      </body>
    </html>
  );
}
