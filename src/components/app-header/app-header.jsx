import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from './app-header.module.css';

function AppHeader() {

   return (
      <div className={headerStyles.header}>

         <nav>
            <a href="#" className={headerStyles.link}><BurgerIcon />Конструктор</a>
            <a href="#" className={headerStyles.link}><ListIcon type="secondary" />Лента заказов</a>
         </nav>

         <Logo />

         <a href="#" className={headerStyles.link}><ProfileIcon type="secondary" />Личный кабинет</a>
      </div>
   )
}

export default AppHeader;