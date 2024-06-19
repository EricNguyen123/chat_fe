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
import { setupSocketEvents } from '../../../../services/socketEvents';
import ClickOutside from '../../../../components/ClickOutside';

const cx = classNames.bind(styles);

const ListMessages: React.FC = () => {
    const userSelector = useSelector(({ users }: any) => users);
    const roomsSelector = useSelector(({ rooms }: any) => rooms);
    const lastMessagesSelector = useSelector(({ lastMessages }: any) => lastMessages);
    const deleteRoomSelector = useSelector(({ deleteRoom }: any) => deleteRoom);
    const [rooms, setRooms] = useState<any[]>([]);
    const [onViewAddGroup, setOnViewAddGroup] = useState<boolean>(false);
    const { t } = useTranslation('messages');
    const dispatch = useDispatch();
    const socketEvents = setupSocketEvents(userSelector.currentUser && userSelector.currentUser.id);

    useEffect(() => {
        if (roomsSelector.loading) {
            closeViewer();
        }
        if (roomsSelector && roomsSelector.rooms && userSelector.currentUser && lastMessagesSelector.allLastMessages) {
            const lastMessages = JSON.parse(lastMessagesSelector.allLastMessages);
            const currentUserID = userSelector.currentUser.id;
            const isSingleGroup = (room: any) => room.groups === 0;

            const lastMessagesMap = new Map();
            lastMessages.forEach((msg: any) => {
                lastMessagesMap.set(msg.id, msg);
            });

            const newRooms = roomsSelector.rooms.map((room: any) => {
                const lastMessage = lastMessagesMap.get(room.id);
                const lastMessageData = lastMessage ? lastMessage.lastMessage : [];
                const userChatEnd =
                    lastMessageData.length > 0
                        ? room.users.find((user: any) => user.id === lastMessageData[0].userId)
                        : undefined;
                const roomInfor = isSingleGroup(room)
                    ? room.users.find((user: any) => user.id !== currentUserID)
                    : room.roomInfor;

                lastMessagesMap.delete(room.id);

                return {
                    ...room,
                    lastMessage: lastMessageData,
                    userChatEnd: userChatEnd ? [userChatEnd] : [],
                    roomInfor: roomInfor,
                };
            });

            lastMessagesMap.forEach((msg) => {
                const userChatEnd =
                    msg.lastMessage.length > 0
                        ? msg.users.find((user: any) => user.id === msg.lastMessage[0].userId)
                        : undefined;
                const roomInfor = isSingleGroup(msg)
                    ? msg.users.find((user: any) => user.id !== currentUserID)
                    : msg.roomInfor;

                const newRoom = {
                    ...msg,
                    lastMessage: msg.lastMessage,
                    userChatEnd: userChatEnd ? [userChatEnd] : [],
                    roomInfor: roomInfor,
                };

                newRooms.push(newRoom);
            });
            let newRoomed;
            if (deleteRoomSelector.deleteRoom && deleteRoomSelector.deleteRoom.roomId) {
                newRoomed = newRooms.filter(
                    (room: any) => parseInt(room.id, 10) !== parseInt(deleteRoomSelector.deleteRoom.roomId, 10),
                );
            }
            setRooms(newRoomed ? newRoomed : newRooms);
        }
    }, [roomsSelector, userSelector, lastMessagesSelector, deleteRoomSelector]);

    useEffect(() => {
        dispatch(getRoom());
    }, []);

    useEffect(() => {
        if (userSelector && userSelector.currentUser) {
            const socketEvents = setupSocketEvents && setupSocketEvents(userSelector.currentUser.id);
            socketEvents && socketEvents.sendAllLastMessages(userSelector.currentUser.id);
        }
    }, []);

    const handleAddGroup = () => {
        setOnViewAddGroup(!onViewAddGroup);
    };

    const closeViewer = () => {
        setOnViewAddGroup(false);
    };

    const handleJoinRoom = (roomId: string) => {
        if (socketEvents) {
            const { joinRoom } = socketEvents;
            joinRoom(roomId);
        }
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
                            <ItemUser
                                key={index}
                                to={`/messages/${room.id}`}
                                data={room.roomInfor}
                                onClick={() => handleJoinRoom(room.id)}
                                lastMessage={room.lastMessage}
                                userChatEnd={room.userChatEnd}
                                roomId={room.id}
                            />
                        ))}
                    </Menu>
                </div>
            </div>
            {onViewAddGroup && (
                <div className={cx('add-viewer')}>
                    <ClickOutside
                        openView={onViewAddGroup}
                        closeView={() => {
                            closeViewer();
                        }}
                        className={cx('box-add')}
                    >
                        <button onClick={closeViewer} className={cx('close-button')}>
                            <CloseButton />
                        </button>
                        <PopupAddGroup />
                    </ClickOutside>
                </div>
            )}
        </div>
    );
};

export default ListMessages;
