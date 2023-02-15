import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import WhiteSignUpButton from '../../buttons/WhiteSignUpButton'
import { Form, LogoContainer, Logo } from './Auth.styled'

import { getModal } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'

const SignUp = () => {
  const dispatch = useDispatch()

  return (
    <Form>
      <LogoContainer>
        <Logo src="/img/AuthLogo.png" />
      </LogoContainer>

      <Input placeholder={'Email'} width="278px"></Input>
      <Input placeholder={'Пароль'} width="278px"></Input>
      <Input placeholder={'Повторите пароль'} width="278px"></Input>
      <Input placeholder={'Имя (необязательно)'} width="278px"></Input>
      <Input placeholder={'Фамилия (необязательно)'} width="278px"></Input>
      <Input placeholder={'Город (необязательно)'} width="278px"></Input>

      <Button type="submit" margin="60px 0 20px 0" width="278px">
        Зарегистрироваться
      </Button>
      <WhiteSignUpButton
        type="button"
        onClick={() => {
          dispatch(getModal('login'))
        }}
      >
        Войти
      </WhiteSignUpButton>
    </Form>
  )
}

export default SignUp
