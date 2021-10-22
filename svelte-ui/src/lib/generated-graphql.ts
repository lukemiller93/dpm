import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Author = Document & {
  __typename?: 'Author';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  bioRaw?: Maybe<Scalars['JSON']>;
  image?: Maybe<Image>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type AuthorFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  image?: Maybe<ImageFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
};

export type AuthorSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  image?: Maybe<ImageSorting>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type BlockOrImage = Block | Image;

export type BlockOrLinkCreatorOrMainImage = Block | LinkCreator | MainImage;

export type BodySection = {
  __typename?: 'BodySection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  contentRaw?: Maybe<Scalars['JSON']>;
};

export type BodySectionFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type BodySectionOrGridContentOrHeroOrUiComponentRef = BodySection | GridContent | Hero | UiComponentRef;

export type BodySectionSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>;
};

export type Category = Document & {
  __typename?: 'Category';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Image>;
  title?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  description?: Maybe<StringFilter>;
  icon?: Maybe<ImageFilter>;
  title?: Maybe<StringFilter>;
};

export type CategorySorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  icon?: Maybe<ImageSorting>;
  title?: Maybe<SortOrder>;
};

export type ColorListing = {
  __typename?: 'ColorListing';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  colors?: Maybe<Colorlist>;
};

export type ColorListingFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  colors?: Maybe<ColorlistFilter>;
};

export type ColorListingSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  colors?: Maybe<ColorlistSorting>;
};

export type Colorlist = {
  __typename?: 'Colorlist';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ColorlistFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  value?: Maybe<StringFilter>;
};

export type ColorlistSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  addressRaw?: Maybe<Scalars['JSON']>;
  footerLogo?: Maybe<MainImage>;
  missionStatementRaw?: Maybe<Scalars['JSON']>;
};

export type FooterFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  footerLogo?: Maybe<MainImageFilter>;
};

export type FooterSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  footerLogo?: Maybe<MainImageSorting>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  alt?: Maybe<FloatFilter>;
  lat?: Maybe<FloatFilter>;
  lng?: Maybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
  lat?: Maybe<SortOrder>;
  lng?: Maybe<SortOrder>;
};

export type GridContent = {
  __typename?: 'GridContent';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<IllustrationOrSingleColumnOrUiComponentRef>>>;
};

export type GridContentFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type GridContentSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type Hero = {
  __typename?: 'Hero';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  cta?: Maybe<LinkCreator>;
  headingRaw?: Maybe<Scalars['JSON']>;
  illustration?: Maybe<Illustration>;
};

export type HeroFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  cta?: Maybe<LinkCreatorFilter>;
  illustration?: Maybe<IllustrationFilter>;
};

export type HeroSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  cta?: Maybe<LinkCreatorSorting>;
  illustration?: Maybe<IllustrationSorting>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>;
  nin?: Maybe<Array<Scalars['ID']>>;
};

export type Illustration = {
  __typename?: 'Illustration';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
};

export type IllustrationFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
};

export type IllustrationOrSingleColumnOrUiComponentRef = Illustration | SingleColumn | UiComponentRef;

export type IllustrationSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  crop?: Maybe<SanityImageCropFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
};

export type ImageGallery = {
  __typename?: 'ImageGallery';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Illustration>>>;
};

export type ImageGalleryFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type ImageGallerySorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type ImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  crop?: Maybe<SanityImageCropSorting>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>;
};

export type LinkCreator = {
  __typename?: 'LinkCreator';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<ColorListing>;
  kind?: Maybe<Scalars['String']>;
  /** Example: https://www.sanity.io */
  link?: Maybe<Scalars['String']>;
  /** Example: /blog */
  route?: Maybe<Scalars['String']>;
  sitePageRoute?: Maybe<PageOrRoute>;
  title?: Maybe<Scalars['String']>;
};

export type LinkCreatorFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  backgroundColor?: Maybe<ColorListingFilter>;
  kind?: Maybe<StringFilter>;
  link?: Maybe<StringFilter>;
  route?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
};

export type LinkCreatorSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  backgroundColor?: Maybe<ColorListingSorting>;
  kind?: Maybe<SortOrder>;
  link?: Maybe<SortOrder>;
  route?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type Location = {
  __typename?: 'Location';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type LocationFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  address1?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  state?: Maybe<StringFilter>;
};

export type LocationSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  address1?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
};

export type MainImage = {
  __typename?: 'MainImage';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** Important for SEO and accessibility. */
  alt?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
  objectFit?: Maybe<Scalars['String']>;
};

export type MainImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  alt?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  crop?: Maybe<SanityImageCropFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  objectFit?: Maybe<StringFilter>;
};

