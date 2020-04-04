/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import Theme from "./src/styles/Theme"
import { MapProvider } from "./src/hooks/state"

export const wrapRootElement = ({ element }) => {
  return (
    <MapProvider>
      <Theme>{element}</Theme>
    </MapProvider>
  )
}
