import { TextField, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useUser } from '../../Providers/user'


import { Container, Content } from './styles'

const Login = () => {
  const history = useHistory()
  const { signIn } = useUser()

  // const [defaultValues] = useState({
  //   firstName: '',
  //   lastName: '',
  //   amount: '',
  // })

  const schema = yup.object().shape({
    username: yup.string().required('Campo obrigatório!'),
    password: yup.string().required('Campo obrigatório!'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    // defaultValues: { ...defaultValues },
    resolver: yupResolver(schema),
  })

  const onSubmitFunction = (data) => {
    signIn(data)
    history.push('/')
  }

  return (
    <Container>
      <h1>tech.shop</h1>
      <Content onSubmit={handleSubmit(onSubmitFunction)}>
        <TextField
          helperText={errors.username?.message}
          error={!!errors.username}
          {...register('username')}
          fullWidth
          label='Username'
          variant='outlined'
        />
        <TextField
          helperText={errors.password?.message}
          error={!!errors.password}
          {...register('password')}
          fullWidth
          label='Senha'
          type='password'
        />
        <Button
          // disabled={
          //   !(
          //     Object.keys(dirtyFields).length ===
          //     Object.keys(defaultValues).length
          //   )
          // }
          type='submit'
          fullWidth
          sx={{
            backgroundColor: '#c85311',
            '&:hover': { backgroundColor: '#80CEE1' },
          }}
          variant='contained'
        >
          Entrar
        </Button>
      </Content>
    </Container>
  )
}
export default Login
