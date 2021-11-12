import PortableText from "react-portable-text"

const BlockContent = ({block}: {block: [any]}) => {
  return (
    <PortableText content={block} />
  )
}

export default BlockContent
