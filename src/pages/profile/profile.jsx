import styles from './profile.module.css';
import { useCallback, useEffect, useState } from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserApi } from '../../services/actions/login';
import { getUserInfoApi, patchUserInfoApi } from '../../services/actions/profile';

function Profile() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.userProfile.user.name);
  const userEmail = useSelector(state => state.userProfile.user.email);
  const login = JSON.parse(sessionStorage.getItem('login'));
  const [data, setData] = useState({
    name: userName,
    email: userEmail,
    password: '',
  });
  const render = data.name !== userName || data.email !== userEmail || data.password.length > 0;

  const saveChanges = (e) => {
    e.preventDefault();
    const { email, name, password } = data;
    dispatch(patchUserInfoApi(email, name, password));
    setData({
      name: userName,
      email: userEmail,
      password: ''
    })
  };

  const cancelChanges = () => {
    setData({
      name: userName,
      email: userEmail,
      password: ''
    })
  };

  const logoutUser = useCallback(() => {
    dispatch(logoutUserApi());
    sessionStorage
      .setItem('login', JSON.stringify(false));
  }, [dispatch]);

  useEffect(() => {
    setData({
      name: userName,
      email: userEmail,
      password: ''
    })
  }, [userEmail, userName]);

  useEffect(() => {
    if (login) {
      dispatch(getUserInfoApi());
    }
  }, [dispatch, login]);

  return (
    <div className={styles.container}>
      <nav className={`${styles.nav} mr-15`}>
        <NavLink
          to={{ pathname: '/profile' }} exact={true}
          className={styles.tab}
          activeClassName={styles.active}>
          <h3 className='text_type_main-medium mt-4 mb-8'>Профиль</h3>
        </NavLink>
        <NavLink
          to={{ pathname: '/profile/orders' }}
          className={styles.tab}
          activeClassName={styles.active}>
          <h3 className='text_type_main-medium mb-8'>История заказов</h3>
        </NavLink>
        <NavLink
          to={{ pathname: '/login' }}
          className={styles.tab}
          activeClassName={styles.active}>
          <h3 onClick={logoutUser} className='text_type_main-medium mb-4'>Выход</h3>
        </NavLink>
        <p className={'text_color_inactive mt-20'}>В этом разделе вы можете
          изменять свои персональные данные</p>
      </nav>
      <div>
        <form className={styles.inputs} onSubmit={saveChanges}>
          <div className='mt-6'>
            <Input type='text' placeholder={'Имя'} icon={'EditIcon'}
              onChange={e => setData({ ...data, name: e.target.value })}
              value={data.name}
            />
          </div>
          <div className='mt-6'>
            <Input type='email' placeholder={'Логин'} icon={'EditIcon'}
              onChange={e => setData({ ...data, email: e.target.value })}
              value={data.email} />
          </div>
          <div className='mt-6 mb-6'>
            <Input type='password' placeholder={'Пароль'} icon={'EditIcon'}
              onChange={e => setData({ ...data, password: e.target.value })}
              value={data.password} />
          </div>
          {render ? <div className={styles.button_container}>
            <div className={styles.button}><Button
              onClick={cancelChanges}
              htmlType='button'
              type='primary'
              size='medium'>Отмена
            </Button></div>
            <div className={styles.button}><Button
              htmlType='submit'
              type='primary'
              size='medium'>Сохранить
            </Button></div>
          </div> : null}
        </form>
      </div>
    </div>
  )
};

export default Profile;


