import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FC } from 'react';

const AppHeader: FC = () => {

   return (
      <header className={styles.header}>
         <nav className={`${styles.navigation} mt-4 mb-4`}>
            <NavLink to='/'>
               <div className={`${styles.constructor_link} text text_type_main-default ml-5 mr-5`}><BurgerIcon type='primary' /><span className={'ml-2'}>Конструктор</span></div>
            </NavLink>
            <NavLink to='/'>
               <div className={`text text_type_main-default text_color_inactive ml-7 mr-5`}><ListIcon type="secondary" /><span className={'ml-2'}>Лента заказов</span></div>

            </NavLink>
         </nav>
         <Link to='/' className={styles.logo}>
            <Logo />
         </Link>
         <NavLink to='/profile'>
            <div className={`text text_type_main-default text_color_inactive ml-5 mr-5`}><ProfileIcon type="secondary" /><span className={'ml-2'}>Личный кабинет</span></div>
         </NavLink>
      </header >
   )
}

export default AppHeader;