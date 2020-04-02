export interface MapState {
  /** The map feature reference */
  theme: any | null | "LIGHT" | "DARK"
  showingMenu: any | true | false
}

export interface MapActions {
  type: "TOGGLETHEME" | "TOGGLEMENU"
}

export interface MyGlobalProps {
  theme: {
    mode: "LIGHT" | "DARK"
  }
}
