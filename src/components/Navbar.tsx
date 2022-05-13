import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

export const Navbar = () => {
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
					<Button color="inherit" sx={{ fontWeight: 400, display: "flex", gap: 0.5 }}>
						<LogoutIcon fontSize='small'/>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	)
}
