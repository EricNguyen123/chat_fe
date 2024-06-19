import classNames from 'classnames/bind';
import styles from './BoxDetail.module.scss';
import React, { useEffect, useMemo, useState } from 'react';
import AccountItem from '../../../../components/AccountItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonItem from '../../../../components/ButtonItem';
import { DownIcon } from '../../../../components/Icons';
import { setupSocketEvents } from '../../../../services/socketEvents';
import ConfirmDelete from '../../../../components/ConfirmDelete';
import { outMessages } from '../../../../redux/message/actions';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

interface Props {
    handlerViewer?: () => void;
}

const BoxDetail: React.FC<Props> = ({ handlerViewer }) => {
    const { t } = useTranslation('post');
    const userSelector = useSelector(({ users }: any) => users);
    const roomsSelector = useSelector(({ rooms }: any) => rooms);
    const { id } = useParams<{ id: string }>();
    const [moreBtn, setMoreBtn] = useState<boolean>(false);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const [outOpen, setOutOpen] = useState<boolean>(false);
    const [roomRole, setRoomRole] = useState<boolean>(false);
    const roomDetail = roomsSelector.rooms && roomsSelector.rooms.find((e: any) => id && parseInt(id, 10) === e.id);
    const dispatch = useDispatch();
    const currentId = userSelector && userSelector.currentUser ? userSelector.currentUser.id : undefined;

    const onDelete = () => {
        setDeleteOpen(!deleteOpen);
    };

    const onOut = () => {
        setOutOpen(!outOpen);
    };

    const closeViewer = () => {
        setDeleteOpen(false);
        setOutOpen(false);
        handlerViewer && handlerViewer();
    };

    const handleConfirmDelete = () => {
        closeViewer();
        if (id && currentId) {
            const socketEvents = setupSocketEvents && setupSocketEvents(currentId);
            socketEvents && socketEvents.sendDeleteRoom(id, currentId);
        }
    };

    const handleOutRoom = () => {
        closeViewer();
        id &&
            dispatch(
                outMessages({
                    outCheck: 1,
                    userId: parseInt(currentId, 10),
                    roomId: parseInt(id, 10),
                }),
            );
    };

    const users: any[] = useMemo(() => {
        if (roomDetail) {
            const members = roomDetail.users.filter((e: any) => currentId && e.id !== currentId);

            return members;
        }
        return [];
    }, [roomsSelector]);

    useEffect(() => {
        if (roomDetail && roomDetail.groups === 1) {
            setRoomRole(true);
        }
    }, [roomDetail]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span className={cx('text-header')}>Detail</span>
            </div>
            <div className={cx('body')}>
                <span className={cx('title-header')}>Member</span>
                <div className={cx('members')}>
                    <div className={cx('item-members')}>
                        {users.length > 0 &&
                            users.map((user, index) => (
                                <div key={index} className={cx('account-item-wrapper')}>
                                    <div className={cx('account-item')}>
                                        <AccountItem data={user} className={cx('item-ac')} onClick={() => {}} />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <div
                    className={cx('more')}
                    onClick={() => {
                        setMoreBtn(!moreBtn);
                    }}
                >
                    <span className={cx('more-control')}>More control </span>
                    <div className={cx('icon-down', !moreBtn && 'icon-90')}>
                        <DownIcon />
                    </div>
                </div>
                {moreBtn && (
                    <div className={cx('box-footer')}>
                        <div className={cx('box-btn')}>
                            <ButtonItem className={cx('btn')}>Báo cáo</ButtonItem>
                            <ButtonItem className={cx('btn')}>Chặn</ButtonItem>
                            <ButtonItem
                                className={cx('btn')}
                                onClick={() => {
                                    onDelete();
                                }}
                            >
                                Xoá đoạn chat
                            </ButtonItem>
                            {roomRole && (
                                <ButtonItem
                                    className={cx('btn')}
                                    onClick={() => {
                                        onOut();
                                    }}
                                >
                                    Rời nhóm
                                </ButtonItem>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {deleteOpen && (
                <ConfirmDelete
                    text={t('noti.noti_delete')}
                    textBtnConfirm={t('noti.delete')}
                    textBtnCancel={t('noti.cancel')}
                    closeViewer={() => {
                        closeViewer();
                    }}
                    onClick={() => {
                        handleConfirmDelete();
                    }}
                />
            )}
            {outOpen && (
                <ConfirmDelete
                    text={t('noti.noti_out_room')}
                    textBtnConfirm={t('noti.out')}
                    textBtnCancel={t('noti.cancel')}
                    closeViewer={() => {
                        closeViewer();
                    }}
                    onClick={() => {
                        handleOutRoom();
                    }}
                />
            )}
        </div>
    );
};

export default BoxDetail;
