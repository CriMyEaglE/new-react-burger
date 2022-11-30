import styles from './registration.module.css';
import { useRef, FormEventHandler } from 'react';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { registrationUserApi } from '../../services/actions/registration'
import { useDispatch, useForm, useSelector } from '../../utils/hooks';
import { getCookie } from '../../utils/coockie';

function Registration() {
   const success = useSelector(state => state.registrationUser.success);
   const login: boolean = !!getCookie('access');
   const dispatch = useDispatch();
   const handleRegistration: FormEventHandler = (e) => {
      e.preventDefault();
      const userData = {
         name: values.name,
         email: values.email,
         password: values.password
      };
      dispatch(registrationUserApi(userData));
   }

   const { values, setValues } = useForm({
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
               onChange={e => setValues({ ...values, name: e.target.value })}
               value={values.name}
               name={'name'}
               error={false}
               ref={inputRef}
               errorText={'Ошибка'} />
         </div>
         <Input type='email' placeholder={'E-mail'}
            onChange={e => setValues({ ...values, email: e.target.value })}
            value={values.email}
            name={'name'}
            error={false}
            ref={inputRef}
            errorText={'Ошибка'} />
         <div className='mt-6 mb-6'>
            <PasswordInput
               onChange={e => setValues({ ...values, password: e.target.value })}
               value={values.password}
               placeholder={'Пароль'}
               icon={'ShowIcon'} />
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
