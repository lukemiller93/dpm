import { ReactElement } from "react"
import PortableText from "react-portable-text"
import { SanityLinkCreator } from "../../graphql-types"
import CallToAction from "./CallToAction"


const serializers = {
  linkCreator: (props: SanityLinkCreator) : ReactElement<SanityLinkCreator> => {
  return (
    <CallToAction cta={props}  />
  )}
}


const BlockContent = ({block}: {block: [object]}) => {
  return (
    <PortableText serializers={serializers} content={block} />
  )
}

export default BlockContent
