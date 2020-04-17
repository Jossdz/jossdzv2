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
          allSanityCategory {
            edges {
              node {
                image {
                  asset {
                    fluid {
                      ...GatsbySanityImageFluid
                    }
                    originalFilename
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allSanityCategory: { edges } }) => {
        const {
          node: {
            image: {
              asset: { fluid },
            },
          },
        } = edges.find(
          ({
            node: {
              image: {
                asset: { originalFilename },
              },
            },
          }) => originalFilename === name
        )
        // debugger

        if (!fluid) {
          return null
        }

        return <Img fluid={fluid} />
      }}
    />
  )
}

export default Image
