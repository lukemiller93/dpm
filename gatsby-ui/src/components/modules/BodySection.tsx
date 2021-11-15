import { SanityBodySection } from "../../../graphql-types";
import BlockContent from "../PortableText";

export default function BodySection({ props }: { props: SanityBodySection }) {
  const onlyOneEl = props?._rawContent?.length === 1;

  return (
    <section className={`body-section container ${onlyOneEl ?? "only-one-el"}`}>
      <BlockContent block={props?._rawContent} />
    </section>
  );
}
