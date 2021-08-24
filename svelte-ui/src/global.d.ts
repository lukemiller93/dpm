/// <reference types="@sveltejs/kit" />

export interface SanityPage {
  _id: string,
  _type: string,
  title: string,
  body: any,
  slug: Slug,
}

export type Slug = {
  _type: string,
  current: string,
}