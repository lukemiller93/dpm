import author from "./documents/author";
import category from "./documents/category";
import navMenu from "./documents/navMenu";
import page from "./documents/page";
import post from "./documents/post";
import project from "./documents/project";
import route from "./documents/route";
import service from "./documents/service";
import siteSettings from "./documents/siteSettings";
import blockContent from "./objects/blockContent";
import bodyPortableText from "./objects/bodyPortableText";
import colorList from "./objects/colorList";
import footer from "./objects/footer";
import gallery from "./objects/gallery";
import linkCreator from "./objects/linkCreator";
import location from "./objects/location";
import mainImage from "./objects/mainImage";
import openGraph from "./objects/openGraph";
import simpleBlockContent from "./objects/simpleBlockContent";
import socialLink from "./objects/socialLink";

import * as plugs from './plugs'
export const schemaTypes = [
  author,
  category,
  navMenu,
  page,
  post,
  project,
  route,
  service,
  siteSettings,

  // objects
  blockContent,
  bodyPortableText,
  footer,
  gallery,
  linkCreator,
  location,
  mainImage,
  openGraph,
  simpleBlockContent,
  socialLink,
  plugs.hero,
  plugs.bodySection,
  plugs.gridContent,
  plugs.uiComponentRef,
  plugs.illustration,
  plugs.singleColumn,

]