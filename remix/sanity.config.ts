import { createConfig } from "sanity";

import { deskTool } from "sanity/desk";
import { schemaTypes } from "~/components/Studio/schema/index";

import { SANITY_DATASET, SANITY_PROJECT_ID } from "~/sanity";

export default createConfig({
  name: "dauntless-pursuit",
  basePath: "/studio",

  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
