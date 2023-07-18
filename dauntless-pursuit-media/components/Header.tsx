"use client";
import { SiteConfigDoc } from "@/types/siteConfig";
import Link from "next/link";
import { MenuItem } from "./menus/MenuItem";
import { usePathname } from "next/navigation";
import { normalizePath } from "@/lib/getUrlPath";
import Image from 'next/image'
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/sanity.client";
export const Header = ({
  navigation,
	logo
}: {
  navigation: SiteConfigDoc["mainNavigation"];
	logo?: SiteConfigDoc["logo"];
}) => {
		const imageProps = useNextSanityImage(client, (logo || {}));
  const pathname = usePathname();
  return (
    <header className="container mx-auto px-8">
      <div className="py-8 flex justify-between gap-16">
        <Link href="/">
          <Image
            {...imageProps}
            alt="Logo"
            className="w-48"
            sizes="(max-width: 200px) 100vw, 200px"
          />
        </Link>
        <nav className=" gap-8 ml-auto hidden md:flex">
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
      </div>
    </header>
  );
};
