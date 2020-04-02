import React, { createContext, useReducer, useContext } from "react"
import { MapActions, MapState } from "../@types"

const initialState: MapState = {
  theme: "LIGHT",
  showingMenu: false,
}

const initialMapContext: {
  mapState: MapState
  setMapState: React.Dispatch<MapActions>
} = {
  mapState: initialState,
  setMapState: () => {},
}

export const MapContext = createContext(initialMapContext)

const reducer = (state: MapState, action: MapActions) => {
  switch (action.type) {
    case "TOGGLETHEME":
      return state.theme === "LIGHT"
        ? { ...state, theme: "DARK" }
        : { ...state, theme: "LIGHT" }
    case "TOGGLEMENU":
      return state.showingMenu
        ? { ...state, showingMenu: false }
        : { ...state, showingMenu: true }
    default:
      return state
  }
}

export const MapProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const mapState = state
  const setMapState = dispatch

  return (
    <MapContext.Provider value={{ mapState, setMapState }}>
      {children}
    </MapContext.Provider>
  )
}

export const useMapState = () => useContext(MapContext)
