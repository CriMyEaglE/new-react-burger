import styles from './forgot-password.module.css';
import { FormEventHandler, useCallback, useRef, useState } from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useHistory } from 'react-router-dom';
import { getRestoreSuccessApi } from '../../services/actions/forgot-password';
import { Redirect } from 'react-router-dom';
import { getCookie } from '../../utils/coockie';
import { useDispatch, useSelector } from '../../utils/hooks';

function ForgotPassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  const success = useSelector(state => state.restorePassword.success);
  const login: boolean = !!getCookie('access');
  const [email, setEmail] = useState('');
  const inputRef = useRef(null)


  const restorePassword: FormEventHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(getRestoreSuccessApi());
    success ? history.push('/reset-password') : history.push('/forgot-password')
  }, [dispatch, success, history])

  if (success) {
    return (<Redirect to={'/reset-password'} />)
  }

  if (login) {
    return (<Redirect to={'/profile'} />)
  }

  return (
    <form className={styles.container} onSubmit={restorePassword}>
      <h3 className={`${styles.title} text_type_main-medium`}>Восстановление пароля</h3>
      <div className='mt-6 mb-6'>
        <Input type='email' placeholder={'Укажите e-mail'}
          onChange={e => setEmail(e.target.value)}
          value={email}
          name={'name'}
          error={false}
          ref={inputRef}
          errorText={'Ошибка'} />
      </div>
      <Button
        htmlType='submit'
        type='primary'
        size='medium'
      >Восстановить</Button>
      <p className={`${styles.paragraph} text_type_main-default`}>Вспомнили пароль? <Link to='/login' className={styles.link}>Войти</Link></p>
    </form>
  )
};

export default ForgotPassword;
