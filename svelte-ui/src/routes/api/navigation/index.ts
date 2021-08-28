import { client } from '../../../lib/components/SanityClient'

export async function get(req) {

  const filter = '*[_type == "page"] |order(_createdAt asc) ';
  const projection = `{ _id, slug, title,  }`;

  const query = filter + projection;
  const navItems = await client.fetch(query);

  if (!navItems?.length) {
    return {
      status: 404,
      error: "No items found",
    };
  }
  return {
    status: 200,
    body: {
      navItems,
    },
  };
}
