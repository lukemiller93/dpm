import { graphql, PageProps, StaticQueryDocument } from "gatsby";
import type { SinglePageQuery } from '../../graphql-types'

const SanityPage:React.FC<PageProps<SinglePageQuery>> = ({data, location}) => {
  console.log(data.sanityPage?.content)

  return (
    <div>
      Sanity Page
      <pre>{JSON.stringify(data , null, 2)}</pre>
    </div>
  );
}

export default SanityPage;

export const query = graphql`
  query SinglePage($id: String!) {
    sanityPage(id: { eq: $id }) {
      ...SinglePageTemplate
      title
    }
  }
`;
