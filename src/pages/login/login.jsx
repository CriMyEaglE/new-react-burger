import styles from './login.module.css';
import { useEffect, useRef, useState } from 'react';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useHistory } from 'react-router-dom';
import { loginUserApi } from '../../services/actions/login';
import { useDispatch } from 'react-redux';

function Login() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [input, setInput] = useState({
      type: 'password',
      icon: 'ShowIcon'
   });
   const inputRef = useRef(null);
   const dispatch = useDispatch();
   const history = useHistory();
   const login = JSON.parse(sessionStorage.getItem('login'));

   const handleLogin = (e) => {
      e.preventDefault();
      const userData = {
         email,
         password
      }
      dispatch(loginUserApi(userData))
   }

   useEffect(() => {
      if (login) {
         history.push('/')
      }
   }, [login, history])

   const togglePasswordVision = () => {
      input.type === 'password' ? setInput({ type: 'text', icon: 'HideIcon' }) : setInput({ type: 'password', icon: 'ShowIcon' });
   }

   return (
      <div className={styles.container}>
         <form className={styles.container} onSubmit={handleLogin}>
            <h3 className={`${styles.title} text_type_main-medium`}>Вход</h3>
            <div className='mt-6'>
               <Input type='email' placeholder={'E-mail'}
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  name={'name'}
                  error={false}
                  ref={inputRef}
                  errorText={'Ошибка'} />
            </div>
            <div className='mt-6 mb-6'>
               <PasswordInput
                  onChange={e => setPassword(e.target.value)}
                  type={input.type}
                  icon={input.icon}
                  placeholder={'Пароль'}
                  value={password}
                  onIconClick={togglePasswordVision} />
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
