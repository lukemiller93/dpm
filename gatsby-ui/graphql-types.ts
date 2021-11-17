export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SanityAuthor = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  image?: Maybe<SanityImage>;
  bio?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawBio?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityAuthor_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityAuthor_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityAuthor_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityAuthor_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityAuthor_RawBioArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockOrImage = SanityBlock | SanityImage;

export type SanityBlockOrLinkCreatorOrMainImage = SanityBlock | SanityLinkCreator | SanityMainImage;

export type SanityBodySection = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawContent?: Maybe<Scalars['JSON']>;
};


export type SanityBodySection_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBodySectionOrGridContentOrHeroOrUiComponentRef = SanityBodySection | SanityGridContent | SanityHero | SanityUiComponentRef;

export type SanityCategory = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<SanityImage>;
  _rawIcon?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityCategory_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityCategory_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityCategory_RawIconArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityColorlist = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SanityColorListing = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  colors?: Maybe<SanityColorlist>;
  _rawColors?: Maybe<Scalars['JSON']>;
};


export type SanityColorListing_RawColorsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
};

export type SanityFile = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
  _rawAsset?: Maybe<Scalars['JSON']>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityFooter = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  footerLogo?: Maybe<SanityMainImage>;
  missionStatement?: Maybe<Array<Maybe<SanityBlock>>>;
  address?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawMissionStatement?: Maybe<Scalars['JSON']>;
  _rawAddress?: Maybe<Scalars['JSON']>;
  _rawFooterLogo?: Maybe<Scalars['JSON']>;
};


export type SanityFooter_RawMissionStatementArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityFooter_RawAddressArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityFooter_RawFooterLogoArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityGeopoint = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityGridContent = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef>>>;
  _rawColumns?: Maybe<Scalars['JSON']>;
};


export type SanityGridContent_RawColumnsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityHero = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  illustration?: Maybe<SanityIllustration>;
  cta?: Maybe<SanityLinkCreator>;
  headLine?: Maybe<Array<Maybe<SanityBlock>>>;
  heading?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawHeadLine?: Maybe<Scalars['JSON']>;
  _rawHeading?: Maybe<Scalars['JSON']>;
  _rawIllustration?: Maybe<Scalars['JSON']>;
  _rawCta?: Maybe<Scalars['JSON']>;
};


export type SanityHero_RawHeadLineArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHero_RawHeadingArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHero_RawIllustrationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityHero_RawCtaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityIllustration = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityMainImage>;
  _rawImage?: Maybe<Scalars['JSON']>;
};


export type SanityIllustration_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef = SanityIllustration | SanityService | SanitySingleColumn | SanityUiComponentRef;

export type SanityImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageGallery = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<SanityIllustration>>>;
  _rawGallery?: Maybe<Scalars['JSON']>;
};


export type SanityImageGallery_RawGalleryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityLinkCreator = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  sitePageRoute?: Maybe<SanityPageOrRoute>;
  route?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<SanityColorListing>;
  _rawSitePageRoute?: Maybe<Scalars['JSON']>;
  _rawBackgroundColor?: Maybe<Scalars['JSON']>;
};


export type SanityLinkCreator_RawSitePageRouteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityLinkCreator_RawBackgroundColorArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityLocation = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type SanityMainImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  objectFit?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityMainImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityMainImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityMainImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityNavigationMenu = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SanityLinkCreator>>>;
  _rawItems?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityNavigationMenu_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityNavigationMenu_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityNavigationMenu_RawItemsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityOpenGraph = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<SanityMainImage>;
  _rawImage?: Maybe<Scalars['JSON']>;
};


export type SanityOpenGraph_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  navMenu?: Maybe<SanityNavigationMenu>;
  content?: Maybe<Array<Maybe<SanityBodySectionOrGridContentOrHeroOrUiComponentRef>>>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawNavMenu?: Maybe<Scalars['JSON']>;
  _rawContent?: Maybe<Scalars['JSON']>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPage_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPage_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPage_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawNavMenuArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPageGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type SanityPageOrRoute = SanityPage | SanityRoute;

export type SanityPost = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  author?: Maybe<SanityAuthor>;
  mainImage?: Maybe<SanityImage>;
  categories?: Maybe<Array<Maybe<SanityCategory>>>;
  publishedAt?: Maybe<Scalars['Date']>;
  body?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawAuthor?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  _rawCategories?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPost_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPost_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPostPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPost_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawAuthorArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawMainImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawCategoriesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawBodyArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityProject = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  author?: Maybe<SanityAuthor>;
  mainImage?: Maybe<SanityMainImage>;
  categories?: Maybe<Array<Maybe<SanityCategory>>>;
  projectGallery?: Maybe<SanityImageGallery>;
  publishedAt?: Maybe<Scalars['Date']>;
  body?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawAuthor?: Maybe<Scalars['JSON']>;
  _rawMainImage?: Maybe<Scalars['JSON']>;
  _rawCategories?: Maybe<Scalars['JSON']>;
  _rawProjectGallery?: Maybe<Scalars['JSON']>;
  _rawBody?: Maybe<Scalars['JSON']>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityProject_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProject_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProjectPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProject_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProject_RawAuthorArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProject_RawMainImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProject_RawCategoriesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProject_RawProjectGalleryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProject_RawBodyArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProjectGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type SanityRoute = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  page?: Maybe<SanityPage>;
  slug?: Maybe<SanitySlug>;
  useSiteTitle?: Maybe<Scalars['Boolean']>;
  openGraph?: Maybe<SanityOpenGraph>;
  includeInSitemap?: Maybe<Scalars['Boolean']>;
  disallowRobots?: Maybe<Scalars['Boolean']>;
  _rawPage?: Maybe<Scalars['JSON']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawOpenGraph?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityRoute_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityRoute_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityRoute_RawPageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityRoute_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityRoute_RawOpenGraphArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
  _rawSource?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<SanityImageFit>;
};

export type SanityGatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'NONE';

export type SanityImageFit =
  | 'CLIP'
  | 'CROP'
  | 'FILL'
  | 'FILLMAX'
  | 'MAX'
  | 'SCALE'
  | 'MIN';

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityService = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawDescription?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityService_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityService_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityService_RawDescriptionArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySingleColumn = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawContent?: Maybe<Scalars['JSON']>;
};


