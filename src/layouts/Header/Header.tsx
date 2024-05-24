import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import LinkNav from '../../components/LinkNav';
import { useTranslation } from "react-i18next";
import config from '../../config';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import ButtonNav from '../../components/ButtonNav';
import { UserIcon } from '../../components/Icons';
import Menu from '../../components/Popper/Menu';
import { MyMenu } from '../../contains/Menu';
import { useEffect } from 'react';


const cx = classNames.bind(styles);

const Header = () => {
  const { t } = useTranslation('auth');
  const authSelector = useSelector(({ auth } : any) => auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate(config.routes.login);
  }

  const handleMenuChange = (e : any) => {
    if(e.separate) {
      handleLogout()
    }
  };

  useEffect(()=>{

  },[authSelector.authenticated])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header-left')}>
        <span className={cx('logo')}>Chat</span>
      </div>
      <div className={cx('header-right')}>
        {!authSelector.authenticated ?
          (<>
            <LinkNav path={config.routes.register}>
              <Button className={cx('btn-header')}>
                {t("form.linkSignup")}
              </Button>
            </LinkNav>
            <LinkNav path={config.routes.login}>
              <Button className={cx('btn-header')}>
                {t("form.linkLogin")}
              </Button>
            </LinkNav>
          </>) : (
            <Menu items={MyMenu(t)} onChange={handleMenuChange}>
              <ButtonNav>
                <div className={cx('img-user')}>
                  <UserIcon width='48px' height='48px'/>
                </div>
              </ButtonNav>
            </Menu>
          )}
      </div>
    </div>
  );
};

export default Header;