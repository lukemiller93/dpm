import { SanityProject } from "../../graphql-types";

export default function ProjectCard({cardData}: {cardData: SanityProject}) {
  return (
    <div>
      <pre>{JSON.stringify(cardData, null, 2)}</pre>
    </div>
  )
}