export type SanitySingleColumn_RawContentArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySiteSettings = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  openGraph?: Maybe<SanityOpenGraph>;
  socialLinks?: Maybe<Array<Maybe<SanitySocialLink>>>;
  headerLogo?: Maybe<SanityMainImage>;
  footer?: Maybe<SanityFooter>;
  _rawOpenGraph?: Maybe<Scalars['JSON']>;
  _rawSocialLinks?: Maybe<Scalars['JSON']>;
  _rawHeaderLogo?: Maybe<Scalars['JSON']>;
  _rawFooter?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySiteSettings_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettings_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettings_RawOpenGraphArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettings_RawSocialLinksArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettings_RawHeaderLogoArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettings_RawFooterArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySlug = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySocialLink = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanitySpan = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanityUiComponentRef = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sanityAuthor?: Maybe<SanityAuthor>;
  allSanityAuthor: SanityAuthorConnection;
  sanityCategory?: Maybe<SanityCategory>;
  allSanityCategory: SanityCategoryConnection;
  sanityNavigationMenu?: Maybe<SanityNavigationMenu>;
  allSanityNavigationMenu: SanityNavigationMenuConnection;
  sanityPage?: Maybe<SanityPage>;
  allSanityPage: SanityPageConnection;
  sanityPost?: Maybe<SanityPost>;
  allSanityPost: SanityPostConnection;
  sanityProject?: Maybe<SanityProject>;
  allSanityProject: SanityProjectConnection;
  sanityRoute?: Maybe<SanityRoute>;
  allSanityRoute: SanityRouteConnection;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  sanityService?: Maybe<SanityService>;
  allSanityService: SanityServiceConnection;
  sanitySiteSettings?: Maybe<SanitySiteSettings>;
  allSanitySiteSettings: SanitySiteSettingsConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityAuthorArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  image?: InputMaybe<SanityImageFilterInput>;
  bio?: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawBio?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityAuthorArgs = {
  filter?: InputMaybe<SanityAuthorFilterInput>;
  sort?: InputMaybe<SanityAuthorSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityCategoryArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<SanityImageFilterInput>;
  _rawIcon?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityCategoryArgs = {
  filter?: InputMaybe<SanityCategoryFilterInput>;
  sort?: InputMaybe<SanityCategorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityNavigationMenuArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  items?: InputMaybe<SanityLinkCreatorFilterListInput>;
  _rawItems?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityNavigationMenuArgs = {
  filter?: InputMaybe<SanityNavigationMenuFilterInput>;
  sort?: InputMaybe<SanityNavigationMenuSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPageArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  navMenu?: InputMaybe<SanityNavigationMenuFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawNavMenu?: InputMaybe<JsonQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPageArgs = {
  filter?: InputMaybe<SanityPageFilterInput>;
  sort?: InputMaybe<SanityPageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPostArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
  mainImage?: InputMaybe<SanityImageFilterInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPostArgs = {
  filter?: InputMaybe<SanityPostFilterInput>;
  sort?: InputMaybe<SanityPostSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityProjectArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
  mainImage?: InputMaybe<SanityMainImageFilterInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  projectGallery?: InputMaybe<SanityImageGalleryFilterInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawProjectGallery?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityProjectArgs = {
  filter?: InputMaybe<SanityProjectFilterInput>;
  sort?: InputMaybe<SanityProjectSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityRouteArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<SanityPageFilterInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  useSiteTitle?: InputMaybe<BooleanQueryOperatorInput>;
  openGraph?: InputMaybe<SanityOpenGraphFilterInput>;
  includeInSitemap?: InputMaybe<BooleanQueryOperatorInput>;
  disallowRobots?: InputMaybe<BooleanQueryOperatorInput>;
  _rawPage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawOpenGraph?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityRouteArgs = {
  filter?: InputMaybe<SanityRouteFilterInput>;
  sort?: InputMaybe<SanityRouteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityFileAssetArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: InputMaybe<SanityFileAssetFilterInput>;
  sort?: InputMaybe<SanityFileAssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityImageAssetArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: InputMaybe<SanityImageAssetFilterInput>;
  sort?: InputMaybe<SanityImageAssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityServiceArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<SanityBlockFilterListInput>;
  _rawDescription?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityServiceArgs = {
  filter?: InputMaybe<SanityServiceFilterInput>;
  sort?: InputMaybe<SanityServiceSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanitySiteSettingsArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  openGraph?: InputMaybe<SanityOpenGraphFilterInput>;
  socialLinks?: InputMaybe<SanitySocialLinkFilterListInput>;
  headerLogo?: InputMaybe<SanityMainImageFilterInput>;
  footer?: InputMaybe<SanityFooterFilterInput>;
  _rawOpenGraph?: InputMaybe<JsonQueryOperatorInput>;
  _rawSocialLinks?: InputMaybe<JsonQueryOperatorInput>;
  _rawHeaderLogo?: InputMaybe<JsonQueryOperatorInput>;
  _rawFooter?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanitySiteSettingsArgs = {
  filter?: InputMaybe<SanitySiteSettingsFilterInput>;
  sort?: InputMaybe<SanitySiteSettingsSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'jsxRuntime'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySlugFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  current?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityImageAssetFilterInput>;
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>;
  crop?: InputMaybe<SanityImageCropFilterInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImageAssetFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityImageMetadataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<SanityGeopointFilterInput>;
  dimensions?: InputMaybe<SanityImageDimensionsFilterInput>;
  palette?: InputMaybe<SanityImagePaletteFilterInput>;
  lqip?: InputMaybe<StringQueryOperatorInput>;
  hasAlpha?: InputMaybe<BooleanQueryOperatorInput>;
  isOpaque?: InputMaybe<BooleanQueryOperatorInput>;
  _rawLocation?: InputMaybe<JsonQueryOperatorInput>;
  _rawDimensions?: InputMaybe<JsonQueryOperatorInput>;
  _rawPalette?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityGeopointFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  lat?: InputMaybe<FloatQueryOperatorInput>;
  lng?: InputMaybe<FloatQueryOperatorInput>;
  alt?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImagePaletteFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDominant?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawMuted?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  background?: InputMaybe<StringQueryOperatorInput>;
  foreground?: InputMaybe<StringQueryOperatorInput>;
  population?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageHotspotFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageCropFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  top?: InputMaybe<FloatQueryOperatorInput>;
  bottom?: InputMaybe<FloatQueryOperatorInput>;
  left?: InputMaybe<FloatQueryOperatorInput>;
  right?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: InputMaybe<SanityBlockFilterInput>;
};

export type SanityBlockFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<SanitySpanFilterListInput>;
  style?: InputMaybe<StringQueryOperatorInput>;
  list?: InputMaybe<StringQueryOperatorInput>;
  _rawChildren?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: InputMaybe<SanitySpanFilterInput>;
};

export type SanitySpanFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  marks?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAuthorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityAuthorEdge>;
  nodes: Array<SanityAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityAuthorGroupConnection>;
};


export type SanityAuthorConnectionDistinctArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorConnectionMaxArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorConnectionMinArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorConnectionSumArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorEdge = {
  next?: Maybe<SanityAuthor>;
  node: SanityAuthor;
  previous?: Maybe<SanityAuthor>;
};

export type SanityAuthorFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'name'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'image____key'
  | 'image____type'
  | 'image___asset____id'
  | 'image___asset____type'
  | 'image___asset____createdAt'
  | 'image___asset____updatedAt'
  | 'image___asset____rev'
  | 'image___asset____key'
  | 'image___asset___originalFilename'
  | 'image___asset___label'
  | 'image___asset___title'
  | 'image___asset___description'
  | 'image___asset___altText'
  | 'image___asset___sha1hash'
  | 'image___asset___extension'
  | 'image___asset___mimeType'
  | 'image___asset___size'
  | 'image___asset___assetId'
  | 'image___asset___path'
  | 'image___asset___url'
  | 'image___asset___metadata____key'
  | 'image___asset___metadata____type'
  | 'image___asset___metadata___lqip'
  | 'image___asset___metadata___hasAlpha'
  | 'image___asset___metadata___isOpaque'
  | 'image___asset___metadata____rawLocation'
  | 'image___asset___metadata____rawDimensions'
  | 'image___asset___metadata____rawPalette'
  | 'image___asset___source____key'
  | 'image___asset___source____type'
  | 'image___asset___source___name'
  | 'image___asset___source___id'
  | 'image___asset___source___url'
  | 'image___asset____rawMetadata'
  | 'image___asset____rawSource'
  | 'image___asset___gatsbyImageData'
  | 'image___asset___id'
  | 'image___asset___parent___id'
  | 'image___asset___parent___children'
  | 'image___asset___children'
  | 'image___asset___children___id'
  | 'image___asset___children___children'
  | 'image___asset___internal___content'
  | 'image___asset___internal___contentDigest'
  | 'image___asset___internal___description'
  | 'image___asset___internal___fieldOwners'
  | 'image___asset___internal___ignoreType'
  | 'image___asset___internal___mediaType'
  | 'image___asset___internal___owner'
  | 'image___asset___internal___type'
  | 'image___hotspot____key'
  | 'image___hotspot____type'
  | 'image___hotspot___x'
  | 'image___hotspot___y'
  | 'image___hotspot___height'
  | 'image___hotspot___width'
  | 'image___crop____key'
  | 'image___crop____type'
  | 'image___crop___top'
  | 'image___crop___bottom'
  | 'image___crop___left'
  | 'image___crop___right'
  | 'image____rawAsset'
  | 'image____rawHotspot'
  | 'image____rawCrop'
  | 'bio'
  | 'bio____key'
  | 'bio____type'
  | 'bio___children'
  | 'bio___children____key'
  | 'bio___children____type'
  | 'bio___children___marks'
  | 'bio___children___text'
  | 'bio___style'
  | 'bio___list'
  | 'bio____rawChildren'
  | '_rawSlug'
  | '_rawImage'
  | '_rawBio'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityAuthorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityAuthorEdge>;
  nodes: Array<SanityAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityAuthorGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityAuthorGroupConnectionDistinctArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorGroupConnectionMaxArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorGroupConnectionMinArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorGroupConnectionSumArgs = {
  field: SanityAuthorFieldsEnum;
};


export type SanityAuthorGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  image?: InputMaybe<SanityImageFilterInput>;
  bio?: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawBio?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityCategoryEdge>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityCategoryGroupConnection>;
};


export type SanityCategoryConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryEdge = {
  next?: Maybe<SanityCategory>;
  node: SanityCategory;
  previous?: Maybe<SanityCategory>;
};

export type SanityCategoryFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'description'
  | 'icon____key'
  | 'icon____type'
  | 'icon___asset____id'
  | 'icon___asset____type'
  | 'icon___asset____createdAt'
  | 'icon___asset____updatedAt'
  | 'icon___asset____rev'
  | 'icon___asset____key'
  | 'icon___asset___originalFilename'
  | 'icon___asset___label'
  | 'icon___asset___title'
  | 'icon___asset___description'
  | 'icon___asset___altText'
  | 'icon___asset___sha1hash'
  | 'icon___asset___extension'
  | 'icon___asset___mimeType'
  | 'icon___asset___size'
  | 'icon___asset___assetId'
  | 'icon___asset___path'
  | 'icon___asset___url'
  | 'icon___asset___metadata____key'
  | 'icon___asset___metadata____type'
  | 'icon___asset___metadata___lqip'
  | 'icon___asset___metadata___hasAlpha'
  | 'icon___asset___metadata___isOpaque'
  | 'icon___asset___metadata____rawLocation'
  | 'icon___asset___metadata____rawDimensions'
  | 'icon___asset___metadata____rawPalette'
  | 'icon___asset___source____key'
  | 'icon___asset___source____type'
  | 'icon___asset___source___name'
  | 'icon___asset___source___id'
  | 'icon___asset___source___url'
  | 'icon___asset____rawMetadata'
  | 'icon___asset____rawSource'
  | 'icon___asset___gatsbyImageData'
  | 'icon___asset___id'
  | 'icon___asset___parent___id'
  | 'icon___asset___parent___children'
  | 'icon___asset___children'
  | 'icon___asset___children___id'
  | 'icon___asset___children___children'
  | 'icon___asset___internal___content'
  | 'icon___asset___internal___contentDigest'
  | 'icon___asset___internal___description'
  | 'icon___asset___internal___fieldOwners'
  | 'icon___asset___internal___ignoreType'
  | 'icon___asset___internal___mediaType'
  | 'icon___asset___internal___owner'
  | 'icon___asset___internal___type'
  | 'icon___hotspot____key'
  | 'icon___hotspot____type'
  | 'icon___hotspot___x'
  | 'icon___hotspot___y'
  | 'icon___hotspot___height'
  | 'icon___hotspot___width'
  | 'icon___crop____key'
  | 'icon___crop____type'
  | 'icon___crop___top'
  | 'icon___crop___bottom'
  | 'icon___crop___left'
  | 'icon___crop___right'
  | 'icon____rawAsset'
  | 'icon____rawHotspot'
  | 'icon____rawCrop'
  | '_rawIcon'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityCategoryEdge>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityCategoryGroupConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};


export type SanityCategoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<SanityImageFilterInput>;
  _rawIcon?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityLinkCreatorFilterListInput = {
  elemMatch?: InputMaybe<SanityLinkCreatorFilterInput>;
};

export type SanityLinkCreatorFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  route?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  kind?: InputMaybe<StringQueryOperatorInput>;
  backgroundColor?: InputMaybe<SanityColorListingFilterInput>;
  _rawSitePageRoute?: InputMaybe<JsonQueryOperatorInput>;
  _rawBackgroundColor?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityColorListingFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  colors?: InputMaybe<SanityColorlistFilterInput>;
  _rawColors?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityColorlistFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityNavigationMenuConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityNavigationMenuEdge>;
  nodes: Array<SanityNavigationMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityNavigationMenuGroupConnection>;
};


export type SanityNavigationMenuConnectionDistinctArgs = {
  field: SanityNavigationMenuFieldsEnum;
};


export type SanityNavigationMenuConnectionMaxArgs = {
  field: SanityNavigationMenuFieldsEnum;
};


export type SanityNavigationMenuConnectionMinArgs = {
  field: SanityNavigationMenuFieldsEnum;
};


export type SanityNavigationMenuConnectionSumArgs = {
  field: SanityNavigationMenuFieldsEnum;
};


export type SanityNavigationMenuConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityNavigationMenuFieldsEnum;
};

export type SanityNavigationMenuEdge = {
  next?: Maybe<SanityNavigationMenu>;
  node: SanityNavigationMenu;
  previous?: Maybe<SanityNavigationMenu>;
};

export type SanityNavigationMenuFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'items'
  | 'items____key'
  | 'items____type'
  | 'items___title'
  | 'items___route'
  | 'items___link'
  | 'items___kind'
  | 'items___backgroundColor____key'
  | 'items___backgroundColor____type'
  | 'items___backgroundColor___colors____key'
  | 'items___backgroundColor___colors____type'
  | 'items___backgroundColor___colors___title'
  | 'items___backgroundColor___colors___value'
  | 'items___backgroundColor____rawColors'
  | 'items____rawSitePageRoute'
  | 'items____rawBackgroundColor'
  | '_rawItems'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityNavigationMenuGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityNavigationMenuEdge>;
  nodes: Array<SanityNavigationMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityNavigationMenuGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityNavigationMenuGroupConnectionDistinctArgs = {
  field: SanityNavigationMenuFieldsEnum;
};


export type SanityNavigationMenuGroupConnectionMaxArgs = {
  field: SanityNavigationMenuFieldsEnum;
};


export type SanityNavigationMenuGroupConnectionMinArgs = {
  field: SanityNavigationMenuFieldsEnum;
};


export type SanityNavigationMenuGroupConnectionSumArgs = {
  field: SanityNavigationMenuFieldsEnum;
};


export type SanityNavigationMenuGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityNavigationMenuFieldsEnum;
};

export type SanityNavigationMenuFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  items?: InputMaybe<SanityLinkCreatorFilterListInput>;
  _rawItems?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityNavigationMenuSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityNavigationMenuFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
};


