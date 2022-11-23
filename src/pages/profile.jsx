import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../components/app-header/app-header";
import styles from './profile.module.css';
import React from "react";
function Profile() {
   const [value, setValue] = React.useState('Марк')
   const inputRef = React.useRef(null)
   const onIconClick = () => {
      setTimeout(() => inputRef.current.focus(), 0)
      alert('Icon Click Callback')
   }
   return (
      <div>
         <div className={styles.horizontal_container}>
            <nav className={styles.vertical_container}>
               <a className={`${styles.link} text text_type_main-medium`}>Профиль</a>
               <a className={`${styles.link} text text_type_main-medium text_color_inactive`}>История заказов</a>
               <a className={`${styles.link} text text_type_main-medium text_color_inactive`}>Выход</a>
               <p className={`${styles.description} text text_type_main-default text_color_inactive`}>В этом разделе вы можете
                  изменить свои персональные данные</p>
            </nav>
            <div className={styles.vertical_container}>
               <div className={styles.input}>
                  <Input
                     icon={'EditIcon'}
                     type={'text'}
                     placeholder={'Имя'}
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
                     icon={'EditIcon'}
                     type={'email'}
                     placeholder={'Логин'}
                     onChange={e => setValue(e.target.value)}
                     value={'mail@stellar.burgers'}
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
                     icon={'EditIcon'}
                     type={'password'}
                     placeholder={'Пароль'}
                     onChange={e => setValue(e.target.value)}
                     value={'******'}
                     name={'name'}
                     error={false}
                     ref={inputRef}
                     onIconClick={onIconClick}
                     errorText={'Ошибка'}
                     size={'default'}
                     extraClass="ml-1"
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile;