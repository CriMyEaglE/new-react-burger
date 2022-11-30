import styles from './reset-password.module.css';
import { FC, FormEventHandler, useRef } from 'react';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { getResetSuccessApi } from '../../services/actions/reset-password';
import { useDispatch, useForm, useSelector } from '../../utils/hooks';

const ResetPassword: FC = () => {
   const login: boolean = useSelector(state => state.loginUser.login);
   const reseted = useSelector(state => state.resetPassword.success);
   const inputRef = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch();

   console.log(login, 'login', reseted, 'reseted')

   const { values, setValues } = useForm({
      password: '',
      token: ''
   });

   const resetPassword: FormEventHandler = (e) => {
      e.preventDefault();
      dispatch(getResetSuccessApi());
   }

   if (login) {
      return (<Redirect to={'/profile'} />)
   }

   if (reseted) {
      return (<Redirect to={'/'} />)
   }

   return (
      <form className={styles.container} onSubmit={resetPassword}>
         <h3 className={`${styles.title} text_type_main-medium`}>Восстановление пароля</h3>
         <div className='mt-6'>
            <PasswordInput
               onChange={e => setValues({ ...values, password: e.target.value })}
               placeholder={'Введите новый пароль'}
               value={values.password} />
         </div>
         <div className='mt-6 mb-6'>
            <Input type='text' placeholder={'Введите код из письма'}
               onChange={e => setValues({ ...values, token: e.target.value })}
               value={values.token}
               name={'name'}
               error={false}
               ref={inputRef}
               errorText={'Ошибка'}
            />
         </div>
         <Button
            htmlType='submit'
            type='primary'
            size='medium'>Сохранить</Button>
         <p className={`${styles.paragraph} text_type_main-default mt-20 mb-4`}>Вспомнили пароль?
            <Link to='/login' className={`${styles.link} ml-2`}>Войти</Link></p>
      </form>
   )
};

export default ResetPassword;
