import React from 'react'
import { Title } from './talks'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { yellow } from '../styles/Theme'

interface ProjectProps {
  data: {
    allSanityProject: {
      edges: [{ node: { name: { en: string, es: string }, id: string, slug: { current: string } } }]
    }
  }
}


const ProjectsList = styled.ul`
  min-height: calc(100vh - 370px);
  list-style: none;
  box-sizing: content-box;
  color:  ${props => (props.theme.mode === "DARK" ? "white" : 'black')};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 0;
  li{
    box-sizing: content-box;
    font-size: 1.8rem;
    transition: all 0.3s ease;
    height: auto;
    a{
      text-decoration: none;
      color: inherit;
      border-bottom: 1px solid ${yellow};
    }
  }
  li:hover{
    color: ${yellow};
    cursor: pointer;
  }
  @media screen and (min-width: 900px) {
    min-height: calc(100vh - 348.94px);
  }
`

function projects({ data }: ProjectProps) {

  return (
    <div>
      <Title>Projects</Title>
      <ProjectsList>
        {data.allSanityProject.edges.map(({ node: { name, id, slug } }, i) => (
          <li key={id}>
            <Link to={`/project/${slug.current}`}>
              {name.en}
            </Link>
          </li>
        )
        )}
      </ProjectsList>
    </div>
  )
}

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          name {
            en
            }
            id
            slug {
            current
          }
        }
      }
    }
  }
`

export default projects