export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionMaxArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionMinArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionSumArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageEdge = {
  next?: Maybe<SanityPage>;
  node: SanityPage;
  previous?: Maybe<SanityPage>;
};

export type SanityPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'navMenu____id'
  | 'navMenu____type'
  | 'navMenu____createdAt'
  | 'navMenu____updatedAt'
  | 'navMenu____rev'
  | 'navMenu____key'
  | 'navMenu___title'
  | 'navMenu___items'
  | 'navMenu___items____key'
  | 'navMenu___items____type'
  | 'navMenu___items___title'
  | 'navMenu___items___route'
  | 'navMenu___items___link'
  | 'navMenu___items___kind'
  | 'navMenu___items___backgroundColor____key'
  | 'navMenu___items___backgroundColor____type'
  | 'navMenu___items___backgroundColor____rawColors'
  | 'navMenu___items____rawSitePageRoute'
  | 'navMenu___items____rawBackgroundColor'
  | 'navMenu____rawItems'
  | 'navMenu___id'
  | 'navMenu___parent___id'
  | 'navMenu___parent___parent___id'
  | 'navMenu___parent___parent___children'
  | 'navMenu___parent___children'
  | 'navMenu___parent___children___id'
  | 'navMenu___parent___children___children'
  | 'navMenu___parent___internal___content'
  | 'navMenu___parent___internal___contentDigest'
  | 'navMenu___parent___internal___description'
  | 'navMenu___parent___internal___fieldOwners'
  | 'navMenu___parent___internal___ignoreType'
  | 'navMenu___parent___internal___mediaType'
  | 'navMenu___parent___internal___owner'
  | 'navMenu___parent___internal___type'
  | 'navMenu___children'
  | 'navMenu___children___id'
  | 'navMenu___children___parent___id'
  | 'navMenu___children___parent___children'
  | 'navMenu___children___children'
  | 'navMenu___children___children___id'
  | 'navMenu___children___children___children'
  | 'navMenu___children___internal___content'
  | 'navMenu___children___internal___contentDigest'
  | 'navMenu___children___internal___description'
  | 'navMenu___children___internal___fieldOwners'
  | 'navMenu___children___internal___ignoreType'
  | 'navMenu___children___internal___mediaType'
  | 'navMenu___children___internal___owner'
  | 'navMenu___children___internal___type'
  | 'navMenu___internal___content'
  | 'navMenu___internal___contentDigest'
  | 'navMenu___internal___description'
  | 'navMenu___internal___fieldOwners'
  | 'navMenu___internal___ignoreType'
  | 'navMenu___internal___mediaType'
  | 'navMenu___internal___owner'
  | 'navMenu___internal___type'
  | '_rawSlug'
  | '_rawNavMenu'
  | '_rawContent'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPageGroupConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionMaxArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionMinArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionSumArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  navMenu?: InputMaybe<SanityNavigationMenuFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawNavMenu?: InputMaybe<JsonQueryOperatorInput>;
  _rawContent?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityCategoryFilterListInput = {
  elemMatch?: InputMaybe<SanityCategoryFilterInput>;
};

export type SanityPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
};


export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPostFieldsEnum;
};

export type SanityPostEdge = {
  next?: Maybe<SanityPost>;
  node: SanityPost;
  previous?: Maybe<SanityPost>;
};

