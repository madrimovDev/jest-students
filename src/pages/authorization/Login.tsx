import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'

export const Login = () => {
	return (
		<Container
			sx={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<form>
				<Stack
					spacing={2}
					sx={{
						width: 320,
						border: '1px solid',
						borderColor: blueGrey.A100,
						padding: '20px',
						boxShadow: `0 10px 10px rgba(0,0,0,0.1)`,
					}}
				>
					<Typography variant="h6" color={'primary'}>
						Login
					</Typography>
					<TextField variant="outlined" label="Your name" />
					<TextField variant="outlined" label="Path name" />
					<Button variant="contained" type="submit" size="large">
						Login
					</Button>
				</Stack>
			</form>
		</Container>
	)
}
