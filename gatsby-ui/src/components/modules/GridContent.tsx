import { GatsbyImage } from "gatsby-plugin-image";
import {
  SanityGridContent,
  SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef,
} from "../../../graphql-types";
import BlockContent from "../PortableText";
import ServiceCard from "../ServiceCard";
import UiComponent from "./UiComponentRef";

export default function GridContent({
  props: { columns },
}: {
  props: {
    columns: SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef[];
  };
}) {
  const serviceGrid = columns.some((v) => v._type === "service");
  return (
    <section
      className={`container grid-container ${serviceGrid ?? "service-grid"}`}
    >
      {columns.map((col, index) => {
        console.log(col._type)
        return (
          <div key={col._key + index} className={`single-column ${col._type}`}>
            {col._type === "singleColumn" && "_rawContent" in col && (
              <BlockContent block={col._rawContent} />
            )}
            {col._type === "illustration" && "image" in col && (
              <GatsbyImage image={col.image?.asset?.gatsbyImageData} alt={col?.image?.alt ||''} />
            )}
            {col._type === "uiComponentRef" && "name" in col && (
              <UiComponent name={col.name} />
            )}
            {col._type === "service" && "_rawDescription" in col && (
              <ServiceCard service={col} />
            )}
          </div>
        );
      })}
    </section>
  );
}
