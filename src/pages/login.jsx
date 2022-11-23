import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/app-header/app-header";
import styles from './register.module.css';
import React from "react";
function Login() {
   const [value, setValue] = React.useState('')
   const inputRef = React.useRef(null)
   const onIconClick = () => {
      setTimeout(() => inputRef.current.focus(), 0)
      alert('Icon Click Callback')
   }
   return (
      <div>
         <div className={styles.container}>
            <h1 className={`${styles.title}text text_type_main-default`}>Вход</h1>
            <div className={styles.input}>
               <Input
                  type={'email'}
                  placeholder={'E-mail'}
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
            <div className={styles.input}>
               <Input
                  icon={'ShowIcon'}
                  type={'password'}
                  placeholder={'Пароль'}
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
               <Button size="medium" htmlType="submit">Войти</Button>
            </div>
            <div className={styles.link_container}>
               <h2 className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь?</h2>
               <a className={styles.link} href="/register">Зарегистрироваться</a>
            </div>
            <div className={styles.link_container}>
               <h2 className="text text_type_main-default text_color_inactive">Забыли пароль?</h2>
               <a className={styles.link} href="/forgot-password">Восстановить пароль</a>
            </div>
         </div>
      </div>
   )
}

export default Login;