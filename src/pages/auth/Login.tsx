import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { LoadingButton } from "@mui/lab"

type Inputs = {
  name: string
  path: string
}

export const Login = () => {
  const scheme = Yup.object().shape({
    name: Yup.string().required("Required").min(2, "Min Length 2"),
    path: Yup.string().required("Required").min(2, "Min length 2"),
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({ resolver: yupResolver(scheme) })

  const submit: SubmitHandler<Inputs> = (data) => {
    reset()
    console.log(data)
  }

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.mode,
      }}
    >
      <form onSubmit={handleSubmit(submit)}>
        <Alert
          sx={{
            position: "absolute",
            top: "20vh",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          severity="error"
        >
          This is an error alert — check it out!
        </Alert>
        <Stack
          spacing={2}
          sx={{
            width: [280, 350],
            p: 2,
            boxShadow: `0 10px 10px rgba(0, 0, 0, 0.1)`,
            borderRadius: 1,
            border: 1,
            borderColor: (theme) => theme.palette.divider,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 1,
              fontWeight: 400,
            }}
            color={theme => theme.palette.text.primary}
          >
            Login
          </Typography>
          <TextField
            error={errors.name ? true : false}
            {...register("name")}
            variant="outlined"
            label="Your name"
            helperText={errors.name?.message}
          />
          <TextField
            error={errors.path ? true : false}
            {...register("path")}
            variant="outlined"
            label="Path name"
            helperText={errors.path?.message}
          />
          <LoadingButton
            loadingIndicator={
              <CircularProgress color="inherit" size={16} title="loading" />
            }
            loading={isSubmitSuccessful}
            variant="contained"
            size="large"
            type="submit"
          >
            LOGIN
          </LoadingButton>
        </Stack>
      </form>
    </Container>
  )
}
