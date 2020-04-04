import React from "react"
import SideButton from "../styles/SideMenuButton"
import SideMenu from "../styles/SideMenu"
import Navbar from "../styles/Navbar"
import { useMapState } from "../hooks/state"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

interface props {
  children?: any
}

const Layout = ({ children }: props) => {
  const {
    setMapState,
    mapState: { showingMenu, theme },
  } = useMapState()
  return (
    <>
      <SideButton
        active={showingMenu}
        onClick={() => setMapState({ type: "TOGGLEMENU" })}
      />
      <SideMenu active={showingMenu}>
        <Link to="/">
          <h2>INICIO</h2>
        </Link>
        <Link to="/blog">
          <h2>BLOG</h2>
        </Link>
        <Link to="/tutorials">
          <h2>TUTORIALES</h2>
        </Link>
        <Link to="/talks">
          <h2>PRESENTACIONES</h2>
        </Link>

        <nav>
          <FontAwesomeIcon
            icon={faSun}
            onClick={() =>
              theme === "DARK"
                ? setMapState({ type: "TOGGLETHEME" })
                : setMapState({ type: "" })
            }
          />
          <FontAwesomeIcon
            icon={faMoon}
            onClick={() =>
              theme === "LIGHT"
                ? setMapState({ type: "TOGGLETHEME" })
                : setMapState({ type: "" })
            }
          />
          {/* TODO: lang selection
          <p>c</p>
          <p>d</p> */}
        </nav>
      </SideMenu>
      <Navbar>
        <h2>JOSSDZ</h2>
        <Link to="/">
          <h2>INICIO</h2>
        </Link>
        <Link to="/blog">
          <h2>BLOG</h2>
        </Link>
        <Link to="/tutorials">
          <h2>TUTORIALES</h2>
        </Link>
        <Link to="/talks">
          <h2>PRESENTACIONES</h2>
        </Link>
        <FontAwesomeIcon
          icon={theme === "DARK" ? faSun : faMoon}
          onClick={() => setMapState({ type: "TOGGLETHEME" })}
        />
      </Navbar>
      {children}
    </>
  )
}

export default Layout
