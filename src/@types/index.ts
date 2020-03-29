export interface MapState {
  /** The map feature reference */
  theme: any | null | "LIGHT" | "DARK"
}

export interface MapActions {
  type: "TOGGLETHEME"
}

export interface MyGlobalProps {
  theme: {
    mode: "LIGHT" | "DARK"
  }
}