export type SanityPostFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'author____id'
  | 'author____type'
  | 'author____createdAt'
  | 'author____updatedAt'
  | 'author____rev'
  | 'author____key'
  | 'author___name'
  | 'author___slug____key'
  | 'author___slug____type'
  | 'author___slug___current'
  | 'author___image____key'
  | 'author___image____type'
  | 'author___image___asset____id'
  | 'author___image___asset____type'
  | 'author___image___asset____createdAt'
  | 'author___image___asset____updatedAt'
  | 'author___image___asset____rev'
  | 'author___image___asset____key'
  | 'author___image___asset___originalFilename'
  | 'author___image___asset___label'
  | 'author___image___asset___title'
  | 'author___image___asset___description'
  | 'author___image___asset___altText'
  | 'author___image___asset___sha1hash'
  | 'author___image___asset___extension'
  | 'author___image___asset___mimeType'
  | 'author___image___asset___size'
  | 'author___image___asset___assetId'
  | 'author___image___asset___path'
  | 'author___image___asset___url'
  | 'author___image___asset____rawMetadata'
  | 'author___image___asset____rawSource'
  | 'author___image___asset___gatsbyImageData'
  | 'author___image___asset___id'
  | 'author___image___asset___children'
  | 'author___image___hotspot____key'
  | 'author___image___hotspot____type'
  | 'author___image___hotspot___x'
  | 'author___image___hotspot___y'
  | 'author___image___hotspot___height'
  | 'author___image___hotspot___width'
  | 'author___image___crop____key'
  | 'author___image___crop____type'
  | 'author___image___crop___top'
  | 'author___image___crop___bottom'
  | 'author___image___crop___left'
  | 'author___image___crop___right'
  | 'author___image____rawAsset'
  | 'author___image____rawHotspot'
  | 'author___image____rawCrop'
  | 'author___bio'
  | 'author___bio____key'
  | 'author___bio____type'
  | 'author___bio___children'
  | 'author___bio___children____key'
  | 'author___bio___children____type'
  | 'author___bio___children___marks'
  | 'author___bio___children___text'
  | 'author___bio___style'
  | 'author___bio___list'
  | 'author___bio____rawChildren'
  | 'author____rawSlug'
  | 'author____rawImage'
  | 'author____rawBio'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | 'categories'
  | 'categories____id'
  | 'categories____type'
  | 'categories____createdAt'
  | 'categories____updatedAt'
  | 'categories____rev'
  | 'categories____key'
  | 'categories___title'
  | 'categories___description'
  | 'categories___icon____key'
  | 'categories___icon____type'
  | 'categories___icon___asset____id'
  | 'categories___icon___asset____type'
  | 'categories___icon___asset____createdAt'
  | 'categories___icon___asset____updatedAt'
  | 'categories___icon___asset____rev'
  | 'categories___icon___asset____key'
  | 'categories___icon___asset___originalFilename'
  | 'categories___icon___asset___label'
  | 'categories___icon___asset___title'
  | 'categories___icon___asset___description'
  | 'categories___icon___asset___altText'
  | 'categories___icon___asset___sha1hash'
  | 'categories___icon___asset___extension'
  | 'categories___icon___asset___mimeType'
  | 'categories___icon___asset___size'
  | 'categories___icon___asset___assetId'
  | 'categories___icon___asset___path'
  | 'categories___icon___asset___url'
  | 'categories___icon___asset____rawMetadata'
  | 'categories___icon___asset____rawSource'
  | 'categories___icon___asset___gatsbyImageData'
  | 'categories___icon___asset___id'
  | 'categories___icon___asset___children'
  | 'categories___icon___hotspot____key'
  | 'categories___icon___hotspot____type'
  | 'categories___icon___hotspot___x'
  | 'categories___icon___hotspot___y'
  | 'categories___icon___hotspot___height'
  | 'categories___icon___hotspot___width'
  | 'categories___icon___crop____key'
  | 'categories___icon___crop____type'
  | 'categories___icon___crop___top'
  | 'categories___icon___crop___bottom'
  | 'categories___icon___crop___left'
  | 'categories___icon___crop___right'
  | 'categories___icon____rawAsset'
  | 'categories___icon____rawHotspot'
  | 'categories___icon____rawCrop'
  | 'categories____rawIcon'
  | 'categories___id'
  | 'categories___parent___id'
  | 'categories___parent___parent___id'
  | 'categories___parent___parent___children'
  | 'categories___parent___children'
  | 'categories___parent___children___id'
  | 'categories___parent___children___children'
  | 'categories___parent___internal___content'
  | 'categories___parent___internal___contentDigest'
  | 'categories___parent___internal___description'
  | 'categories___parent___internal___fieldOwners'
  | 'categories___parent___internal___ignoreType'
  | 'categories___parent___internal___mediaType'
  | 'categories___parent___internal___owner'
  | 'categories___parent___internal___type'
  | 'categories___children'
  | 'categories___children___id'
  | 'categories___children___parent___id'
  | 'categories___children___parent___children'
  | 'categories___children___children'
  | 'categories___children___children___id'
  | 'categories___children___children___children'
  | 'categories___children___internal___content'
  | 'categories___children___internal___contentDigest'
  | 'categories___children___internal___description'
  | 'categories___children___internal___fieldOwners'
  | 'categories___children___internal___ignoreType'
  | 'categories___children___internal___mediaType'
  | 'categories___children___internal___owner'
  | 'categories___children___internal___type'
  | 'categories___internal___content'
  | 'categories___internal___contentDigest'
  | 'categories___internal___description'
  | 'categories___internal___fieldOwners'
  | 'categories___internal___ignoreType'
  | 'categories___internal___mediaType'
  | 'categories___internal___owner'
  | 'categories___internal___type'
  | 'publishedAt'
  | 'body'
  | 'body____key'
  | 'body____type'
  | 'body___children'
  | 'body___children____key'
  | 'body___children____type'
  | 'body___children___marks'
  | 'body___children___text'
  | 'body___style'
  | 'body___list'
  | 'body____rawChildren'
  | '_rawSlug'
  | '_rawAuthor'
  | '_rawMainImage'
  | '_rawCategories'
  | '_rawBody'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPostGroupConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPostFieldsEnum;
};

export type SanityPostFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
  mainImage?: InputMaybe<SanityImageFilterInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityMainImageFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityImageAssetFilterInput>;
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>;
  crop?: InputMaybe<SanityImageCropFilterInput>;
  objectFit?: InputMaybe<StringQueryOperatorInput>;
  alt?: InputMaybe<StringQueryOperatorInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImageGalleryFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  gallery?: InputMaybe<SanityIllustrationFilterListInput>;
  _rawGallery?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityIllustrationFilterListInput = {
  elemMatch?: InputMaybe<SanityIllustrationFilterInput>;
};

export type SanityIllustrationFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<SanityMainImageFilterInput>;
  _rawImage?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityProjectConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProjectEdge>;
  nodes: Array<SanityProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityProjectGroupConnection>;
};


export type SanityProjectConnectionDistinctArgs = {
  field: SanityProjectFieldsEnum;
};


export type SanityProjectConnectionMaxArgs = {
  field: SanityProjectFieldsEnum;
};


export type SanityProjectConnectionMinArgs = {
  field: SanityProjectFieldsEnum;
};


export type SanityProjectConnectionSumArgs = {
  field: SanityProjectFieldsEnum;
};


export type SanityProjectConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityProjectFieldsEnum;
};

export type SanityProjectEdge = {
  next?: Maybe<SanityProject>;
  node: SanityProject;
  previous?: Maybe<SanityProject>;
};

