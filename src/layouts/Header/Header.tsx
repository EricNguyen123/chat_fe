import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import LinkNav from '../../components/LinkNav';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import ButtonNav from '../../components/ButtonNav';
import { AvatarIcon } from '../../components/Icons';
import Menu from '../../components/Popper/Menu';
import { MyMenu } from '../../contains/Menu';
import { useEffect, useState } from 'react';
import { getUser } from '../../redux/users/actions';
import SearchCus from '../../components/Search';

const cx = classNames.bind(styles);

const Header = () => {
    const { t } = useTranslation('auth');
    const authSelector = useSelector(({ auth }: any) => auth);
    const userSelector = useSelector(({ users }: any) => users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userId, setUserId] = useState();

    const handleLogout = () => {
        dispatch(logout());
        navigate(config.routes.login);
    };

    const handleMenuChange = (e: any) => {
        if (e.separate) {
            handleLogout();
        }
    };

    useEffect(() => {
        if (authSelector.authenticated) {
            dispatch(getUser());
        }
    }, [authSelector.authenticated]);

    useEffect(() => {
        if (userSelector.currentUser && userSelector.currentUser.id) {
            setUserId(userSelector.currentUser.id);
        }
    }, [userSelector.currentUser]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <span className={cx('logo')}>CHAT</span>
            </div>
            <div className={cx('header-right')}>
                {!authSelector.authenticated ? (
                    <>
                        <LinkNav path={config.routes.register}>
                            <Button className={cx('btn-header')}>{t('form.linkSignup')}</Button>
                        </LinkNav>
                        <LinkNav path={config.routes.login}>
                            <Button className={cx('btn-header')}>{t('form.linkLogin')}</Button>
                        </LinkNav>
                    </>
                ) : (
                    <div className={cx('header-right-inner')}>
                        <SearchCus className={cx('searchcus')} />
                        <Menu items={MyMenu(t, userId)} onChange={handleMenuChange}>
                            <ButtonNav>
                                <div className={cx('img-user')}>
                                    <AvatarIcon
                                        width="48px"
                                        height="48px"
                                        avatar={
                                            userSelector.currentUser && userSelector.currentUser.imagAvatar
                                                ? userSelector.currentUser.imagAvatar
                                                : ''
                                        }
                                    />
                                </div>
                            </ButtonNav>
                        </Menu>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
