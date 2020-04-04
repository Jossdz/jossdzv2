import React from "react"
import InfoStyled from "../styles/InfoStyled"
import History from "../styles/History"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem } from "@fortawesome/free-solid-svg-icons"
import StackTech from "../styles/StackSlide"
import Image from "./image"

function shuffle(a: string[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const stack = [
  "react.png",
  "apollo.png",
  "xd.png",
  "npm.png",
  "gatsby.png",
  "mongo.png",
  "zeit.png",
  "prisma.png",
  "graphql.png",
  "js.png",
  "ts.png",
  "redux.png",
]

function LandingInfo() {
  return (
    <InfoStyled>
      <FontAwesomeIcon icon={faGem} size="lg" />
      <p>
        Mi nombre es Jose Carlos, pero todos en la industria tech me conocen
        como 'Joss'. Soy un desarrollador fullstack, he estado durante muchos
        años involucrado en comunidades de desarrollo web y tecnologías de la
        información. Me encanta aprender, enseñar y colaborar con personas en el
        entorno. Actualmente trabajo en Ironhack como maestro asistente para
        aportar a la educación en tecnología y a su vez escribo y preparo
        contenido para complementar mi misión de compartir conocimiento online y
        en pláticas de comunidades.
      </p>
      <h2>Historia</h2>
      <History>
        <article>
          <h3>Titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam
            dolorem sed nam hic ab sunt dicta doloremque, in possimus, dolor
            ullam? Distinctio error at enim, cum suscipit saepe labore?
          </p>
          <small>fecha</small>
        </article>
        <article>
          <h3>Titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam
            dolorem sed nam hic ab sunt dicta doloremque, in possimus, dolor
            ullam? Distinctio error at enim, cum suscipit saepe labore?
          </p>
          <small>fecha</small>
        </article>
        <article>
          <h3>Titulo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam
            dolorem sed nam hic ab sunt dicta doloremque, in possimus, dolor
            ullam? Distinctio error at enim, cum suscipit saepe labore?
          </p>
          <small>fecha</small>
        </article>
      </History>
      <hr />
      <h2>Tecnologias</h2>
      <StackTech>
        {shuffle(stack).map(tech => (
          <Image name={tech} />
        ))}
      </StackTech>
      <hr />
    </InfoStyled>
  )
}

export default LandingInfo
