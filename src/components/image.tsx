import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface ImageProps {
  name: string
}

interface Node {
  node: {
    fluid: {
      originalName: string
    }
  }
}

const Image = ({ name }: ImageProps) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allImageSharp.edges.find((edge: Node) => {
          return edge.node.fluid.originalName === name
        })

        if (!image) {
          return null
        }

        return <Img fluid={image.node.fluid} />
      }}
    />
  )
}

export default Image
