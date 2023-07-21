"use client";
import { SiteConfigDoc } from "@/types/siteConfig";
import Link from "next/link";
import { MenuItem } from "./menus/MenuItem";
import { usePathname } from "next/navigation";
import { normalizePath } from "@/lib/getUrlPath";
import Image from 'next/image'
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/sanity.client";
import { Logo } from "./Logo";
export const Header = ({
  navigation,
	logo,
	hideHeaderonHome = false
}: {
	hideHeaderonHome?: boolean;
  navigation: SiteConfigDoc["mainNavigation"];
	logo?: SiteConfigDoc["logo"];
}) => {
		const imageProps = useNextSanityImage(client, (logo || {}));
  const pathname = usePathname();

	if(hideHeaderonHome) return null

	if(!hideHeaderonHome && pathname === '/') return (
    <header className={`container mx-auto px-8 "relative"}`}>
      <div className="py-8 flex justify-between items-center gap-16">
        <Link href="/">
          <Logo />
        </Link>
        <nav className=" gap-8 border-2 border-white/60 rounded-full px-4 py-1 text-gray-100/60 hidden md:flex">
          <ul className="flex gap-4">
            {navigation.map((item) => {
              const isActive =
                pathname.startsWith(normalizePath(item?.item?.slug || "")) &&
                item?.item?.slug !== "/";

              return (
                <MenuItem key={item._key} isActive={isActive} navItem={item} />
              );
            })}
          </ul>
        </nav>
        <Link
          href="/contact/"
          className="hidden md:block bg-yellow-500 px-4 py-2 rounded-lg shadow-black/25 shadow-lg"
        >
          Let's Talk!
        </Link>
      </div>
    </header>
  );

  return (
    <header className={`container mx-auto px-8 "relative"}`}>
      <div className="py-8 flex justify-between items-center gap-16">
        <Link href="/">
					<Logo />
        </Link>
        <nav className=" gap-8  hidden md:flex">
          <ul className="flex gap-4">
            {navigation.map((item) => {
              const isActive =
                pathname.startsWith(normalizePath(item?.item?.slug || "")) &&
                item?.item?.slug !== "/";

              return (
                <MenuItem key={item._key} isActive={isActive} navItem={item} />
              );
            })}
          </ul>
        </nav>
				<Link href="/contact/" className="hidden md:block bg-yellow-500 px-4 py-2 rounded-lg shadow-black/25 shadow-lg">
					Let's Talk!
				</Link>
      </div>
    </header>
  );
};
