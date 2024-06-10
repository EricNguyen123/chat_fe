import classNames from 'classnames/bind';
import styles from './ListMessages.module.scss';
import React, { useEffect, useState } from 'react';
import { CloseButton, DownIcon, EditIcon, PlusImport } from '../../../../components/Icons';
import { Link } from 'react-router-dom';
import ItemUser from '../item-user';
import Menu from '../../../../components/MenuItem/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getRoom } from '../../../../redux/room/actions';
import PopupAddGroup from '../popup-add-group';

const cx = classNames.bind(styles);

const ListMessages: React.FC = () => {
    const userSelector = useSelector(({ users }: any) => users);
    const roomsSelector = useSelector(({ rooms }: any) => rooms);
    const [rooms, setRooms] = useState<any[]>([]);
    const [onViewAddGroup, setOnViewAddGroup] = useState<boolean>(false);
    const { t } = useTranslation('messages');
    const dispatch = useDispatch();

    useEffect(() => {
        if (roomsSelector.loading) {
            closeViewer();
        }
        if (roomsSelector && roomsSelector.rooms && userSelector.currentUser) {
            const newRooms = roomsSelector.rooms.map((e: any) => {
                if (e.groups === 0) {
                    return {
                        ...e,
                        roomInfor: e.users.find((r: any) => r.id !== userSelector.currentUser.id),
                    };
                } else {
                    return e;
                }
            });
            setRooms(newRooms);
        }
    }, [roomsSelector, userSelector]);

    useEffect(() => {
        dispatch(getRoom());
    }, []);

    const handleAddGroup = () => {
        setOnViewAddGroup(!onViewAddGroup);
    };

    const closeViewer = () => {
        setOnViewAddGroup(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-messages')}>
                <div className={cx('header-left')}>
                    <div className={cx('user-name')}>
                        <span className={cx('text')}>{userSelector.currentUser && userSelector.currentUser.name}</span>
                    </div>
                    <div className={cx('icon-down')}>
                        <DownIcon />
                    </div>
                </div>
                <div className={cx('header-right')}>
                    <div className={cx('icon-header')}>
                        <EditIcon className={cx('icon-edit')} />
                    </div>
                    <div className={cx('icon-header')} onClick={handleAddGroup}>
                        <PlusImport className={cx('icon-plus')} />
                    </div>
                </div>
            </div>
            <div className={cx('title-body')}>
                <div className={cx('context')}>
                    <div className={cx('left')}>
                        <h1 className={cx('text')}>{t('messages.msg')}</h1>
                    </div>
                    <Link to={'#'} className={cx('link-req')}>
                        {t('messages.req')}
                    </Link>
                </div>
            </div>
            <div className={cx('body-messages')}>
                <div className={cx('inner-messages')}>
                    <Menu>
                        {rooms.map((room, index) => (
                            <ItemUser key={index} to={`/messages/${room.id}`} data={room.roomInfor} />
                        ))}
                    </Menu>
                </div>
            </div>
            {onViewAddGroup && (
                <div className={cx('add-viewer')}>
                    <div className={cx('box-add')}>
                        <button onClick={closeViewer} className={cx('close-button')}>
                            <CloseButton />
                        </button>
                        <PopupAddGroup />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListMessages;
