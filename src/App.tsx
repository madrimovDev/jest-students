import { Box } from "@mui/material"
import { Login } from "./pages/auth/Login"
import { Layout } from "./pages/Layout"

function App() {
  return (
    <Box className="App" minHeight="100vh" bgcolor={(theme) => theme.palette.background.paper}>
      <Layout />
    </Box>
  )
}

export default App
