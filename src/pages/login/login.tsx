import styles from './login.module.css';
import { useEffect, useRef, FC, FormEventHandler } from 'react';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { loginUserApi } from '../../services/actions/login';
import { getCookie } from '../../utils/coockie';
import { useDispatch, useForm } from '../../utils/hooks';

const Login: FC = () => {
   const { values, setValues } = useForm({ email: '', password: '' });
   const inputRef = useRef(null);
   const dispatch = useDispatch();
   const history = useHistory();
   const login: boolean = !!getCookie('access');
   const handleLogin: FormEventHandler = (e) => {
      e.preventDefault();
      const userData = values;
      dispatch(loginUserApi(userData))
   }

   useEffect(() => {
      if (login) {
         history.push('/')
      }
   }, [login, history, dispatch])
   return (
      <div className={styles.container}>
         <form className={styles.container} onSubmit={handleLogin}>
            <h3 className={`${styles.title} text_type_main-medium`}>Вход</h3>
            <div className='mt-6'>
               <Input type='email' placeholder={'E-mail'}
                  onChange={e => setValues({ ...values, email: e.target.value })}
                  value={values.email}
                  name={'name'}
                  error={false}
                  ref={inputRef}
                  errorText={'Ошибка'} />
            </div>
            <div className='mt-6 mb-6'>
               <PasswordInput
                  onChange={e => setValues({ ...values, password: e.target.value })}
                  placeholder={'Пароль'}
                  value={values.password} />
            </div>
            <Button
               htmlType='submit'
               type='primary'
               size='medium'>Войти</Button>
         </form>
         <p className={`${styles.paragraph} text_type_main-default mt-20 mb-4`}>Вы - новый пользователь?
            <Link to='/register' className={`${styles.link}`}>Зарегистрироваться</Link></p>
         <p className={`${styles.paragraph} text_type_main-default`}>Забыли пароль?
            <Link to='/forgot-password' className={`${styles.link}`}>Восстановить пароль</Link></p>
      </div >
   )
};

export default Login;