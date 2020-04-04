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
