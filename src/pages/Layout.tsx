import { Typography } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { Quiz } from '../components/Quiz/Quiz'
import { QuizStepper } from '../components/Quiz/QuizStepper'

export const Layout = () => {
	return (
		<div>
			<Navbar />
			<div style={{ marginTop: '10vh' }}>
				<Typography align="center" sx={{
                    fontSize: [22, 24, 30]
                }} mb={4}>
					<span>1. </span>
					Question
				</Typography>
				<Quiz />
			</div>
			<QuizStepper />
		</div>
	)
}
