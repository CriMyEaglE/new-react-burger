import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';

function AppHeader() {

   return (
      <header className={styles.header}>
         <nav className={`${styles.navigation} mt-4 mb-4`}>
            <a href="#" className={`${styles.constructor_link} text text_type_main-default ml-5 mr-5`}><BurgerIcon /><span className={'ml-2'}>Конструктор</span></a>
            <a href="#" className={`text text_type_main-default text_color_inactive ml-7 mr-5`}><ListIcon type="secondary" /><span className={'ml-2'}>Лента заказов</span></a>
         </nav>
         <div className={styles.logo} >
            <Logo />
         </div>
         <a href="#" className={`text text_type_main-default text_color_inactive ml-5 mr-5`}><ProfileIcon type="secondary" /><span className={'ml-2'}>Личный кабинет</span></a>
      </header >
   )
}

export default AppHeader;