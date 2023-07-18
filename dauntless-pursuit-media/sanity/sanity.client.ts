import { createClient, groq } from "next-sanity";
import { projectDetails } from "./projectDetails";
import { cache } from "react";

export const client = createClient({
	...projectDetails(),
	useCdn: process.env.NODE_ENV === "production",
	perspective:"published" ,
	token: process.env.SANITY_READ_TOKEN,
})

// wrap the cache function in a way that reuses the TS bindings
export const clientFetch = cache(client.fetch.bind(client))

// Now use it just like before, fully deduped, cached and optimized by react