export type SanityProjectFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'author____id'
  | 'author____type'
  | 'author____createdAt'
  | 'author____updatedAt'
  | 'author____rev'
  | 'author____key'
  | 'author___name'
  | 'author___slug____key'
  | 'author___slug____type'
  | 'author___slug___current'
  | 'author___image____key'
  | 'author___image____type'
  | 'author___image___asset____id'
  | 'author___image___asset____type'
  | 'author___image___asset____createdAt'
  | 'author___image___asset____updatedAt'
  | 'author___image___asset____rev'
  | 'author___image___asset____key'
  | 'author___image___asset___originalFilename'
  | 'author___image___asset___label'
  | 'author___image___asset___title'
  | 'author___image___asset___description'
  | 'author___image___asset___altText'
  | 'author___image___asset___sha1hash'
  | 'author___image___asset___extension'
  | 'author___image___asset___mimeType'
  | 'author___image___asset___size'
  | 'author___image___asset___assetId'
  | 'author___image___asset___path'
  | 'author___image___asset___url'
  | 'author___image___asset____rawMetadata'
  | 'author___image___asset____rawSource'
  | 'author___image___asset___gatsbyImageData'
  | 'author___image___asset___id'
  | 'author___image___asset___children'
  | 'author___image___hotspot____key'
  | 'author___image___hotspot____type'
  | 'author___image___hotspot___x'
  | 'author___image___hotspot___y'
  | 'author___image___hotspot___height'
  | 'author___image___hotspot___width'
  | 'author___image___crop____key'
  | 'author___image___crop____type'
  | 'author___image___crop___top'
  | 'author___image___crop___bottom'
  | 'author___image___crop___left'
  | 'author___image___crop___right'
  | 'author___image____rawAsset'
  | 'author___image____rawHotspot'
  | 'author___image____rawCrop'
  | 'author___bio'
  | 'author___bio____key'
  | 'author___bio____type'
  | 'author___bio___children'
  | 'author___bio___children____key'
  | 'author___bio___children____type'
  | 'author___bio___children___marks'
  | 'author___bio___children___text'
  | 'author___bio___style'
  | 'author___bio___list'
  | 'author___bio____rawChildren'
  | 'author____rawSlug'
  | 'author____rawImage'
  | 'author____rawBio'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'mainImage____key'
  | 'mainImage____type'
  | 'mainImage___asset____id'
  | 'mainImage___asset____type'
  | 'mainImage___asset____createdAt'
  | 'mainImage___asset____updatedAt'
  | 'mainImage___asset____rev'
  | 'mainImage___asset____key'
  | 'mainImage___asset___originalFilename'
  | 'mainImage___asset___label'
  | 'mainImage___asset___title'
  | 'mainImage___asset___description'
  | 'mainImage___asset___altText'
  | 'mainImage___asset___sha1hash'
  | 'mainImage___asset___extension'
  | 'mainImage___asset___mimeType'
  | 'mainImage___asset___size'
  | 'mainImage___asset___assetId'
  | 'mainImage___asset___path'
  | 'mainImage___asset___url'
  | 'mainImage___asset___metadata____key'
  | 'mainImage___asset___metadata____type'
  | 'mainImage___asset___metadata___lqip'
  | 'mainImage___asset___metadata___hasAlpha'
  | 'mainImage___asset___metadata___isOpaque'
  | 'mainImage___asset___metadata____rawLocation'
  | 'mainImage___asset___metadata____rawDimensions'
  | 'mainImage___asset___metadata____rawPalette'
  | 'mainImage___asset___source____key'
  | 'mainImage___asset___source____type'
  | 'mainImage___asset___source___name'
  | 'mainImage___asset___source___id'
  | 'mainImage___asset___source___url'
  | 'mainImage___asset____rawMetadata'
  | 'mainImage___asset____rawSource'
  | 'mainImage___asset___gatsbyImageData'
  | 'mainImage___asset___id'
  | 'mainImage___asset___parent___id'
  | 'mainImage___asset___parent___children'
  | 'mainImage___asset___children'
  | 'mainImage___asset___children___id'
  | 'mainImage___asset___children___children'
  | 'mainImage___asset___internal___content'
  | 'mainImage___asset___internal___contentDigest'
  | 'mainImage___asset___internal___description'
  | 'mainImage___asset___internal___fieldOwners'
  | 'mainImage___asset___internal___ignoreType'
  | 'mainImage___asset___internal___mediaType'
  | 'mainImage___asset___internal___owner'
  | 'mainImage___asset___internal___type'
  | 'mainImage___hotspot____key'
  | 'mainImage___hotspot____type'
  | 'mainImage___hotspot___x'
  | 'mainImage___hotspot___y'
  | 'mainImage___hotspot___height'
  | 'mainImage___hotspot___width'
  | 'mainImage___crop____key'
  | 'mainImage___crop____type'
  | 'mainImage___crop___top'
  | 'mainImage___crop___bottom'
  | 'mainImage___crop___left'
  | 'mainImage___crop___right'
  | 'mainImage___objectFit'
  | 'mainImage___alt'
  | 'mainImage____rawAsset'
  | 'mainImage____rawHotspot'
  | 'mainImage____rawCrop'
  | 'categories'
  | 'categories____id'
  | 'categories____type'
  | 'categories____createdAt'
  | 'categories____updatedAt'
  | 'categories____rev'
  | 'categories____key'
  | 'categories___title'
  | 'categories___description'
  | 'categories___icon____key'
  | 'categories___icon____type'
  | 'categories___icon___asset____id'
  | 'categories___icon___asset____type'
  | 'categories___icon___asset____createdAt'
  | 'categories___icon___asset____updatedAt'
  | 'categories___icon___asset____rev'
  | 'categories___icon___asset____key'
  | 'categories___icon___asset___originalFilename'
  | 'categories___icon___asset___label'
  | 'categories___icon___asset___title'
  | 'categories___icon___asset___description'
  | 'categories___icon___asset___altText'
  | 'categories___icon___asset___sha1hash'
  | 'categories___icon___asset___extension'
  | 'categories___icon___asset___mimeType'
  | 'categories___icon___asset___size'
  | 'categories___icon___asset___assetId'
  | 'categories___icon___asset___path'
  | 'categories___icon___asset___url'
  | 'categories___icon___asset____rawMetadata'
  | 'categories___icon___asset____rawSource'
  | 'categories___icon___asset___gatsbyImageData'
  | 'categories___icon___asset___id'
  | 'categories___icon___asset___children'
  | 'categories___icon___hotspot____key'
  | 'categories___icon___hotspot____type'
  | 'categories___icon___hotspot___x'
  | 'categories___icon___hotspot___y'
  | 'categories___icon___hotspot___height'
  | 'categories___icon___hotspot___width'
  | 'categories___icon___crop____key'
  | 'categories___icon___crop____type'
  | 'categories___icon___crop___top'
  | 'categories___icon___crop___bottom'
  | 'categories___icon___crop___left'
  | 'categories___icon___crop___right'
  | 'categories___icon____rawAsset'
  | 'categories___icon____rawHotspot'
  | 'categories___icon____rawCrop'
  | 'categories____rawIcon'
  | 'categories___id'
  | 'categories___parent___id'
  | 'categories___parent___parent___id'
  | 'categories___parent___parent___children'
  | 'categories___parent___children'
  | 'categories___parent___children___id'
  | 'categories___parent___children___children'
  | 'categories___parent___internal___content'
  | 'categories___parent___internal___contentDigest'
  | 'categories___parent___internal___description'
  | 'categories___parent___internal___fieldOwners'
  | 'categories___parent___internal___ignoreType'
  | 'categories___parent___internal___mediaType'
  | 'categories___parent___internal___owner'
  | 'categories___parent___internal___type'
  | 'categories___children'
  | 'categories___children___id'
  | 'categories___children___parent___id'
  | 'categories___children___parent___children'
  | 'categories___children___children'
  | 'categories___children___children___id'
  | 'categories___children___children___children'
  | 'categories___children___internal___content'
  | 'categories___children___internal___contentDigest'
  | 'categories___children___internal___description'
  | 'categories___children___internal___fieldOwners'
  | 'categories___children___internal___ignoreType'
  | 'categories___children___internal___mediaType'
  | 'categories___children___internal___owner'
  | 'categories___children___internal___type'
  | 'categories___internal___content'
  | 'categories___internal___contentDigest'
  | 'categories___internal___description'
  | 'categories___internal___fieldOwners'
  | 'categories___internal___ignoreType'
  | 'categories___internal___mediaType'
  | 'categories___internal___owner'
  | 'categories___internal___type'
  | 'projectGallery____key'
  | 'projectGallery____type'
  | 'projectGallery___gallery'
  | 'projectGallery___gallery____key'
  | 'projectGallery___gallery____type'
  | 'projectGallery___gallery___image____key'
  | 'projectGallery___gallery___image____type'
  | 'projectGallery___gallery___image___objectFit'
  | 'projectGallery___gallery___image___alt'
  | 'projectGallery___gallery___image____rawAsset'
  | 'projectGallery___gallery___image____rawHotspot'
  | 'projectGallery___gallery___image____rawCrop'
  | 'projectGallery___gallery____rawImage'
  | 'projectGallery____rawGallery'
  | 'publishedAt'
  | 'body'
  | 'body____key'
  | 'body____type'
  | 'body___children'
  | 'body___children____key'
  | 'body___children____type'
  | 'body___children___marks'
  | 'body___children___text'
  | 'body___style'
  | 'body___list'
  | 'body____rawChildren'
  | '_rawSlug'
  | '_rawAuthor'
  | '_rawMainImage'
  | '_rawCategories'
  | '_rawProjectGallery'
  | '_rawBody'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityProjectGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProjectEdge>;
  nodes: Array<SanityProject>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityProjectGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityProjectGroupConnectionDistinctArgs = {
  field: SanityProjectFieldsEnum;
};


export type SanityProjectGroupConnectionMaxArgs = {
  field: SanityProjectFieldsEnum;
};


export type SanityProjectGroupConnectionMinArgs = {
  field: SanityProjectFieldsEnum;
};


export type SanityProjectGroupConnectionSumArgs = {
  field: SanityProjectFieldsEnum;
};


export type SanityProjectGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityProjectFieldsEnum;
};

export type SanityProjectFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
  mainImage?: InputMaybe<SanityMainImageFilterInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  projectGallery?: InputMaybe<SanityImageGalleryFilterInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawProjectGallery?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityProjectSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityProjectFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityOpenGraphFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<SanityMainImageFilterInput>;
  _rawImage?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityRouteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityRouteEdge>;
  nodes: Array<SanityRoute>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityRouteGroupConnection>;
};


export type SanityRouteConnectionDistinctArgs = {
  field: SanityRouteFieldsEnum;
};


export type SanityRouteConnectionMaxArgs = {
  field: SanityRouteFieldsEnum;
};


export type SanityRouteConnectionMinArgs = {
  field: SanityRouteFieldsEnum;
};


export type SanityRouteConnectionSumArgs = {
  field: SanityRouteFieldsEnum;
};


export type SanityRouteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityRouteFieldsEnum;
};

