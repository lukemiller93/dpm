import client from '@sanity/client'


export const sanityClient = client({
  projectId: "sd6anpfo",
  dataset: "production",
  apiVersion: "2021-10-25",
  token: import.meta.env.VITE_SANITY_READ_TOKEN,
  useCdn: false,
});

