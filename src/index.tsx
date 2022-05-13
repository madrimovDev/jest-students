import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
// * Material UI
import { CssBaseline } from "@mui/material"
import { ThemeContextProvider } from "./context/ThemeContext"
// * assets
import "./assets/index.css"
// * components
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
      <CssBaseline />
    </ThemeContextProvider>
  </BrowserRouter>
)
