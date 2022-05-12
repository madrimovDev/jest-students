import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

type Inputs = {
	name: string
	path: string
}

export const Login = () => {
	const scheme = Yup.object().shape({
		name: Yup.string().required('Required').min(2, 'Min Length 2'),
		path: Yup.string().required('Required').min(2, 'Min length 2'),
	})

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<Inputs>({ resolver: yupResolver(scheme) })

	const submit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<Container
			sx={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<form onSubmit={handleSubmit(submit)}>
				<Stack
					spacing={2}
					sx={{
						width: [280, 350],
						p: 2,
						boxShadow: `0 10px 10px rgba(0, 0, 0, 0.1)`,
						borderRadius: 1,
						border: 1,
						borderColor: (theme) => theme.palette.grey[200],
					}}
				>
					<Typography
						variant="h5"
						sx={{
							mb: 1,
							fontWeight: 400,
						}}
						color={'primary'}
					>
						Login
					</Typography>
					<TextField
						error={errors.name ? true : false}
						{...register('name')}
						variant="outlined"
						label="Your name"
						helperText={errors.name?.message}
					/>
					<TextField
						error={errors.path ? true : false}
						{...register('path')}
						variant="outlined"
						label="Path name"
						helperText={errors.path?.message}
					/>
					<Button variant="contained" type="submit" size="large">
						Login
					</Button>
				</Stack>
			</form>
		</Container>
	)
}
