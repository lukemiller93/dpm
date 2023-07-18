"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "./DropdownMenu";
import type { DropdownState, MenuItems } from "./Menu";
import { normalizePath } from "@/lib/getUrlPath";

export const MenuItem = ({
  navItem,
  isActive,
}: {
  navItem: MenuItems[0];
  isActive: boolean;
}) => {
  const pathname = usePathname();
  const { itemName, externalLink, item, _key, nestedRoutes } = navItem;

  return (
    <li
      key={_key}
      className="flex  items-center gap-2 relative font-sans text-sm @xl:text-sm @2xl:text-base "
    >
      {externalLink ? (
        <a className="" href={externalLink}>
          {itemName}
        </a>
      ) : (
        <Link
          className={isActive ? "text-red-400" : ""}
          href={normalizePath(navItem.item?.slug || "")}
        >
          {itemName && itemName !== "" ? itemName : item?.title}
        </Link>
      )}
      {nestedRoutes && nestedRoutes?.length > 0 && (
        <DropdownMenu id={_key} parent={item?.slug} items={nestedRoutes} />
      )}
    </li>
  );
};
