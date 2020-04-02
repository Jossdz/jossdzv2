import React from "react"
import SideButton from "../styles/SideMenuButton"
import SideMenu from "../styles/SideMenu"
import { useMapState } from "../hooks/state"

interface props {
  children?: any
}

const Layout = ({ children }: props) => {
  const {
    setMapState,
    mapState: { showingMenu },
  } = useMapState()
  return (
    <>
      <SideButton
        active={showingMenu}
        onClick={() => setMapState({ type: "TOGGLEMENU" })}
      />
      <SideMenu active={showingMenu} />
      {children}
    </>
  )
}

export default Layout
