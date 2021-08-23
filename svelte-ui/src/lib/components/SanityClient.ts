import sanityClient from '@sanity/client'

// create Client interface to typecheck options
type Client = {
  projectId: string,
  dataset: string,
  token: string,
  useCdn: boolean,
  apiVersion: string
}

const options: Client = {
  // your project id
  projectId: "sd6anpfo",
  dataset: "production",
  token: "",
  useCdn: true,
  apiVersion: "2021-08-20",
};

const client = sanityClient(options)

export {client}
