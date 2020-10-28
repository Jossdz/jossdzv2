export interface MapState {
  /** The map feature reference */
  theme: any | null | "LIGHT" | "DARK" | ""
  showingMenu: any | true | false
}

export interface MapActions {
  type: "TOGGLETHEME" | "TOGGLEMENU" | "CLOSEMENU" | ""
}

export interface MyGlobalProps {
  theme: {
    mode: "LIGHT" | "DARK"
  }
}

export interface SanityHistory {
  title: {
    en?: string
    es?: string
  }
  description: {
    en?: string
    es?: string
  }
  datenplace: string
}
