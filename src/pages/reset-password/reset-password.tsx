import styles from './reset-password.module.css';
import { FC, FormEventHandler, useRef, useState } from 'react';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { getResetSuccessApi } from '../../services/actions/reset-password';
import { getCookie } from '../../utils/coockie';
import { useForm, useSelector } from '../../utils/hooks';

const ResetPassword: FC = () => {
   const login: boolean = !!getCookie('access');
   const reseted = useSelector(state => state.resetPassword.success);
   const [value, setValue] = useState('');
   const inputRef = useRef<HTMLInputElement>(null);
   const resetPassword: FormEventHandler = (e) => {
      e.preventDefault();
      getResetSuccessApi()
   }

   const { values, setValues } = useForm({
      code: '',
      password: ''
   });

   if (login) {
      return (<Redirect to={'/profile'} />)
   }

   if (reseted) {
      return (<Redirect to={'/forgot-password'} />)
   }

   return (
      <form className={styles.container} onSubmit={resetPassword}>
         <h3 className={`${styles.title} text_type_main-medium`}>Восстановление пароля</h3>
         <div className='mt-6'>
            <PasswordInput
               onChange={e => setValues({ ...values, password: e.target.value })}
               placeholder={'Введите новый пароль'}
               value='' />
         </div>
         <div className='mt-6 mb-6'>
            <Input type='text' placeholder={'Введите код из письма'}
               onChange={e => setValues({ ...values, code: e.target.value })}
               value={value}
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
