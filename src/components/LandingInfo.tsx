import React from "react"
import Image from "./image"
import History from "../styles/History"
import StackSlide from "../styles/StackSlide"
import InfoStyled from "../styles/InfoStyled"
import { useStaticQuery, graphql } from "gatsby"
import BlockContentRender from "./BlockContentRender"
import { faGem } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SanityHistory } from "../@types"

interface Image {
  node: {
    image: {
      asset: { originalFilename: string }
    }
  }
}

function shuffle(a: Image[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function LandingInfo() {
  const {
    allSanityCategory: { edges },
    allSanityHistory,
    sanityAuthor: { _rawBio: bio },
  } = useStaticQuery(graphql`
    {
      allSanityCategory {
        edges {
          node {
            image {
              asset {
                originalFilename
              }
            }
          }
        }
      }
      allSanityHistory {
        nodes {
          title {
            es
            en
          }
          datenplace
          description {
            en
            es
          }
        }
      }
      sanityAuthor {
        _rawBio
      }
    }
  `)
  return (
    <InfoStyled>
      <FontAwesomeIcon icon={faGem} size="lg" />
      <BlockContentRender data={bio} />
      <h2>Historia</h2>
      <History>
        {allSanityHistory.nodes.map(
          (
            { title, datenplace, description }: SanityHistory,
            index: number
          ) => (
            <article key={index}>
              <h3>{title.es}</h3>
              <p>{description.es}</p>
              <small>{datenplace}</small>
            </article>
          )
        )}
      </History>
      <hr />
      <h2>Tecnologias</h2>
      <StackSlide>
        {shuffle(edges).map(
          (
            {
              node: {
                image: {
                  asset: { originalFilename },
                },
              },
            }: Image,
            i
          ) => (
            <Image name={originalFilename} key={i} />
          )
        )}
      </StackSlide>
      <hr />
    </InfoStyled>
  )
}

export default LandingInfo
