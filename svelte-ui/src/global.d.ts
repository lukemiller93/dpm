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

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_GRAPHQL_ENDPOINT: string;
  readonly VITE_SANITY_READ_TOKEN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
