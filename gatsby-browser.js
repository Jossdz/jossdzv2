/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import Theme from "./src/styles/Theme"
import { MapProvider } from "./src/hooks/state"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  return (
    <MapProvider>
      <Theme>
        <Layout>{element}</Layout>
      </Theme>
    </MapProvider>
  )
}