export type SanityRouteEdge = {
  next?: Maybe<SanityRoute>;
  node: SanityRoute;
  previous?: Maybe<SanityRoute>;
};

export type SanityRouteFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'page____id'
  | 'page____type'
  | 'page____createdAt'
  | 'page____updatedAt'
  | 'page____rev'
  | 'page____key'
  | 'page___title'
  | 'page___slug____key'
  | 'page___slug____type'
  | 'page___slug___current'
  | 'page___navMenu____id'
  | 'page___navMenu____type'
  | 'page___navMenu____createdAt'
  | 'page___navMenu____updatedAt'
  | 'page___navMenu____rev'
  | 'page___navMenu____key'
  | 'page___navMenu___title'
  | 'page___navMenu___items'
  | 'page___navMenu___items____key'
  | 'page___navMenu___items____type'
  | 'page___navMenu___items___title'
  | 'page___navMenu___items___route'
  | 'page___navMenu___items___link'
  | 'page___navMenu___items___kind'
  | 'page___navMenu___items____rawSitePageRoute'
  | 'page___navMenu___items____rawBackgroundColor'
  | 'page___navMenu____rawItems'
  | 'page___navMenu___id'
  | 'page___navMenu___parent___id'
  | 'page___navMenu___parent___children'
  | 'page___navMenu___children'
  | 'page___navMenu___children___id'
  | 'page___navMenu___children___children'
  | 'page___navMenu___internal___content'
  | 'page___navMenu___internal___contentDigest'
  | 'page___navMenu___internal___description'
  | 'page___navMenu___internal___fieldOwners'
  | 'page___navMenu___internal___ignoreType'
  | 'page___navMenu___internal___mediaType'
  | 'page___navMenu___internal___owner'
  | 'page___navMenu___internal___type'
  | 'page____rawSlug'
  | 'page____rawNavMenu'
  | 'page____rawContent'
  | 'page___gatsbyPath'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'useSiteTitle'
  | 'openGraph____key'
  | 'openGraph____type'
  | 'openGraph___title'
  | 'openGraph___description'
  | 'openGraph___image____key'
  | 'openGraph___image____type'
  | 'openGraph___image___asset____id'
  | 'openGraph___image___asset____type'
  | 'openGraph___image___asset____createdAt'
  | 'openGraph___image___asset____updatedAt'
  | 'openGraph___image___asset____rev'
  | 'openGraph___image___asset____key'
  | 'openGraph___image___asset___originalFilename'
  | 'openGraph___image___asset___label'
  | 'openGraph___image___asset___title'
  | 'openGraph___image___asset___description'
  | 'openGraph___image___asset___altText'
  | 'openGraph___image___asset___sha1hash'
  | 'openGraph___image___asset___extension'
  | 'openGraph___image___asset___mimeType'
  | 'openGraph___image___asset___size'
  | 'openGraph___image___asset___assetId'
  | 'openGraph___image___asset___path'
  | 'openGraph___image___asset___url'
  | 'openGraph___image___asset____rawMetadata'
  | 'openGraph___image___asset____rawSource'
  | 'openGraph___image___asset___gatsbyImageData'
  | 'openGraph___image___asset___id'
  | 'openGraph___image___asset___children'
  | 'openGraph___image___hotspot____key'
  | 'openGraph___image___hotspot____type'
  | 'openGraph___image___hotspot___x'
  | 'openGraph___image___hotspot___y'
  | 'openGraph___image___hotspot___height'
  | 'openGraph___image___hotspot___width'
  | 'openGraph___image___crop____key'
  | 'openGraph___image___crop____type'
  | 'openGraph___image___crop___top'
  | 'openGraph___image___crop___bottom'
  | 'openGraph___image___crop___left'
  | 'openGraph___image___crop___right'
  | 'openGraph___image___objectFit'
  | 'openGraph___image___alt'
  | 'openGraph___image____rawAsset'
  | 'openGraph___image____rawHotspot'
  | 'openGraph___image____rawCrop'
  | 'openGraph____rawImage'
  | 'includeInSitemap'
  | 'disallowRobots'
  | '_rawPage'
  | '_rawSlug'
  | '_rawOpenGraph'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityRouteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityRouteEdge>;
  nodes: Array<SanityRoute>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityRouteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityRouteGroupConnectionDistinctArgs = {
  field: SanityRouteFieldsEnum;
};


export type SanityRouteGroupConnectionMaxArgs = {
  field: SanityRouteFieldsEnum;
};


export type SanityRouteGroupConnectionMinArgs = {
  field: SanityRouteFieldsEnum;
};


export type SanityRouteGroupConnectionSumArgs = {
  field: SanityRouteFieldsEnum;
};


export type SanityRouteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityRouteFieldsEnum;
};

export type SanityRouteFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  page?: InputMaybe<SanityPageFilterInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  useSiteTitle?: InputMaybe<BooleanQueryOperatorInput>;
  openGraph?: InputMaybe<SanityOpenGraphFilterInput>;
  includeInSitemap?: InputMaybe<BooleanQueryOperatorInput>;
  disallowRobots?: InputMaybe<BooleanQueryOperatorInput>;
  _rawPage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawOpenGraph?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityRouteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityRouteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export type SanityFileAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawSource'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityFileAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityFileAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export type SanityImageAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'metadata____key'
  | 'metadata____type'
  | 'metadata___location____key'
  | 'metadata___location____type'
  | 'metadata___location___lat'
  | 'metadata___location___lng'
  | 'metadata___location___alt'
  | 'metadata___dimensions____key'
  | 'metadata___dimensions____type'
  | 'metadata___dimensions___height'
  | 'metadata___dimensions___width'
  | 'metadata___dimensions___aspectRatio'
  | 'metadata___palette____key'
  | 'metadata___palette____type'
  | 'metadata___palette___darkMuted____key'
  | 'metadata___palette___darkMuted____type'
  | 'metadata___palette___darkMuted___background'
  | 'metadata___palette___darkMuted___foreground'
  | 'metadata___palette___darkMuted___population'
  | 'metadata___palette___darkMuted___title'
  | 'metadata___palette___lightVibrant____key'
  | 'metadata___palette___lightVibrant____type'
  | 'metadata___palette___lightVibrant___background'
  | 'metadata___palette___lightVibrant___foreground'
  | 'metadata___palette___lightVibrant___population'
  | 'metadata___palette___lightVibrant___title'
  | 'metadata___palette___darkVibrant____key'
  | 'metadata___palette___darkVibrant____type'
  | 'metadata___palette___darkVibrant___background'
  | 'metadata___palette___darkVibrant___foreground'
  | 'metadata___palette___darkVibrant___population'
  | 'metadata___palette___darkVibrant___title'
  | 'metadata___palette___vibrant____key'
  | 'metadata___palette___vibrant____type'
  | 'metadata___palette___vibrant___background'
  | 'metadata___palette___vibrant___foreground'
  | 'metadata___palette___vibrant___population'
  | 'metadata___palette___vibrant___title'
  | 'metadata___palette___dominant____key'
  | 'metadata___palette___dominant____type'
  | 'metadata___palette___dominant___background'
  | 'metadata___palette___dominant___foreground'
  | 'metadata___palette___dominant___population'
  | 'metadata___palette___dominant___title'
  | 'metadata___palette___lightMuted____key'
  | 'metadata___palette___lightMuted____type'
  | 'metadata___palette___lightMuted___background'
  | 'metadata___palette___lightMuted___foreground'
  | 'metadata___palette___lightMuted___population'
  | 'metadata___palette___lightMuted___title'
  | 'metadata___palette___muted____key'
  | 'metadata___palette___muted____type'
  | 'metadata___palette___muted___background'
  | 'metadata___palette___muted___foreground'
  | 'metadata___palette___muted___population'
  | 'metadata___palette___muted___title'
  | 'metadata___palette____rawDarkMuted'
  | 'metadata___palette____rawLightVibrant'
  | 'metadata___palette____rawDarkVibrant'
  | 'metadata___palette____rawVibrant'
  | 'metadata___palette____rawDominant'
  | 'metadata___palette____rawLightMuted'
  | 'metadata___palette____rawMuted'
  | 'metadata___lqip'
  | 'metadata___hasAlpha'
  | 'metadata___isOpaque'
  | 'metadata____rawLocation'
  | 'metadata____rawDimensions'
  | 'metadata____rawPalette'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawMetadata'
  | '_rawSource'
  | 'gatsbyImageData'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityImageAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityServiceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityServiceEdge>;
  nodes: Array<SanityService>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityServiceGroupConnection>;
};


export type SanityServiceConnectionDistinctArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceConnectionMaxArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceConnectionMinArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceConnectionSumArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityServiceFieldsEnum;
};

export type SanityServiceEdge = {
  next?: Maybe<SanityService>;
  node: SanityService;
  previous?: Maybe<SanityService>;
};

