import { graphql, PageProps, StaticQueryDocument } from "gatsby";
import type { SinglePageQuery } from "../../graphql-types";
import loadable from "@loadable/component";
const SanityPage: React.FC<PageProps<SinglePageQuery>> = ({
  data,
  location,
}) => {
  const { sanityPage } = data;
  return (
    <div>
      Sanity Page
      {/* <pre>{JSON.stringify(sanityPage, null, 2)}</pre> */}
      {sanityPage?.content?.map((element) => {
        const typename = element?.__typename.replace("Sanity", "");
        const Component = loadable(() => import(`../components/modules/${typename}`));
        return <Component props={element} key={element?._key} />;
      })}
    </div>
  );
};

export default SanityPage;

export const query: StaticQueryDocument = graphql`
  query SinglePage($id: String!) {
    sanityPage(id: { eq: $id }) {
      ...SinglePageTemplate
      title
    }
  }
`;
