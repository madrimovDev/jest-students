import { Box, Button, Grid, Typography } from '@mui/material'

export const Quiz = () => {
	return (
		<Box
			sx={{
				border: 1,
				borderColor: (theme) => theme.palette.divider,
				width: '90%',
				minWidth: '280px',
				p: [1, 2, 3],
				mx: 'auto',
			}}
		>
			<Typography
				variant="body1"
				component="p"
				sx={{
					fontSize: [16, 18, 22],
				}}
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsum
				nobis nihil deserunt delectus excepturi quasi. Veritatis ea dolorem?
			</Typography>
			<Grid container spacing={2} mt={2}>
				<Grid item xs={12} sm={6}>
					<Button variant="outlined" size="large" sx={{ width: '100%' }}>
						A. Lorem, ipsum
					</Button>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Button variant="outlined" size="large" sx={{ width: '100%' }}>
						B. Lorem, ipsum
					</Button>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Button variant="outlined" size="large" sx={{ width: '100%' }}>
						C. Lorem, ipsum
					</Button>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Button variant="outlined" size="large" sx={{ width: '100%' }}>
						D. Lorem, ipsum
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}