export type SanityServiceFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'description'
  | 'description____key'
  | 'description____type'
  | 'description___children'
  | 'description___children____key'
  | 'description___children____type'
  | 'description___children___marks'
  | 'description___children___text'
  | 'description___style'
  | 'description___list'
  | 'description____rawChildren'
  | '_rawDescription'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityServiceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityServiceEdge>;
  nodes: Array<SanityService>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityServiceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityServiceGroupConnectionDistinctArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceGroupConnectionMaxArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceGroupConnectionMinArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceGroupConnectionSumArgs = {
  field: SanityServiceFieldsEnum;
};


export type SanityServiceGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityServiceFieldsEnum;
};

export type SanityServiceFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<SanityBlockFilterListInput>;
  _rawDescription?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityServiceSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityServiceFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySocialLinkFilterListInput = {
  elemMatch?: InputMaybe<SanitySocialLinkFilterInput>;
};

export type SanitySocialLinkFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  platform?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityFooterFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  footerLogo?: InputMaybe<SanityMainImageFilterInput>;
  missionStatement?: InputMaybe<SanityBlockFilterListInput>;
  address?: InputMaybe<SanityBlockFilterListInput>;
  _rawMissionStatement?: InputMaybe<JsonQueryOperatorInput>;
  _rawAddress?: InputMaybe<JsonQueryOperatorInput>;
  _rawFooterLogo?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanitySiteSettingsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsEdge>;
  nodes: Array<SanitySiteSettings>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsGroupConnection>;
};


export type SanitySiteSettingsConnectionDistinctArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsConnectionMaxArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsConnectionMinArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsConnectionSumArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsEdge = {
  next?: Maybe<SanitySiteSettings>;
  node: SanitySiteSettings;
  previous?: Maybe<SanitySiteSettings>;
};

export type SanitySiteSettingsFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'openGraph____key'
  | 'openGraph____type'
  | 'openGraph___title'
  | 'openGraph___description'
  | 'openGraph___image____key'
  | 'openGraph___image____type'
  | 'openGraph___image___asset____id'
  | 'openGraph___image___asset____type'
  | 'openGraph___image___asset____createdAt'
  | 'openGraph___image___asset____updatedAt'
  | 'openGraph___image___asset____rev'
  | 'openGraph___image___asset____key'
  | 'openGraph___image___asset___originalFilename'
  | 'openGraph___image___asset___label'
  | 'openGraph___image___asset___title'
  | 'openGraph___image___asset___description'
  | 'openGraph___image___asset___altText'
  | 'openGraph___image___asset___sha1hash'
  | 'openGraph___image___asset___extension'
  | 'openGraph___image___asset___mimeType'
  | 'openGraph___image___asset___size'
  | 'openGraph___image___asset___assetId'
  | 'openGraph___image___asset___path'
  | 'openGraph___image___asset___url'
  | 'openGraph___image___asset____rawMetadata'
  | 'openGraph___image___asset____rawSource'
  | 'openGraph___image___asset___gatsbyImageData'
  | 'openGraph___image___asset___id'
  | 'openGraph___image___asset___children'
  | 'openGraph___image___hotspot____key'
  | 'openGraph___image___hotspot____type'
  | 'openGraph___image___hotspot___x'
  | 'openGraph___image___hotspot___y'
  | 'openGraph___image___hotspot___height'
  | 'openGraph___image___hotspot___width'
  | 'openGraph___image___crop____key'
  | 'openGraph___image___crop____type'
  | 'openGraph___image___crop___top'
  | 'openGraph___image___crop___bottom'
  | 'openGraph___image___crop___left'
  | 'openGraph___image___crop___right'
  | 'openGraph___image___objectFit'
  | 'openGraph___image___alt'
  | 'openGraph___image____rawAsset'
  | 'openGraph___image____rawHotspot'
  | 'openGraph___image____rawCrop'
  | 'openGraph____rawImage'
  | 'socialLinks'
  | 'socialLinks____key'
  | 'socialLinks____type'
  | 'socialLinks___platform'
  | 'socialLinks___url'
  | 'headerLogo____key'
  | 'headerLogo____type'
  | 'headerLogo___asset____id'
  | 'headerLogo___asset____type'
  | 'headerLogo___asset____createdAt'
  | 'headerLogo___asset____updatedAt'
  | 'headerLogo___asset____rev'
  | 'headerLogo___asset____key'
  | 'headerLogo___asset___originalFilename'
  | 'headerLogo___asset___label'
  | 'headerLogo___asset___title'
  | 'headerLogo___asset___description'
  | 'headerLogo___asset___altText'
  | 'headerLogo___asset___sha1hash'
  | 'headerLogo___asset___extension'
  | 'headerLogo___asset___mimeType'
  | 'headerLogo___asset___size'
  | 'headerLogo___asset___assetId'
  | 'headerLogo___asset___path'
  | 'headerLogo___asset___url'
  | 'headerLogo___asset___metadata____key'
  | 'headerLogo___asset___metadata____type'
  | 'headerLogo___asset___metadata___lqip'
  | 'headerLogo___asset___metadata___hasAlpha'
  | 'headerLogo___asset___metadata___isOpaque'
  | 'headerLogo___asset___metadata____rawLocation'
  | 'headerLogo___asset___metadata____rawDimensions'
  | 'headerLogo___asset___metadata____rawPalette'
  | 'headerLogo___asset___source____key'
  | 'headerLogo___asset___source____type'
  | 'headerLogo___asset___source___name'
  | 'headerLogo___asset___source___id'
  | 'headerLogo___asset___source___url'
  | 'headerLogo___asset____rawMetadata'
  | 'headerLogo___asset____rawSource'
  | 'headerLogo___asset___gatsbyImageData'
  | 'headerLogo___asset___id'
  | 'headerLogo___asset___parent___id'
  | 'headerLogo___asset___parent___children'
  | 'headerLogo___asset___children'
  | 'headerLogo___asset___children___id'
  | 'headerLogo___asset___children___children'
  | 'headerLogo___asset___internal___content'
  | 'headerLogo___asset___internal___contentDigest'
  | 'headerLogo___asset___internal___description'
  | 'headerLogo___asset___internal___fieldOwners'
  | 'headerLogo___asset___internal___ignoreType'
  | 'headerLogo___asset___internal___mediaType'
  | 'headerLogo___asset___internal___owner'
  | 'headerLogo___asset___internal___type'
  | 'headerLogo___hotspot____key'
  | 'headerLogo___hotspot____type'
  | 'headerLogo___hotspot___x'
  | 'headerLogo___hotspot___y'
  | 'headerLogo___hotspot___height'
  | 'headerLogo___hotspot___width'
  | 'headerLogo___crop____key'
  | 'headerLogo___crop____type'
  | 'headerLogo___crop___top'
  | 'headerLogo___crop___bottom'
  | 'headerLogo___crop___left'
  | 'headerLogo___crop___right'
  | 'headerLogo___objectFit'
  | 'headerLogo___alt'
  | 'headerLogo____rawAsset'
  | 'headerLogo____rawHotspot'
  | 'headerLogo____rawCrop'
  | 'footer____key'
  | 'footer____type'
  | 'footer___footerLogo____key'
  | 'footer___footerLogo____type'
  | 'footer___footerLogo___asset____id'
  | 'footer___footerLogo___asset____type'
  | 'footer___footerLogo___asset____createdAt'
  | 'footer___footerLogo___asset____updatedAt'
  | 'footer___footerLogo___asset____rev'
  | 'footer___footerLogo___asset____key'
  | 'footer___footerLogo___asset___originalFilename'
  | 'footer___footerLogo___asset___label'
  | 'footer___footerLogo___asset___title'
  | 'footer___footerLogo___asset___description'
  | 'footer___footerLogo___asset___altText'
  | 'footer___footerLogo___asset___sha1hash'
  | 'footer___footerLogo___asset___extension'
  | 'footer___footerLogo___asset___mimeType'
  | 'footer___footerLogo___asset___size'
  | 'footer___footerLogo___asset___assetId'
  | 'footer___footerLogo___asset___path'
  | 'footer___footerLogo___asset___url'
  | 'footer___footerLogo___asset____rawMetadata'
  | 'footer___footerLogo___asset____rawSource'
  | 'footer___footerLogo___asset___gatsbyImageData'
  | 'footer___footerLogo___asset___id'
  | 'footer___footerLogo___asset___children'
  | 'footer___footerLogo___hotspot____key'
  | 'footer___footerLogo___hotspot____type'
  | 'footer___footerLogo___hotspot___x'
  | 'footer___footerLogo___hotspot___y'
  | 'footer___footerLogo___hotspot___height'
  | 'footer___footerLogo___hotspot___width'
  | 'footer___footerLogo___crop____key'
  | 'footer___footerLogo___crop____type'
  | 'footer___footerLogo___crop___top'
  | 'footer___footerLogo___crop___bottom'
  | 'footer___footerLogo___crop___left'
  | 'footer___footerLogo___crop___right'
  | 'footer___footerLogo___objectFit'
  | 'footer___footerLogo___alt'
  | 'footer___footerLogo____rawAsset'
  | 'footer___footerLogo____rawHotspot'
  | 'footer___footerLogo____rawCrop'
  | 'footer___missionStatement'
  | 'footer___missionStatement____key'
  | 'footer___missionStatement____type'
  | 'footer___missionStatement___children'
  | 'footer___missionStatement___children____key'
  | 'footer___missionStatement___children____type'
  | 'footer___missionStatement___children___marks'
  | 'footer___missionStatement___children___text'
  | 'footer___missionStatement___style'
  | 'footer___missionStatement___list'
  | 'footer___missionStatement____rawChildren'
  | 'footer___address'
  | 'footer___address____key'
  | 'footer___address____type'
  | 'footer___address___children'
  | 'footer___address___children____key'
  | 'footer___address___children____type'
  | 'footer___address___children___marks'
  | 'footer___address___children___text'
  | 'footer___address___style'
  | 'footer___address___list'
  | 'footer___address____rawChildren'
  | 'footer____rawMissionStatement'
  | 'footer____rawAddress'
  | 'footer____rawFooterLogo'
  | '_rawOpenGraph'
  | '_rawSocialLinks'
  | '_rawHeaderLogo'
  | '_rawFooter'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySiteSettingsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsEdge>;
  nodes: Array<SanitySiteSettings>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanitySiteSettingsGroupConnectionDistinctArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsGroupConnectionMaxArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsGroupConnectionMinArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsGroupConnectionSumArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


