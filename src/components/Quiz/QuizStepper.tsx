import { Box, Step, StepLabel, Stepper } from '@mui/material'

export const QuizStepper = () => {
	const step = new Array(20).fill(1)
	return (
		<Box sx={{
            position: 'absolute',
            bottom: 0,
            p: 3,
            width: "100%",
            border: 1,
            display: {
                xs: 'none',
                sm: 'none',
                md: 'block'
            },
            borderColor: theme => theme.palette.divider
        }}>
			<Stepper activeStep={2} alternativeLabel>
				{step.map((label, index) => (
					<Step key={index}>
						<StepLabel></StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	)
}
