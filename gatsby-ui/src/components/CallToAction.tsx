import { SanityLinkCreator } from "../../graphql-types";

export default function CallToAction({cta}: {cta: SanityLinkCreator}) {

  return (
    <div>
      <pre>{JSON.stringify(cta, null, 2)}</pre>
    </div>
  )
}
