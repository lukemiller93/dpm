import {
  SanityGridContent,
  SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef,
} from "../../../graphql-types";

export default function GridContent({
  props: { columns },
}: {
  props: {
    columns: SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef[];
  };
}) {
  // const {columns}: {columns: SanityIllustrationOrServiceOrSingleColumnOrUiComponentRef[]}= props

  const serviceGrid = columns.some((v) => v._type === "service");
  return (
    <section
      className={`container grid-container ${serviceGrid ?? "service-grid"}`}
    >
      {columns.map((col) => {
        return <div className={`single-column ${col._type}`}>
          {"name" in col && col._type ==='rawContent'}
        </div>;
      })}
    </section>
  );
}
