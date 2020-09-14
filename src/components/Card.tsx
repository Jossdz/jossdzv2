import React from "react"
import styled from "styled-components"

const CardStyles = styled.article`
  display: flex;
  flex-direction: column;
  font-family: "Source Sans Pro";
  background-color: ${props =>
    props.theme.mode === `LIGHT` ? "var(--soft-white);" : "var(--soft-dark);"};
  height: 230px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  h2 {
    font-family: "Source Sans Pro";
    background-color: var(--yellow);
    text-align: center;
    font-weight: 100;
    color: black;
    font-size: 1.1rem;
    padding: 10px 5px;
    height: 19%;
    margin: 0;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    background-color: ${props =>
      props.theme.mode === `LIGHT` ? "var(--soft-dark)" : "var(--soft-white)"};
    padding: 0 12px;
  }
  div > small {
    color: ${props => (props.theme.mode === `LIGHT` ? "white" : "black")};
    font-family: "Source Sans Pro";
    font-weight: 500;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }
  & > small {
    padding: 10px;
    font-weight: 600;
    font-size: 0.8rem;
    color: ${props => (props.theme.mode === `LIGHT` ? "black" : "white")};
    height: 60%;
    text-align: center;
  }
  a {
    height: 15%;
    width: 100%;
  }
  button {
    height: 100%;
    width: 100%;
    border: none;
    background-color: var(--yellow);
    font-weight: bold;
    color: black;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.03);
  }
  @media screen and (min-width: 900px) {
  }
`

interface Props {
  title: {
    en?: string
    es?: string
  }
  place?: { name: string }
  date?: string
  description: {
    en?: string
    es?: string
  }
  slides?: string
}

function Card({ title, description, place, date, slides }: Props) {
  return (
    <CardStyles>
      <h2>{title.es}</h2>
      {place && date ? (
        <div>
          <small>{place.name}</small>
          <small>{date}</small>
        </div>
      ) : null}
      <small>{description.es}</small>
      {slides && (
        <a href={slides} target="__blank">
          <button>Slides</button>
        </a>
      )}
    </CardStyles>
  )
}

export default Card
