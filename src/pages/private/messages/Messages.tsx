import classNames from 'classnames/bind';
import styles from './Messages.module.scss';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import ListMessages from './list-messages';
import BoxMessages from './box-messages';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setupSocketEvents } from '../../../services/socketEvents';
import config from '../../../config';

const cx = classNames.bind(styles);

const Messages = () => {
    const userSelector = useSelector(({ users }: any) => users);
    const roomsSelector = useSelector(({ rooms }: any) => rooms);
    const deleteRoomSelector = useSelector(({ deleteRoom }: any) => deleteRoom);
    const messagesSelector = useSelector(({ messages }: any) => messages);
    const { id } = useParams<{ id: string }>();
    const [checkMessage, setCheckMessage] = useState<boolean>(false);
    const [roomInfor, setRoomInfor] = useState<{ imagAvatar: string; name: string }>({ imagAvatar: '', name: '' });
    const socketEvents = setupSocketEvents(userSelector.currentUser && userSelector.currentUser.id);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            roomsSelector.rooms.forEach((room: any) => {
                parseInt(room.id, 10) === parseInt(id, 10) &&
                    (room.groups === 0
                        ? setRoomInfor(room.users.find((r: any) => r.id !== userSelector.currentUser.id))
                        : setRoomInfor({ ...room.roomInfor }));
            });
            if (socketEvents) {
                const { joinRoom } = socketEvents;
                joinRoom(id);
            }
            setCheckMessage(true);
        } else {
            setCheckMessage(false);
        }
    }, [id, roomsSelector.rooms]);

    useEffect(() => {
        if (
            id &&
            deleteRoomSelector.deleteRoom &&
            deleteRoomSelector.deleteRoom.roomId &&
            parseInt(deleteRoomSelector.deleteRoom.roomId, 10) === parseInt(id, 10)
        ) {
            navigate(config.routes.messages);
        }
    }, [deleteRoomSelector.deleteRoom]);

    useEffect(() => {
        if (
            id &&
            messagesSelector &&
            messagesSelector.outMessage &&
            parseInt(messagesSelector.outMessage.roomId, 10) === parseInt(id, 10)
        ) {
            navigate(config.routes.messages);
        }
    }, [messagesSelector]);

    return (
        <div className={cx('wrapper')}>
            <Loading isLoading={roomsSelector.loading} />
            <ListMessages />
            <BoxMessages checkMessage={checkMessage} id={id} roomInfor={roomInfor} />
        </div>
    );
};

export default Messages;
