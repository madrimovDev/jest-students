import { PaletteMode } from "@mui/material"
import { grey } from "@mui/material/colors"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import React, { createContext, useContext, useState } from "react"

interface ThemeContextInterface {
  changeMode: {
    toggleColorMode: () => void
  }
}

const themeContext = createContext<ThemeContextInterface | null>(null)
themeContext.displayName = "ThemeContext"

export const useTheme = () => useContext(themeContext)

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>("light")

  const changeMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prev: PaletteMode) =>
          prev === "light" ? "dark" : "light"
        )
      },
    }),
    []
  )

  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: themeMode,
      },
    })
  }, [themeMode])

  const contextValues: ThemeContextInterface = {
    changeMode,
  }
  console.log("render")

  return (
    <themeContext.Provider value={contextValues}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </themeContext.Provider>
  )
}
