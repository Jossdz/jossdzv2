import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const serializers = {
  types: {
    code: (props: { node: { language: any; code: React.ReactNode } }) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const BlockContentRender = ({ data }) => (
  <BlockContent
    serializers={serializers}
    blocks={data.en}
    imageOptions={{ w: 320, h: 240, fit: "max" }}
    projectId="wmkaj1hi"
    dataset="production"
  />
)

export default BlockContentRender
