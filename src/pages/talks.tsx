import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Card from "../components/Card"
export const query = graphql`
  query getAllTalks {
    allSanityTalk {
      edges {
        node {
          title {
            es
            en
          }
          place {
            name
          }
          date
          description {
            es
            en
          }
          slides
        }
      }
    }
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  padding-top: 10vh;
`

const TalksStyle = styled.main`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 300px;
`

const CardsGrid = styled.section`
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  @media screen and (min-width: 500px) {
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
`
interface Node {
  node: {
    title: {
      en?: string
      es?: string
    }
    place: { name: string }
    date: string
    description: {
      en?: string
      es?: string
    }
    slides: string
  }
}
interface Props {
  data: {
    allSanityTalk: {
      edges: [Node]
    }
  }
}

function talks({ data }: Props) {
  console.log(data.allSanityTalk.edges)
  return (
    <TalksStyle>
      <Title>Presentaciones</Title>

      <CardsGrid>
        {data.allSanityTalk.edges.map(({ node: talk }: Node, i: number) => (
          <Card key={i} {...talk} />
        ))}
      </CardsGrid>
    </TalksStyle>
  )
}

export default talks
