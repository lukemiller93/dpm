// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import author from "./documents/author";
import category from "./documents/category";
import navMenu from "./documents/navMenu";
import page from "./documents/page";
import post from "./documents/post";
import project from "./documents/project";
import route from "./documents/route";
import siteSettings from "./documents/siteSettings";
import blockContent from "./objects/blockContent";
import bodyPortableText from "./objects/bodyPortableText";
import colorList from "./objects/colorList";
import footer from "./objects/footer";
import linkCreator from "./objects/linkCreator";
import location from "./objects/location";
import mainImage from "./objects/mainImage";
import openGraph from "./objects/openGraph";
import simpleBlockContent from "./objects/simpleBlockContent";
import socialLink from "./objects/socialLink";
import * as plugs from "./plugs";
// import all plugs
import plugDefaultFields from "./plugs/_plugDefaultFields";

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) };
});
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      /* Your types here! */
      siteSettings,
      socialLink,
      openGraph,
      footer,
      mainImage,
      page,
      navMenu,
      location,
      route,
      linkCreator,
      bodyPortableText,
      simpleBlockContent,
      colorList,
      project,
      post,
      author,
      category,
      blockContent,
    ])
    .concat(allPlugs),
});
