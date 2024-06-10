import classNames from 'classnames/bind';
import styles from './NavBarLeft.module.scss';
import Menu, { MenuItem } from '../../components/MenuItem';
import { itemNavBar } from '../../contains/ItemNavBar';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOtherUser, getUser, getUsers } from '../../redux/users/actions';
import { useNavigate } from 'react-router-dom';
import ButtonUpload from '../../components/ButtonUpload';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import AccountItem from '../../components/AccountItem';

const cx = classNames.bind(styles);

const NavBarLeft = () => {
    const { t } = useTranslation('navbar');
    const dispatch = useDispatch();
    const userSelector = useSelector(({ users }: any) => users);
    const items = itemNavBar(userSelector && userSelector.currentUser ? userSelector.currentUser : undefined);
    const data = localStorage.data ? JSON.parse(localStorage.data) : undefined;
    const currentUser = data ? data.id : undefined;

    const navigate = useNavigate();
    const handleRedirectPage = (path: string) => {
        navigate(path);
    };

    const handleUploadPost = () => {
        handleRedirectPage(config.routes.upload_post);
    };

    const users: any[] = useMemo(() => {
        if (currentUser && Array.isArray(userSelector.usersInfo) && userSelector.usersInfo.length > 0) {
            const newUsers: any[] = [];
            userSelector.usersInfo.forEach((item: any) => {
                if (item.id !== currentUser && item.isFollowing) {
                    newUsers.push({ ...item });
                }
            });

            return [...newUsers];
        }
        return [];
    }, [currentUser, userSelector.usersInfo]);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const handleUser = (user: any) => {
        dispatch(getOtherUser({ id: user.id }));
    };

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        title={item.title}
                        to={item.path}
                        icon={item.icon}
                        activeIcon={item.activeIcon}
                        onClick={() => {
                            dispatch(getUser());
                        }}
                    />
                ))}
                <div className={cx('line-nav')}></div>
                <div className={cx('upload-post')}>
                    <ButtonUpload
                        className={cx('custom')}
                        text={t('navbar.btn_upload')}
                        onClick={() => {
                            handleUploadPost();
                        }}
                    />
                </div>
                <div className={cx('line-nav')}></div>
                {users.length > 0 && (
                    <>
                        <h2 className={cx('title-nav-footer')}>{t('navbar.title_footer')}</h2>
                        {users.map((user, index) => (
                            <AccountItem
                                key={index}
                                data={user}
                                onClick={() => {
                                    handleUser(user);
                                }}
                            />
                        ))}
                    </>
                )}
            </Menu>
            <div className={cx('footer')}></div>
        </aside>
    );
};

export default NavBarLeft;
