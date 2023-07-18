import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./sanity/schemas";
import { projectDetails } from "./sanity/projectDetails";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { colorInput } from "@sanity/color-input";
import { defaultDocumentNode, structure } from "./sanity/deskStructure";


const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["siteConfig"])



export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  ...projectDetails(),


  plugins: [deskTool({structure, defaultDocumentNode}), visionTool(), media(), colorInput()],

  schema: {
    types: schemaTypes,
  },
});
``
