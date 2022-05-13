import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { Navbar } from "../components/Navbar"
import { Quiz } from "../components/Quiz/Quiz"
import { QuizStepper } from "../components/Quiz/QuizStepper"

export const Layout = () => {	
  return (
    <>
      <Navbar />
      <Box sx={{
		  mt: '15vh',
		  minHeight: '100%'
	  }}>
        <Typography
          align="center"
          sx={{
            fontSize: [22, 24, 30],
          }}
          mb={4}
          color={(theme) => theme.palette.text.primary}
        >
          <span>1. </span>
          Question
        </Typography>
        <Quiz />
      </Box>
      <QuizStepper />
    </>
  )
}
