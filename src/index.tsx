import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/index.css'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const theme = createTheme()

root.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
		<CssBaseline />
	</BrowserRouter>
)
