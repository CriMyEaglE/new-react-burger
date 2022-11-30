import styles from './not-found.module.css';
import { Link } from 'react-router-dom';
import image404 from '../../images/404.png';
import { FC } from 'react';

const NotFound: FC = () => {

  return (
    <div className={styles.container}>
      <h3 className='text_type_main-large'>Ты пойман котополицией!</h3>
      <img src={image404} className={styles.image} />
      <p className={`${styles.paragraph} text_type_main-default`}>Вернуться на
        <Link className={`${styles.link} text_type_main-default`} to='/'>главную страницу</Link></p>
    </div>
  );
};

export default NotFound;
