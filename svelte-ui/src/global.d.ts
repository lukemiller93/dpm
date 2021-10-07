/// <reference types="@sveltejs/kit" />

import type { SanityDocument } from "@sanity/client";

export interface SanityPage extends SanityDocument {
  title: string!,
  navMenu: NavigationMenu
  slug: Slug,
  content: [any]
}

export type Slug = {
  _type: string,
  current: string,
}

export interface NavigationMenu extends SanityDocument {
  title: string,
  items: [LinkCreator]
}

export interface LinkCreator  {
  _key: string,
  _type: string,
  title: string,
  sitePageRoute: SanityPage | Route,
  route?: string,
  link?: string,
  kind?:string,
}

export interface Route extends SanityDocument {
  page: SanityPage,
  slug: Slug,
  useSiteTitle: boolean,
  includeInSitemap: boolean,
  disallowRobots: boolean
}