export type MainImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
  crop?: Maybe<SanityImageCropSorting>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  objectFit?: Maybe<SortOrder>;
};

export type NavigationMenu = Document & {
  __typename?: 'NavigationMenu';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  items?: Maybe<Array<Maybe<LinkCreator>>>;
  title?: Maybe<Scalars['String']>;
};

export type NavigationMenuFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  title?: Maybe<StringFilter>;
};

export type NavigationMenuSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type OpenGraph = {
  __typename?: 'OpenGraph';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<MainImage>;
  /** Heads up! This will override the page title. */
  title?: Maybe<Scalars['String']>;
};

export type OpenGraphFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  image?: Maybe<MainImageFilter>;
  title?: Maybe<StringFilter>;
};

export type OpenGraphSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  image?: Maybe<MainImageSorting>;
  title?: Maybe<SortOrder>;
};

export type Page = Document & {
  __typename?: 'Page';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  content?: Maybe<Array<Maybe<BodySectionOrGridContentOrHeroOrUiComponentRef>>>;
  /** Which nav menu should be shown if any */
  navMenu?: Maybe<NavigationMenu>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type PageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  navMenu?: Maybe<NavigationMenuFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
};

export type PageOrRoute = Page | Route;

export type PageSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  title?: Maybe<SortOrder>;
};

export type Post = Document & {
  __typename?: 'Post';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Author>;
  bodyRaw?: Maybe<Scalars['JSON']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  mainImage?: Maybe<Image>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  author?: Maybe<AuthorFilter>;
  mainImage?: Maybe<ImageFilter>;
  publishedAt?: Maybe<DatetimeFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
};

export type PostSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  mainImage?: Maybe<ImageSorting>;
  publishedAt?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  title?: Maybe<SortOrder>;
};

export type Project = Document & {
  __typename?: 'Project';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Author>;
  bodyRaw?: Maybe<Scalars['JSON']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  mainImage?: Maybe<MainImage>;
  projectGallery?: Maybe<ImageGallery>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  author?: Maybe<AuthorFilter>;
  mainImage?: Maybe<MainImageFilter>;
  projectGallery?: Maybe<ImageGalleryFilter>;
  publishedAt?: Maybe<DatetimeFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
};

export type ProjectSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  mainImage?: Maybe<MainImageSorting>;
  projectGallery?: Maybe<ImageGallerySorting>;
  publishedAt?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  title?: Maybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Author?: Maybe<Author>;
  Category?: Maybe<Category>;
  Document?: Maybe<Document>;
  NavigationMenu?: Maybe<NavigationMenu>;
  Page?: Maybe<Page>;
  Post?: Maybe<Post>;
  Project?: Maybe<Project>;
  Route?: Maybe<Route>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SiteSettings?: Maybe<SiteSettings>;
  allAuthor: Array<Author>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allNavigationMenu: Array<NavigationMenu>;
  allPage: Array<Page>;
  allPost: Array<Post>;
  allProject: Array<Project>;
  allRoute: Array<Route>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSiteSettings: Array<SiteSettings>;
};


export type RootQueryAuthorArgs = {
  id: Scalars['ID'];
};


export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryNavigationMenuArgs = {
  id: Scalars['ID'];
};


export type RootQueryPageArgs = {
  id: Scalars['ID'];
};


export type RootQueryPostArgs = {
  id: Scalars['ID'];
};


export type RootQueryProjectArgs = {
  id: Scalars['ID'];
};


export type RootQueryRouteArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllAuthorArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<AuthorSorting>>;
  where?: Maybe<AuthorFilter>;
};


export type RootQueryAllCategoryArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<CategorySorting>>;
  where?: Maybe<CategoryFilter>;
};


export type RootQueryAllDocumentArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<DocumentSorting>>;
  where?: Maybe<DocumentFilter>;
};


export type RootQueryAllNavigationMenuArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<NavigationMenuSorting>>;
  where?: Maybe<NavigationMenuFilter>;
};


export type RootQueryAllPageArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<PageSorting>>;
  where?: Maybe<PageFilter>;
};


export type RootQueryAllPostArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<PostSorting>>;
  where?: Maybe<PostFilter>;
};


export type RootQueryAllProjectArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<ProjectSorting>>;
  where?: Maybe<ProjectFilter>;
};


export type RootQueryAllRouteArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<RouteSorting>>;
  where?: Maybe<RouteFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SanityFileAssetSorting>>;
  where?: Maybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SanityImageAssetSorting>>;
  where?: Maybe<SanityImageAssetFilter>;
};


export type RootQueryAllSiteSettingsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<SiteSettingsSorting>>;
  where?: Maybe<SiteSettingsFilter>;
};

export type Route = Document & {
  __typename?: 'Route';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Hide this route for search engines like google */
  disallowRobots?: Maybe<Scalars['Boolean']>;
  /** For search engines. Will be generateed to /sitemap.xml */
  includeInSitemap?: Maybe<Scalars['Boolean']>;
  openGraph?: Maybe<OpenGraph>;
  /** The page you want to appear at this path. Remember it needs to be published. */
  page?: Maybe<Page>;
  slug?: Maybe<Slug>;
  /** Use the site settings title as page title instead of the title on the referenced page */
  useSiteTitle?: Maybe<Scalars['Boolean']>;
};

export type RouteFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  disallowRobots?: Maybe<BooleanFilter>;
  includeInSitemap?: Maybe<BooleanFilter>;
  openGraph?: Maybe<OpenGraphFilter>;
  page?: Maybe<PageFilter>;
  slug?: Maybe<SlugFilter>;
  useSiteTitle?: Maybe<BooleanFilter>;
};

export type RouteSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  disallowRobots?: Maybe<SortOrder>;
  includeInSitemap?: Maybe<SortOrder>;
  openGraph?: Maybe<OpenGraphSorting>;
  slug?: Maybe<SlugSorting>;
  useSiteTitle?: Maybe<SortOrder>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  altText?: Maybe<StringFilter>;
  assetId?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
  title?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
  title?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  altText?: Maybe<StringFilter>;
  assetId?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  metadata?: Maybe<SanityImageMetadataFilter>;
  mimeType?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
  title?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  metadata?: Maybe<SanityImageMetadataSorting>;
  mimeType?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
  title?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  bottom?: Maybe<FloatFilter>;
  left?: Maybe<FloatFilter>;
  right?: Maybe<FloatFilter>;
  top?: Maybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  bottom?: Maybe<SortOrder>;
  left?: Maybe<SortOrder>;
  right?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  aspectRatio?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  aspectRatio?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  dimensions?: Maybe<SanityImageDimensionsFilter>;
  hasAlpha?: Maybe<BooleanFilter>;
  isOpaque?: Maybe<BooleanFilter>;
  location?: Maybe<GeopointFilter>;
  lqip?: Maybe<StringFilter>;
  palette?: Maybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  dimensions?: Maybe<SanityImageDimensionsSorting>;
  hasAlpha?: Maybe<SortOrder>;
  isOpaque?: Maybe<SortOrder>;
  location?: Maybe<GeopointSorting>;
  lqip?: Maybe<SortOrder>;
  palette?: Maybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  dominant?: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  muted?: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  dominant?: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  muted?: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  background?: Maybe<StringFilter>;
  foreground?: Maybe<StringFilter>;
  population?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  background?: Maybe<SortOrder>;
  foreground?: Maybe<SortOrder>;
  population?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>;
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>;
};

export type SingleColumn = {
  __typename?: 'SingleColumn';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  contentRaw?: Maybe<Scalars['JSON']>;
};

export type SingleColumnFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type SingleColumnSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type SiteSettings = Document & {
  __typename?: 'SiteSettings';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  footer?: Maybe<Footer>;
  headerLogo?: Maybe<MainImage>;
  openGraph?: Maybe<OpenGraph>;
  socialLinks?: Maybe<Array<Maybe<SocialLink>>>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSettingsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _id?: Maybe<IdFilter>;
  _key?: Maybe<StringFilter>;
  _rev?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  footer?: Maybe<FooterFilter>;
  headerLogo?: Maybe<MainImageFilter>;
  openGraph?: Maybe<OpenGraphFilter>;
  title?: Maybe<StringFilter>;
};

export type SiteSettingsSorting = {
  _createdAt?: Maybe<SortOrder>;
  _id?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  footer?: Maybe<FooterSorting>;
  headerLogo?: Maybe<MainImageSorting>;
  openGraph?: Maybe<OpenGraphSorting>;
  title?: Maybe<SortOrder>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  current?: Maybe<StringFilter>;
};

export type SlugSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  current?: Maybe<SortOrder>;
};

export type SocialLink = {
  __typename?: 'SocialLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SocialLinkFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  platform?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SocialLinkSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  platform?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Scalars['String']>>;
};

export type UiComponentRef = {
  __typename?: 'UiComponentRef';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** This is for adding a reference to specific UI components. */
  name?: Maybe<Scalars['String']>;
};

export type UiComponentRefFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
};

export type UiComponentRefSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};