export type SanitySiteSettingsGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  openGraph?: InputMaybe<SanityOpenGraphFilterInput>;
  socialLinks?: InputMaybe<SanitySocialLinkFilterListInput>;
  headerLogo?: InputMaybe<SanityMainImageFilterInput>;
  footer?: InputMaybe<SanityFooterFilterInput>;
  _rawOpenGraph?: InputMaybe<JsonQueryOperatorInput>;
  _rawSocialLinks?: InputMaybe<JsonQueryOperatorInput>;
  _rawHeaderLogo?: InputMaybe<JsonQueryOperatorInput>;
  _rawFooter?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanitySiteSettingsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanitySiteSettingsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Nav_ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type Nav_ItemsQuery = { allSanityRoute: { nodes: Array<{ id: string, slug?: { current?: string | null | undefined } | null | undefined, page?: { title?: string | null | undefined } | null | undefined }> } };

export type SanityMainImageFragment = { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined };

export type SanityIllustrationFragment = { _key?: string | null | undefined, _type?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined };

export type SanityHeroFragment = { __typename: 'SanityHero', _key?: string | null | undefined, _type?: string | null | undefined, _rawHeading?: any | null | undefined, _rawHeadLine?: any | null | undefined, illustration?: { _key?: string | null | undefined, _type?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, cta?: { route?: string | null | undefined, link?: string | null | undefined, kind?: string | null | undefined, title?: string | null | undefined, backgroundColor?: { colors?: { title?: string | null | undefined, value?: string | null | undefined } | null | undefined } | null | undefined, sitePageRoute?: { __typename: 'SanityPage', slug?: { current?: string | null | undefined } | null | undefined } | { __typename: 'SanityRoute', slug?: { current?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type SanityUiComponentRefFragment = { _key?: string | null | undefined, _type?: string | null | undefined, name?: string | null | undefined };

export type SanityServiceFragment = { _key?: string | null | undefined, _type?: string | null | undefined, _id?: string | null | undefined, id: string, _rawDescription?: any | null | undefined, title?: string | null | undefined };

export type SanitySingleColumnFragment = { _key?: string | null | undefined, _type?: string | null | undefined, _rawContent?: any | null | undefined };

export type SanityGridContentFragment = { __typename: 'SanityGridContent', _key?: string | null | undefined, columns?: Array<{ __typename: 'SanityIllustration', _key?: string | null | undefined, _type?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined } | { __typename: 'SanityService', _key?: string | null | undefined, _type?: string | null | undefined, _id?: string | null | undefined, id: string, _rawDescription?: any | null | undefined, title?: string | null | undefined } | { __typename: 'SanitySingleColumn', _key?: string | null | undefined, _type?: string | null | undefined, _rawContent?: any | null | undefined } | { __typename: 'SanityUiComponentRef', _key?: string | null | undefined, _type?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined };

export type SanityBodySectionFragment = { _key?: string | null | undefined, _type?: string | null | undefined, _rawContent?: any | null | undefined };

export type SinglePageTemplateFragment = { _key?: string | null | undefined, _id?: string | null | undefined, title?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined, content?: Array<{ __typename: 'SanityBodySection', _key?: string | null | undefined, _type?: string | null | undefined, _rawContent?: any | null | undefined } | { __typename: 'SanityGridContent', _key?: string | null | undefined, columns?: Array<{ __typename: 'SanityIllustration', _key?: string | null | undefined, _type?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined } | { __typename: 'SanityService', _key?: string | null | undefined, _type?: string | null | undefined, _id?: string | null | undefined, id: string, _rawDescription?: any | null | undefined, title?: string | null | undefined } | { __typename: 'SanitySingleColumn', _key?: string | null | undefined, _type?: string | null | undefined, _rawContent?: any | null | undefined } | { __typename: 'SanityUiComponentRef', _key?: string | null | undefined, _type?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'SanityHero', _key?: string | null | undefined, _type?: string | null | undefined, _rawHeading?: any | null | undefined, _rawHeadLine?: any | null | undefined, illustration?: { _key?: string | null | undefined, _type?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, cta?: { route?: string | null | undefined, link?: string | null | undefined, kind?: string | null | undefined, title?: string | null | undefined, backgroundColor?: { colors?: { title?: string | null | undefined, value?: string | null | undefined } | null | undefined } | null | undefined, sitePageRoute?: { __typename: 'SanityPage', slug?: { current?: string | null | undefined } | null | undefined } | { __typename: 'SanityRoute', slug?: { current?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { __typename: 'SanityUiComponentRef', _key?: string | null | undefined, _type?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined };

export type SharedProjectFieldsFragment = { _id?: string | null | undefined, title?: string | null | undefined, mainImage?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined, slug?: { current?: string | null | undefined } | null | undefined, author?: { name?: string | null | undefined } | null | undefined, categories?: Array<{ title?: string | null | undefined, description?: string | null | undefined, icon?: { asset?: { _id?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type SanityProjectTemplateFragment = { _rawBody?: any | null | undefined, _id?: string | null | undefined, title?: string | null | undefined, projectGallery?: { gallery?: Array<{ _key?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined, mainImage?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined, slug?: { current?: string | null | undefined } | null | undefined, author?: { name?: string | null | undefined } | null | undefined, categories?: Array<{ title?: string | null | undefined, description?: string | null | undefined, icon?: { asset?: { _id?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type SingleProjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleProjectQuery = { sanityProject?: { title?: string | null | undefined, _rawBody?: any | null | undefined, _id?: string | null | undefined, projectGallery?: { gallery?: Array<{ _key?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined, mainImage?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined, slug?: { current?: string | null | undefined } | null | undefined, author?: { name?: string | null | undefined } | null | undefined, categories?: Array<{ title?: string | null | undefined, description?: string | null | undefined, icon?: { asset?: { _id?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type SinglePageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SinglePageQuery = { sanityPage?: { title?: string | null | undefined, _key?: string | null | undefined, _id?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined, content?: Array<{ __typename: 'SanityBodySection', _key?: string | null | undefined, _type?: string | null | undefined, _rawContent?: any | null | undefined } | { __typename: 'SanityGridContent', _key?: string | null | undefined, columns?: Array<{ __typename: 'SanityIllustration', _key?: string | null | undefined, _type?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined } | { __typename: 'SanityService', _key?: string | null | undefined, _type?: string | null | undefined, _id?: string | null | undefined, id: string, _rawDescription?: any | null | undefined, title?: string | null | undefined } | { __typename: 'SanitySingleColumn', _key?: string | null | undefined, _type?: string | null | undefined, _rawContent?: any | null | undefined } | { __typename: 'SanityUiComponentRef', _key?: string | null | undefined, _type?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'SanityHero', _key?: string | null | undefined, _type?: string | null | undefined, _rawHeading?: any | null | undefined, _rawHeadLine?: any | null | undefined, illustration?: { _key?: string | null | undefined, _type?: string | null | undefined, image?: { _key?: string | null | undefined, alt?: string | null | undefined, asset?: { _id?: string | null | undefined, gatsbyImageData: any } | null | undefined } | null | undefined } | null | undefined, cta?: { route?: string | null | undefined, link?: string | null | undefined, kind?: string | null | undefined, title?: string | null | undefined, backgroundColor?: { colors?: { title?: string | null | undefined, value?: string | null | undefined } | null | undefined } | null | undefined, sitePageRoute?: { __typename: 'SanityPage', slug?: { current?: string | null | undefined } | null | undefined } | { __typename: 'SanityRoute', slug?: { current?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { __typename: 'SanityUiComponentRef', _key?: string | null | undefined, _type?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GatsbyImageSharpFixedFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };
