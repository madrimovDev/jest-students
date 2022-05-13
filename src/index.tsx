import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./assets/index.css"
import { CssBaseline } from "@mui/material"
import App from "./App"
import { ThemeContextProvider } from "./context/ThemeContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
      <CssBaseline />
    </ThemeContextProvider>
  </BrowserRouter>
)
