import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import { Box } from "@mui/system"
import { useState } from "react"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { useTheme } from "../context/ThemeContext"

export const Navbar = () => {
  const [isLight, setIsLight] = useState(true)
  const theme = useTheme()

  const changeMode = () => {
    setIsLight((prev) => !prev)
    theme?.changeMode.toggleColorMode()
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="div"
            variant="h6"
            sx={{ fontWeight: 100, flexGrow: 1 }}
          >
            Jest-Students
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton onClick={changeMode}>
              {isLight ? (
                <LightModeIcon
                  sx={{
                    fill: "white",
                  }}
                />
              ) : (
                <DarkModeIcon color="primary" />
              )}
            </IconButton>
            <Button
              color="inherit"
              sx={{ fontWeight: 400, display: "flex", gap: 0.5 }}
            >
              <LogoutIcon fontSize="small" />
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}
