import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/app-header/app-header";
import styles from './register.module.css';
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';

function ForgotPassword() {

   const [value, setValue] = React.useState('')
   const inputRef = React.useRef(null)

   const dispatch = useDispatch();

   const onIconClick = () => {
      setTimeout(() => inputRef.current.focus(), 0)
      alert('Icon Click Callback')
   }

   const handleClick = () => {
      console.log('Clicked!');
      // console.log(success);
   };

   // const success = useSelector(state => state.resetPassword.success);
   const history = useHistory();
   return (
      <div>
         <div className={styles.container}>
            <h1 className={`${styles.title}text text_type_main-default`}>Восстановление пароля</h1>
            <div className={styles.input}>
               <Input
                  type={'email'}
                  placeholder={'Укажите E-mail'}
                  onChange={e => setValue(e.target.value)}
                  value={value}
                  name={'name'}
                  error={false}
                  ref={inputRef}
                  onIconClick={onIconClick}
                  errorText={'Ошибка'}
                  size={'default'}
                  extraClass="ml-1"
               />
            </div>
            <div className={styles.button}>
               <Button size="medium" htmlType="submit" onClick={handleClick}>Восстановить</Button>
            </div>
            <div className={styles.link_container}>
               <h2 className="text text_type_main-default text_color_inactive">Вспомнили пароль?</h2>
               <Link to="/login" className={styles.link}>Войти</Link>
            </div>
         </div>
      </div>
   )
}

export default ForgotPassword;