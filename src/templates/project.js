import React from 'react'
import { Title } from '../pages/talks'
import BlockContent from "@sanity/block-content-to-react"
import GeneralPadding from '../styles/GeneralPadding'
import styled from 'styled-components'

const StyledBlockC = styled(BlockContent)`
  img{
    width: 100%;
  }
  @media (max-width: 500px){
    img{
      width: 100%;
      margin:0;
    }
  }
` 

const project = ({pageContext:{
  _rawBody,
  categories, 
  title,
  slug 
}}) => {

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    },
  }

  
  return (
    <div>
      <Title>{title}</Title>
      <GeneralPadding>
        <StyledBlockC
          serializers={serializers}
          blocks={_rawBody.es}
          imageOptions={{ w: 400, h: 240, fit: "max" }}
          projectId="wmkaj1hi"
          dataset="production"
          />
      </GeneralPadding>
    </div>
  )
}

export default project
