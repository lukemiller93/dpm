import { graphql, PageProps, StaticQueryDocument } from "gatsby";
import { SingleProjectQuery } from "../../../graphql-types";


const SanityProject: React.FC<PageProps<SingleProjectQuery>> = ({
  data,
  location,
}) => {

  return (
    <div>
      Sanity Page
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SanityProject;

export const query : StaticQueryDocument = graphql`
  query SingleProject($id: String!) {
    sanityProject(id: { eq: $id }) {
      ...SanityProjectTemplate
      title
    }
  }
`;
