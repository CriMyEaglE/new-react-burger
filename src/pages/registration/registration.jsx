import styles from './registration.module.css';
import { useRef, useState } from 'react';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { registrationUserApi } from '../../services/actions/registration'
import { useDispatch, useSelector } from 'react-redux';

function Registration() {
   const success = useSelector(state => state.registrationUser.success);
   const login = JSON.parse(sessionStorage.getItem('login'));
   const dispatch = useDispatch();
   const handleRegistration = (e) => {
      e.preventDefault();
      const userData = {
         name: data.name,
         email: data.email,
         password: data.password
      };
      dispatch(registrationUserApi(userData));
   }
   const [input, setInput] = useState({
      type: 'password',
      icon: 'ShowIcon'
   });

   const togglePasswordVision = () => {
      input.type === 'password' ? setInput({ type: 'text', icon: 'HideIcon' }) : setInput({ type: 'password', icon: 'ShowIcon' });
   }

   const [data, setData] = useState({
      name: '',
      email: '',
      password: ''
   });

   const inputRef = useRef(null);

   if (login) {
      return (<Redirect to={'/profile'} />)
   }

   return (
      <form className={styles.container} onSubmit={handleRegistration}>
         <h3 className={`${styles.title} text_type_main-medium`}>Регистрация</h3>
         <div className='mt-6 mb-6'>
            <Input type='text' placeholder={'Имя'}
               onChange={e => setData({ ...data, name: e.target.value })}
               value={data.name}
               name={'name'}
               error={false}
               ref={inputRef}
               errorText={'Ошибка'} />
         </div>
         <Input type='email' placeholder={'E-mail'}
            onChange={e => setData({ ...data, email: e.target.value })}
            value={data.email}
            name={'name'}
            error={false}
            ref={inputRef}
            errorText={'Ошибка'} />
         <div className='mt-6 mb-6'>
            <PasswordInput
               onChange={e => setData({ ...data, password: e.target.value })}
               value={data.password}
               type={input.type}
               placeholder={'Пароль'}
               icon={input.icon}
               onIconClick={togglePasswordVision} />
         </div>
         <Button
            htmlType='submit'
            type='primary'
            size='medium'>Зарегистрироваться</Button>
         <p className={`${styles.paragraph} text_type_main-default mt-20 mb-4`}>Уже зарегистрированы?
            <Link to='/login' className={`${styles.link}`}>Войти</Link></p>
         {success ? <Redirect to={'/login'} /> : <Redirect to={'/register'} />}
      </form>
   )
};

export default Registration;
